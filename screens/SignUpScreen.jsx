import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUpScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [check, passwordCheck] = useState(true);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const submit = () => {
    const userSignUp = {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      confirmPassword,
    };
    userSignUp.password !== userSignUp.confirmPassword
      ? passwordCheck(false)
      : setSubmitted(true);
    console.log(userSignUp);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode("date");
  };

  return (
    <View>
      <Text>This is the Sign Up Screen</Text>
      <Text>Enter your first name</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />
      <Text>Enter your surname</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />
      <Text>Enter your email address</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Enter your date of birth</Text>
      <Button onPress={showDatePicker} title="Show date picker!" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text>
        {check ? "Enter Password" : "Enter Password - Passwords do not match"}
      </Text>
      <TextInput
        style={check ? styles.defaultPasswords : styles.unmatchedPasswords}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        keyboardType="default"
      />
      <Text>
        {check
          ? "Confirm Password"
          : "Confirm Password - Passwords do not match"}
      </Text>
      <TextInput
        style={check ? styles.defaultPasswords : styles.unmatchedPasswords}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={true}
        keyboardType="default"
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Button style={styles.buttonText} title="Sign up" onPress={submit} />
        {submitted && navigate("Login")}
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
  unmatchedPasswords: {
    backgroundColor: "red",
  },
  defaultPasswords: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default SignUpScreen;
