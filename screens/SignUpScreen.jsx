import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Amplify, { Auth } from "aws-amplify";
// import FormErrors from "../components/FormErrors";

const SignUpScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [check, passwordCheck] = useState(true);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || userData.dateOfBirth;
    setShow(Platform.OS === "ios");
    setUserState({ dateOfBirth: currentDate });
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode("date");
  };

  // const [userData, setUserState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   dateOfBirth: new Date(),
  //   password: "",
  //   confirmPassword: "",
  //   errors: {
  //     cognito: null,
  //     blankfield: false,
  //     passwordmatch: false
  //   }
  // });

  // const clearErrorState = () => {
  //   setUserState({
  //     errors: {
  //       cognito: null,
  //       blankfield: false,
  //       passwordmatch: false
  //     }
  //   });
  // };

  const handleSubmit = async event => {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      dateOfBirth,
      password,
      confirmPassword
    };

    console.log(userData);

    //Form Validation
    // clearErrorState();
    // const error = Validate(event, userData);
    // if (error) {
    //   setUserState({
    //     errors: { ...userData.errors, ...error }
    //   });
    // }

    //AWS Cognito integration here

    try {
      const signUpResponse = await Auth.signUp({
        username: email,
        firstName,
        lastName,
        dateOfBirth,
        password,
        confirmPassword,
        attributes: {
          email
        }
      });
      console.log(signUpResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>This is the Sign Up Screen</Text>
      {/* <FormErrors formErrors={userData.errors} /> */}
      <Text>Enter your first name</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setFirstName(text)}
      />
      <Text>Enter your surname</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setLastName(text)}
      />
      <Text>Enter your email address</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Enter your date of birth</Text>
      <Button onPress={showDatePicker} title="Show date picker!" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          mode={mode}
          display="spinner"
          onChange={onChange}
        />
      )}
      <Text>
        {check ? "Enter Password" : "Enter Password - Passwords do not match"}
      </Text>
      <TextInput
        style={check ? styles.defaultPasswords : styles.unmatchedPasswords}
        onChangeText={text => setPassword(text)}
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
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry={true}
        keyboardType="default"
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Button
          style={styles.buttonText}
          title="Sign up"
          onPress={handleSubmit}
        />
        {/* {submitted && navigate("Login")} */}
      </TouchableOpacity>
    </View>
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
  unmatchedPasswords: {
    backgroundColor: "red"
  },
  defaultPasswords: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});

export default SignUpScreen;
