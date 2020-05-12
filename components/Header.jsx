import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{props.title}</Text>
			<Image source={require("../images/owl_logo.png")} />
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 90,
		paddingTop: 36,
		backgroundColor: "#207053",
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitle: {
		color: "black",
		fontSize: 18,
	},
});
export default Header;
