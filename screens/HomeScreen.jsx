import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

const HomeScreen = ({ navigation }) => {
	const { navigate } = navigation;
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require("../images/tree.png")}>
				<Text style={styles.text}>Welcome to NeighbourHoot</Text>
				<View style={styles.bothButtons}>
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
	text: {
		color: "white",
		fontSize: 30,
		fontWeight: "bold",
		//textTransform: "lowercase",
		textAlign: "center",
		marginTop: 80,
		marginBottom: 5,
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},
	buttonContainer: {
		backgroundColor: "#6D3716",
		borderRadius: 5,
		padding: 10,
		margin: 10,
		width: 100,
	},
	buttonText: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
	},
	image: {
		height: "100%",
		width: "100%",
	},
	bothButtons: {
		flexDirection: "row",
		justifyContent: "center",
	},
});

export default HomeScreen;
