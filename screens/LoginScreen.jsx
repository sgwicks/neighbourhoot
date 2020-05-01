import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button
} from "react-native";
import Amplify, { Auth } from "aws-amplify";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigator = () => {
    navigate("Main");
  };

  const handleSubmit = async event => {
    event.preventDefault();

    //AWS Cognito integration here
    try {
      if (email !== "" && password !== "") {
        const user = await Auth.signIn(email, password);
        navigator();
      } else {
        setErrorMsg("Username and password must be filled");
      }
    } catch (error) {
      const { message } = error;
      setErrorMsg(message);
      console.log(console.error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Login to your profile</Text>
        <View>
          <Text>Enter your email address</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View>
          <Text>Enter your password</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            keyboardType="default"
          />
        </View>
        <View>
          <Text style={styles.errorMsg}>{errorMsg}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Button
            style={styles.buttonText}
            title="Log in"
            onPress={handleSubmit}
          />
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
    backgroundColor: "#ebebeb"
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold"
  },
  buttonContainer: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: "white"
  },
  errorMsg: {
    color: "red"
  }
});

export default LoginScreen;
