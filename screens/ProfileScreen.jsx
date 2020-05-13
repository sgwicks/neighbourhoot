import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import { getBirdsByUserId } from "../apiRequest/apiRequests";
import { LocationContext } from "../components/LocationContext";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import NavBar from "../components/NavBar";
import NewPlaceScreen from "./NewPlaceScreen";
import Loading from "./Loading";

const ProfileScreen = ({ navigation }) => {
	const [context, setContext] = useContext(LocationContext);
	const [birdList, updateBirdList] = useState([]);
	const { user_id } = context;
	const [trigger, toggleTrigger] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getBirdsByUserId(user_id).then((response) => {
			updateBirdList(response);
			setIsLoading(false);
		});
	}, [trigger]);

	const handlePress = () => {
		navigation.navigate("ProfileAddBird", {
			birdList,
			updateBirdList,
			back: "ProfileScreen",
		});
	};

	if (isLoading) return <Loading />;

	return (
		<View style={styles.container}>
			<ScrollView style={styles.addSighting}>
				<View style={styles.profileGallery}>
					{birdList.map((bird, i) => {
						return (
							<TouchableWithoutFeedback
								style={styles.birds}
								onPress={() => {
									navigation.navigate("ProfileModal", {
										...bird,
										screen: "ProfileScreen",
										toggleTrigger,
										trigger,
									});
								}}
								key={i}>
								<Image style={styles.birds} source={{ uri: bird.img_url }} />
							</TouchableWithoutFeedback>
						);
					})}
				</View>
			</ScrollView>
			<View style={styles.mapContainer}>
				<NewPlaceScreen />
			</View>
			<View style={styles.iconContainer}>
				<NavBar
					navigation={navigation}
					birdList={birdList}
					updateBirdList={updateBirdList}
					back='Profile'
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexWrap: "wrap",
		alignItems: "center",
		backgroundColor: "#2D9676",
		justifyContent: "space-around",
	},
	birds: {
		height: 100,
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		width: 100,
		margin: 10,
		justifyContent: "center",
		borderRadius: 20,
	},
	mapContainer: {
		width: "100%",
		height: 200,
	},
	addSighting: {
		width: "100%",
	},
	addSightingButton: {
		width: "100%",
		height: 50,
		textAlign: "center",
		justifyContent: "center",
	},
	profileGallery: {
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
	},
	iconContainer: {
		backgroundColor: "#2D9676",
		borderTopColor: "black",
		borderTopWidth: 4,
		height: 60,
		justifyContent: "space-around",
		width: "100%",
	},
});

export default ProfileScreen;
