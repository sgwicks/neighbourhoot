import Overlay from "react-native-modal-overlay";
import React, { Component, Fragment, useState } from "react";
import { Text, Image } from "react-native";
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
        <Text key={key}>
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
      <Image style={{ width: 100, height: 100 }} source={{ uri: img_url }} />
      <Text>{bird_name}</Text>
      <Text>{featureList(features)}</Text>
      {screen === "ProfileScreen" && (
        <TouchableOpacity onPress={handleDelete}>
          <Text>Delete</Text>
        </TouchableOpacity>
      )}
    </Overlay>
  );
};

export default BirdOverlay;
