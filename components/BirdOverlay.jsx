import Overlay from "react-native-modal-overlay";
import React, { Component, Fragment, useState } from "react";
import { Text, Image, StyleSheet } from "react-native";
import {
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native-gesture-handler";
import { deleteBird } from "../apiRequest/apiRequests";

const BirdOverlay = ({ route, navigation }) => {
  const { navigate } = navigation;
  const [isVisible, updateIsVisible] = useState(true);
  const {
    bird_name,
    img_url,
    features,
    screen,
    bird_id,
    toggleTrigger,
    trigger
  } = route.params;
  const onClose = () => {
    updateIsVisible(false);
    navigate(screen);
  };

  const featureList = features => {
    const list = [];
    for (const key in features) {
      list.push(
        <Text key={key} style={{ alignSelf: "flex-start", marginLeft: 20 }}>
          {key}: {features[key]}
        </Text>
      );
    }
    return list;
  };

  const handleDelete = () => {
    deleteBird(bird_id, bird_name).then(() => {
      toggleTrigger(!trigger);
      onClose();
    });
  };

  return (
    <Overlay visible={isVisible} onClose={onClose} closeOnTouchOutside>
      <Image style={{ width: 300, height: 300 }} source={{ uri: img_url }} />
      <Text style={styles.text}>{bird_name}</Text>
      {featureList(features)}
      {screen === "ProfileScreen" && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      )}
    </Overlay>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
  },
  delete: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 5,
    margin: 20,
    width: 100
  }
});

export default BirdOverlay;
