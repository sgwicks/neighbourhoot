import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	const { navigate } = navigation;
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome to Neighbourhoot!</Text>
			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => navigate("Login")}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => navigate("SignUp")}>
				<Text style={styles.buttonText}>Sign Up</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ebebeb",
	},
	text: {
		color: "#101010",
		fontSize: 24,
		fontWeight: "bold",
	},
	buttonContainer: {
		backgroundColor: "blue",
		borderRadius: 5,
		padding: 10,
		margin: 20,
	},
	buttonText: {
		fontSize: 20,
		color: "white",
	},
});

export default HomeScreen;
