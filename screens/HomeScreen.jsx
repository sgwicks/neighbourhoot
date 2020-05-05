import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Neighbourhoot!</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigate("SignUp")}
      >
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
    backgroundColor: "#2D9676",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: "Roboto",
    marginBottom: 20,
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
});

export default HomeScreen;
