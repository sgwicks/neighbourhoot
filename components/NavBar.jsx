import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapMarker,
  faPlusCircle,
  faCamera,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const NavBar = ({ navigation, birdList }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.iconContainer}>
      <FontAwesomeIcon
        icon={faMapMarker}
        size={30}
        color="#DD4B3E"
        onPress={() => navigate("NewPlace", { birdList })}
        style={{
          alignSelf: "flex-start",
          top: 20,
          bottom: 20,
          left: 20,
          flex: 1
        }}
      />
      <FontAwesomeIcon
        icon={faSearch}
        size={30}
        onPress={() => navigate("FilterModal", { birdList })}
        style={{
          alignSelf: "center",
          bottomMargin: 30,
          flex: 1
        }}
      />

      <FontAwesomeIcon
        icon={faPlusCircle}
        size={30}
        onPress={() => navigate("Profile")}
        style={{
          alignSelf: "flex-end",
          bottom: 18,
          right: 20,
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
    justifyContent: "space-around"
  }
});

export default NavBar;
