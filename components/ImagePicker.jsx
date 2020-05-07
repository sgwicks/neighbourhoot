import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { RNS3 } from 'react-native-aws3';
import accessKeys from '../keys';
import { postBird } from '../apiRequest/apiRequests';

const ImgPicker = (props) => {
  const [pickedImage, setPickedImage] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL,
      Permissions.LOCATION
    );
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions.',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };
  const user_id = '33';

  const takeImageHandler = async () => {
    try {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5
      });
      console.log(image, '<<<<<<<');

      const file = {
        uri: image.uri,
        name: user_id + '/' + Math.random().toString(),
        type: 'image/jpg'
      };

      const config = {
        keyPrefix: 's3/',
        bucket: 'birdpicstorage',
        region: 'eu-west-2',
        accessKey: accessKeys.AWSaccessKey,
        secretKey: accessKeys.AWSsecretKey,
        successActionStatus: 201
      };

      const img_url = RNS3.put(file, config)
        .then(
          ({
            body: {
              postResponse: { location }
            }
          }) => {
            return location;
          }
        )
        .catch((err) => {
          console.log(err, 'errr in RNS3');
        });
      // setPickedImage(image.uri);

      // postBird()
      //   .then((response) => console.log(response))
      //   .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button title='Take Image' onPress={takeImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    marginBottom: 15
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImgPicker;
