import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getAllBirdsByArea } from "../apiRequest/apiRequests";

const MainScreen = (props) => {
	const [images, updateImages] = useState([]);
	const [location, updateLocation] = useState("Sleights");
	const [isLoading, updateIsLoading] = useState(true);

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

	if (isLoading)
		return (
			<View>
				<Text>Loading!</Text>
			</View>
		);
	return (
		<View>
			<Text>This is the main Screen</Text>
			{console.log(images, "<---inside the return")}
			{images.map((bird, i) => {
				return <Image style={styles.birds} key={i} source={bird.img_url} />;
			})}
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
