import Overlay from 'react-native-modal-overlay';
import React, { Component, Fragment, useState } from 'react';
import { Text, Image } from 'react-native';

const BirdOverlay = ({ route, navigation }) => {
  const [isVisible, updateIsVisible] = useState(true);

  const onClose = () => {
    updateIsVisible(false);
    navigation.goBack();
  };

  const { bird_name, img_url } = route.params;

  return (
    <Overlay visible={isVisible} onClose={onClose} closeOnTouchOutside>
      <Image style={{ width: 100, height: 100 }} source={{ uri: img_url }} />
      <Text>{bird_name}</Text>
    </Overlay>
  );
};

export default BirdOverlay;
