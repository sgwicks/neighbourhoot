import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Neighbourhoot!</Text>
      <Text style={styles.mainText}>You have been registered. </Text>
      <Text style={styles.mainText}>
        Please confirm your email address and then continue to Log in!
      </Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: "Roboto",
    marginBottom: 40,
  },
  buttonContainer: {
    backgroundColor: "#6D3716",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    width: 100,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  mainText: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default WelcomeScreen;
