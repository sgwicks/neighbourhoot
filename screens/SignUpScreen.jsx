import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Auth } from "aws-amplify";

const SignUpScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShow(Platform.OS === "ios");
    setDateOfBirth(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

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

    const navigator = () => {
      navigate("Welcome");
    };

    try {
      if (
        email !== "" &&
        firstName !== "" &&
        lastName !== "" &&
        dateOfBirth !== "" &&
        password !== ""
      ) {
        if (password === confirmPassword) {
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

          navigator();
        } else {
          setErrorMsg("Password must be the same");
        }
      } else {
        setErrorMsg("All fields must be filled");
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Please fill in the form below to sign up.
        </Text>
        <Text>Enter your first name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setFirstName(text)}
        />
        <Text>Enter your surname</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setLastName(text)}
        />
        <Text>Enter your email address</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text>Enter your date of birth</Text>
        <TextInput
          style={styles.textInput}
          value={dateOfBirth.toLocaleDateString()}
        ></TextInput>
        <TouchableOpacity
          onPress={showDatePicker}
          title="Select date of birth"
          style={styles.datePicker}
        >
          <Text>Select date of birth</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            // style={{ textColor: "red" }}
            testID="dateTimePicker"
            mode="date"
            display="spinner"
            value={dateOfBirth}
            onChange={onChange}
            textColor="red"
          />
        )}
        <Text>Enter Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          keyboardType="default"
        />
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={true}
          keyboardType="default"
        />
        <View>
          <Text style={styles.errorMsg}>{errorMsg}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign up</Text>
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
    backgroundColor: "#2D9676"
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    // fontFamily: "Roboto",
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
  datePicker: {
    borderRadius: 5,
    padding: 10,
    width: 150,
    backgroundColor: "#49B036",
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 1
  }
});

export default SignUpScreen;
