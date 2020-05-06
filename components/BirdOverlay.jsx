import Overlay from "react-native-modal-overlay";
import React, { Component, Fragment, useState } from "react";
import { Text, Image } from "react-native";

const BirdOverlay = ({ route, navigation }) => {
  const { navigate } = navigation;
  const [isVisible, updateIsVisible] = useState(true);

  const onClose = () => {
    updateIsVisible(false);
    navigate("newMain");
  };

  const { bird_name, img_url, features } = route.params;

  const featureList = (features) => {
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

  return (
    <Overlay visible={isVisible} onClose={onClose} closeOnTouchOutside>
      <Image style={{ width: 100, height: 100 }} source={{ uri: img_url }} />
      <Text>{bird_name}</Text>
      <Text>{featureList(features)}</Text>
    </Overlay>
  );
};

export default BirdOverlay;
