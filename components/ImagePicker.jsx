import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { RNS3 } from "react-native-aws3";
import accessKeys from "../keys3";
import { postBird } from "../apiRequest/apiRequests";
import { LocationContext } from "./LocationContext";
import BirdDropDown from "./BirdDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const ImgPicker = props => {
  const [context, setContext] = useContext(LocationContext);
  const { lat, lon } = context;
  const [pickedImage, setPickedImage] = useState();
  const [img_url, setImageURL] = useState("");
  const [bird_name, setBird_Name] = useState("");

  const { navigation } = props;
  const { birdList, updateBirdList, back } = props.route.params;

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL,
      Permissions.LOCATION
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions.",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const user_id = context.user_id;

  const takeImageHandler = async () => {
    try {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5
      });

      const file = {
        uri: image.uri,
        name: user_id + "/" + Math.random().toString(),
        type: "image/jpg"
      };

      const config = {
        keyPrefix: "s3/",
        bucket: "birdpicstorage",
        region: "eu-west-2",
        accessKey: accessKeys.AWSaccessKey,
        secretKey: accessKeys.AWSsecretKey,
        successActionStatus: 201
      };

      RNS3.put(file, config)
        .then(
          ({
            body: {
              postResponse: { location }
            }
          }) => {
            return location;
          }
        )
        .then(img_url => setImageURL(img_url))
        .catch(err => {
          console.log(err, "errr in RNS3");
        });
      setPickedImage(image.uri);
    } catch (err) {
      console.log(err);
    }
  };

  const postBirdHandler = () => {
    const bird = {
      img_url,
      bird_name,
      user_id,
      location: { lat, lon }
    };
    postBird(bird)
      .then(response => {
        updateBirdList([...birdList, response]);
        setPickedImage();
      })
      .then(() => {
        navigation.navigate(back);
      })
      .catch(err => console.log(err));
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
      <TouchableOpacity>
        <FontAwesomeIcon
          icon={faCamera}
          onPress={takeImageHandler}
          size={30}
          style={{ alignSelf: "center", flex: 1 }}
          takeImageHandler={takeImageHandler}
        />
      </TouchableOpacity>
      <BirdDropDown setBird_Name={setBird_Name} />
      <TouchableOpacity
        style={styles.postButtonContainer}
        onPress={postBirdHandler}
      >
        <Text style={styles.postButton}>Post Bird Sighting</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  postButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6D3716",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    width: 200
  },
  postButton: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  imagePicker: {
    paddingTop: 20,
    alignItems: "center",
    marginBottom: 15,
    flexBasis: "100%",
    flexShrink: 0,
    backgroundColor: "#2D9676"
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ImgPicker;
