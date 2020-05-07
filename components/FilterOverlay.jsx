import Overlay from "react-native-modal-overlay";
import React, { Component, Fragment, useState } from "react";
import { Text } from "react-native";

const FilterOverlay = ({ route, navigation }) => {
  const { navigate } = navigation;
  const [isVisible, updateIsVisible] = useState(true);

  const onClose = () => {
    updateIsVisible(false);
    navigate("newMain");
  };

  return (
    <Overlay visible={isVisible} onClose={onClose} closeOnTouchOutside>
      <Text>Filter stuff here</Text>
    </Overlay>
  );
};

export default FilterOverlay;
