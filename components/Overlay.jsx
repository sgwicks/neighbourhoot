import Overlay from 'react-native-modal-overlay';
import React, { Component, Fragment, useState } from 'react';
import { Text } from 'react-native';

const BirdOverlay = ({ navigation }) => {
  const [isVisible, updateIsVisible] = useState(true);

  const onClose = () => {
    updateIsVisible(false);
    navigation.goBack();
  };

  return (
    <Overlay visible={isVisible} onClose={onClose} closeOnTouchOutside>
      <Text>Lorem ipsum dolor etc.</Text>
    </Overlay>
  );
};

export default BirdOverlay;
