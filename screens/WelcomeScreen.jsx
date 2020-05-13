import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
	const { navigate } = navigation;
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require("../images/tree.png")}>
				<View style={styles.textContainer}>
					<Text style={styles.mainText}>You have been registered. </Text>
					<Text style={styles.mainText}>
						Please confirm your email address and then continue to Log in!
					</Text>
				</View>
				<View style={styles.button}>
					<TouchableOpacity
						style={styles.buttonContainer}
						onPress={() => navigate("Login")}>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#2D9676",
	},
	button: {
		flexDirection: "row",
		justifyContent: "center",
	},
	buttonContainer: {
		backgroundColor: "#6D3716",
		borderRadius: 5,
		padding: 10,
		margin: 20,
		width: 100,
		justifyContent: "center",
	},
	buttonText: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
	},
	mainText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		paddingLeft: 30,
		paddingRight: 30,
		backgroundColor: "rgba(0, 0, 0, 0.25)",
	},
	image: {
		height: "100%",
		width: "100%",
	},
	textContainer: {
		marginTop: 70,
	},
});

export default WelcomeScreen;
