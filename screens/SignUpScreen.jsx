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
import Amplify, { Auth } from "aws-amplify";

const SignUpScreen = ({ navigation }) => {
	const { navigate } = navigation;
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState(new Date());
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [check, setCheck] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || userData.dateOfBirth;
		setShow(Platform.OS === "ios");
		setUserState({ dateOfBirth: currentDate });
	};

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatePicker = () => {
		showMode("date");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const userData = {
			firstName,
			lastName,
			email,
			dateOfBirth,
			password,
			confirmPassword,
		};

		const navigator = () => {
			navigate("Welcome");
		};

		//AWS Cognito integration here

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
							email,
						},
					});

					navigator();
				} else {
					setErrorMsg("Password must be the same");
				}
			} else {
				setErrorMsg("All fields must be filled");
			}
		} catch (error) {
			setErrorMsg(error);
		}
	};


	return (
		<View>
			<Text>This is the Sign Up Screen</Text>
			{/* <FormErrors formErrors={userData.errors} /> */}
			<Text>Enter your first name</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => setFirstName(text)}
			/>
			<Text>Enter your surname</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => setLastName(text)}
			/>
			<Text>Enter your email address</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => setEmail(text)}
				keyboardType='email-address'
				autoCapitalize='none'
			/>
			<Text>Enter your date of birth</Text>
			<Button onPress={showDatePicker} title='Show date picker!' />
			{show && (
				<DateTimePicker
					testID='dateTimePicker'
					mode={mode}
					display='spinner'
					onChange={onChange}
				/>
			)}
			<Text>Enter Password</Text>
			<TextInput
				style={styles.defaultPasswords}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry={true}
				keyboardType='default'
			/>
			<Text>Confirm Password</Text>
			<TextInput
				style={styles.defaultPasswords}
				onChangeText={(text) => setConfirmPassword(text)}
				secureTextEntry={true}
				keyboardType='default'
			/>
			<View>
				<Text style={styles.errorMsg}>{errorMsg}</Text>
			</View>
			<TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
				<Text>Sign up</Text>
				{/* <Button
          style={styles.buttonText}
          title="Sign up"
          onPress={handleSubmit}
        /> */}
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
	errorMsg: {
		color: "red",
	},
});

export default SignUpScreen;
