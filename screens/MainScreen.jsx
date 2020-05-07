import React, { useState, useEffect, Fragment } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { getAllBirdsByArea } from '../apiRequest/apiRequests';
import ImagePicker from '../components/ImagePicker';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarker, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import MapScreen from './MapScreen';
const MainScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const [images, updateImages] = useState([]);
  const [location, updateLocation] = useState('?lat=0&lon=0');
  const [isLoading, updateIsLoading] = useState(true);
  const [isVisible, updateIsVisible] = useState(true);
  // const imageTakenHandler = imagePath => {
  //   setImages({ img: imagePath });
  // };

  const getAreaBirdsUrl = `https://rmx5oedl1b.execute-api.eu-west-2.amazonaws.com/development/birds${location}`;

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
      <View>
        <Text>Loading!</Text>
      </View>
    );
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Birds in your area</Text>
          {images.map((bird, i) => {
            return (
              <TouchableWithoutFeedback
                style={styles.birds}
                onPress={() => {
                  navigation.navigate('MyModal', { ...bird });
                }}
                key={i}>
                <Image style={styles.birds} source={{ uri: bird.img_url }} />
              </TouchableWithoutFeedback>
            );
          })}
          {/* <ImagePicker onImageTaken={imageTakenHandler} /> */}
        </View>
      </ScrollView>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon
          icon={faMapMarker}
          size={30}
          color='#DD4B3E'
          onPress={() => navigate('Map')}
          style={{
            alignSelf: 'flex-start',
            top: 20,
            bottom: 10,
            left: 20,
            flex: 1
          }}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigate('FilterModal');
          }}>
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>

        <FontAwesomeIcon
          icon={faPlusCircle}
          size={30}
          onPress={() => navigate('Profile')}
          style={{
            alignSelf: 'flex-end',
            bottom: 25,
            right: 20,
            flex: 1
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  birds: {
    height: 150,
    display: 'flex',
    width: 150,
    // borderWidth: 1,
    // borderColor: "black",
    marginBottom: 40,
    borderRadius: 20
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#2D9676',
    justifyContent: 'space-around'
    // paddingBottom: 30
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'System',
    marginBottom: 40
  },
  buttonContainer: {
    backgroundColor: '#6D3716',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    width: 100,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center'
  },
  // mainText: {
  //   color: "black",
  //   fontSize: 15,
  //   textAlign: "center",
  //   paddingLeft: 30,
  //   paddingRight: 30,
  // },
  iconContainer: {
    backgroundColor: '#2D9676',
    borderTopColor: 'black',
    borderTopWidth: 4,
    height: 60,
    justifyContent: 'space-around'
  }
});

export default MainScreen;
