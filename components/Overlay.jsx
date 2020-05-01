import Overlay from "react-native-modal-overlay";
import React, { Component, Fragment, useState } from "react";

const BirdOverlay = () => {
	const [isVisible, updateIsVisible] = useState(true);

	const onClose = () => {
		updateIsVisible(false);
	};

	return (
		<Overlay visible={isVisible} onClose={onClose} closeOnTouchOutside>
			<Text>Lorem ipsum dolor etc.</Text>
		</Overlay>
	);
};

export default BirdOverlay;
