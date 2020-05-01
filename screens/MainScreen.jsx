
import React, { useState, useEffect, Fragment } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getAllBirdsByArea } from "../apiRequest/apiRequests";
import Overlay from "react-native-modal-overlay";
import ImagePicker from "../components/ImagePicker";

const MainScreen = (props) => {
	const [images, updateImages] = useState([]);
	const [location, updateLocation] = useState("Sleights");
	const [isLoading, updateIsLoading] = useState(true);
	const [isVisible, updateIsVisible] = useState(false);

	const onClose = () => {
		updateIsVisible(false);
	};
    
    const imageTakenHandler = imagePath => {
    setImages({ img: imagePath });
  };
    
    // useEffect(() => {
  //   imageTakenHandler(imagePath);
  // }, [imagePath]);

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
			<View>
				<Text>Loading!</Text>
			</View>
		);
	return (
		<View>
			<Text>This is the main Screen</Text>
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
      
			<Overlay visible={isVisible} onClose={onClose} closeOnTouchOutside>
        
				<Text>Lorem ipsum dolor etc.</Text>
			</Overlay>
      <ImagePicker onImageTaken={imageTakenHandler} />
		</View>
	);
};

const styles = StyleSheet.create({
	birds: {
		width: 100,
		height: 100,
		// resizeMode: "contain",
		flex: 1,
	},

});

export default MainScreen;
