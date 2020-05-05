import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { getAllBirdsByArea } from "../apiRequest/apiRequests";
import Overlay from "react-native-modal-overlay";
import ImagePicker from "../components/ImagePicker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faMapMarker,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
// import MapScreen from "./MapScreen";

const MainScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const [images, updateImages] = useState([]);
  const [location, updateLocation] = useState("Sleights");
  const [isLoading, updateIsLoading] = useState(true);
  const [isVisible, updateIsVisible] = useState(false);

  const onClose = () => {
    updateIsVisible(false);
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

  // useEffect to ask permission for user location (method in react native)
  // returns a object with longitude and latitude
  // use longitude/latitude to do stuff using Google Maps API probably

  if (isLoading)
    return (
      <View style={styles.container}>
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
              <Image
                style={styles.birds}
                key={i}
                source={{ uri: bird.img_url }}
                onPress={() => {
                  updateIsVisible(true);
                }}
              />
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.iconContainer}>
        <FontAwesomeIcon
          icon={faMapMarker}
          size={30}
          color="#DD4B3E"
          onPress={() => navigate("Map")}
          style={{
            alignSelf: "flex-start",
            top: 10,
            bottom: 10,
            left: 20,
            flex: 1,
          }}
        />

        <FontAwesomeIcon
          icon={faPlusCircle}
          size={30}
          onPress={() => navigate("Profile")}
          style={{
            alignSelf: "flex-end",
            bottom: 20,
            right: 20,
            flex: 1,
          }}
        />

        {/* <Overlay visible={isVisible} onClose={onClose} closeOnTouchOutside>
          <Text>Lorem ipsum dolor etc.</Text>
        </Overlay> */}
        {/* <ImagePicker /> */}
        {/* <MapScreen /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  birds: {
    height: 150,
    display: "flex",
    width: "35%",
    margin: 10,
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    backgroundColor: "#2D9676",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: "Roboto",
    marginBottom: 40,
  },
  buttonContainer: {
    backgroundColor: "#6D3716",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    width: 100,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  mainText: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  iconContainer: {
    backgroundColor: "#2D9676",
    borderTopColor: "black",
    borderTopWidth: 4,
    height: 60,
  },
});

export default MainScreen;
