import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapMarker,
  faCamera,
  faSearch,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import { View, StyleSheet } from "react-native";

const NavBar = ({ navigation, birdList, updateBirdList, back }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.iconContainer}>
      <FontAwesomeIcon
        icon={faMapMarker}
        size={30}
        color="#DD4B3E"
        onPress={() => navigate("NewPlace", { birdList })}
        style={{
          marginTop: 10,
          flex: 1
        }}
      />
      <FontAwesomeIcon
        icon={faSearch}
        size={30}
        onPress={() => navigate("FilterModal", { birdList })}
        style={{
          marginTop: 10,
          flex: 1
        }}
      />
      <FontAwesomeIcon
        icon={faCamera}
        size={30}
        style={{ flex: 1, marginTop: 10 }}
        onPress={() => {
          navigate("AddBird", {
            birdList,
            updateBirdList,
            back
          });
        }}
      />
      <FontAwesomeIcon
        icon={faUserCircle}
        size={30}
        onPress={() => navigate("Profile")}
        style={{
          marginTop: 10,
          flex: 1
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#6D3716",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    width: 100,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 10,
    color: "white",
    textAlign: "center"
  },
  iconContainer: {
    backgroundColor: "#2D9676",
    borderTopColor: "black",
    borderTopWidth: 4,
    height: 60,
    justifyContent: "space-around",
    flexDirection: "row"
  }
});

export default NavBar;
