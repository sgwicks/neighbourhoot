import React, { useState, useEffect, Fragment } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { getAllBirdsByArea } from '../apiRequest/apiRequests';
import ImagePicker from '../components/ImagePicker';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MapScreen from './MapScreen';

const MainScreen = ({ navigation }) => {
  const [images, updateImages] = useState([]);
  const [location, updateLocation] = useState('Sleights');
  const [isLoading, updateIsLoading] = useState(true);

  const imageTakenHandler = (imagePath) => {
    setImages({ img: imagePath });
  };

  const getAreaBirdsUrl = `https://rmx5oedl1b.execute-api.eu-west-2.amazonaws.com/development/birds/${location}`;

  useEffect(() => {
    getAllBirdsByArea(getAreaBirdsUrl)
      .then((birds) => {
        updateImages(birds);
      })
      .then(() => {
        updateIsLoading(false);
      });
  }, [location]);

  if (isLoading)
    return (
      <ScrollView>
        <View>
          <Text>Loading!</Text>
        </View>
        ); return (
        <View>
          <Text>This is the main Screen</Text>
          {images.map((bird, i) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('MyModal', { ...bird });
                }}
                key={i}>
                <Image style={styles.birds} source={{ uri: bird.img_url }} />
              </TouchableWithoutFeedback>
            );
          })}
          <ImagePicker onImageTaken={imageTakenHandler} />
          <MapScreen />
        </View>
      </ScrollView>
    );
};
const styles = StyleSheet.create({
  birds: {
    width: 100,
    height: 100
    // resizeMode: "contain",
  }
});

export default MainScreen;
