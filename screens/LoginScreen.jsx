import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Amplify, { Auth } from "aws-amplify";
import { LocationContext } from "../components/LocationContext";
const LoginScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [context, setContext] = useContext(LocationContext);

  const navigator = () => {
    navigate("Main");
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      if (email !== "" && password !== "") {
        const user = await Auth.signIn(email, password);
        await setContext({ ...context, user_id: user.username });
        navigator();
      } else {
        setErrorMsg("Email and password must be filled");
      }
    } catch (error) {
      const { message } = error;
      setErrorMsg(message);
      console.log(console.error);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#2D9676" }}>
      <View style={styles.container}>
        <Text style={styles.text}>Please enter your login details</Text>

        <Text>Enter your email address</Text>
        <TextInput
          style={[styles.textInput, styles.shadow]}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text>Enter your password</Text>
        <TextInput
          style={[styles.textInput, styles.shadow]}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          keyboardType="default"
        />

        <Text style={styles.errorMsg}>{errorMsg}</Text>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D9676",
    marginTop: 50
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20
  },
  buttonContainer: {
    backgroundColor: "#6D3716",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    width: 100
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  textInput: {
    borderColor: "black",
    color: "white",
    borderWidth: 1.5,
    marginBottom: 10,
    borderRadius: 50,
    width: 200,
    textAlign: "center",
    fontSize: 15,
    padding: 10,
    backgroundColor: "#42A131"
  },
  errorMsg: {
    color: "red"
  },
  shadow: {
    shadowColor: "black",
    shadowRadius: 10,
    elevation: 20,
    shadowOffset: {
      width: 3,
      height: 5
    }
  }
});

export default LoginScreen;
