import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    const userLogin = {
      email,
      password,
    };
    setSubmitted(true);
    console.log(userLogin);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Login to your profile</Text>
        <View>
          <Text>Enter your email address</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View>
          <Text>Enter your password</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            keyboardType="default"
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Button style={styles.buttonText} title="Log in" onPress={submit} />
          {submitted && navigate("Main")}
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

export default LoginScreen;
