import * as React from "react";
import { StyleSheet, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MainScreen from "./screens/MainScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import BirdOverlay from "./components/BirdOverlay";
import NewPlaceScreen from "./screens/NewPlaceScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FilterOverlay from "./components/FilterOverlay";
import Header from "./components/Header";
import { LocationProvider } from "./components/LocationContext";
import ImagePicker from "./components/ImagePicker";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainView = () => {
	return (
		<MainStack.Navigator headerMode='none'>
			<MainStack.Screen name='newMain' component={MainScreen} />
			<MainStack.Screen name='MyModal' component={BirdOverlay} />
			<MainStack.Screen name='FilterModal' component={FilterOverlay} />
		</MainStack.Navigator>
	);
};

const ProfileView = () => {
	return (
		<ProfileStack.Navigator headerMode='none'>
			<ProfileStack.Screen name='ProfileScreen' component={ProfileScreen} />
			<ProfileStack.Screen name='ProfileModal' component={BirdOverlay} />
		</ProfileStack.Navigator>
	);
};

export default function App() {
	return (
		<LocationProvider>
			<View style={styles.screen}>
				<NavigationContainer>
					<Header />
					<RootStack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: "#2d9676",
								border: 0,
								elevation: 0,
								shadowOpacity: 0,
								borderBottomWidth: 0,
							},
							headerTintColor: "#fff",
							headerBackTitle: " ",
						}}>
						<RootStack.Screen
							name='Home'
							component={HomeScreen}
							options={{ title: "" }}
						/>
						<RootStack.Screen
							name='Profile'
							component={ProfileView}
							options={{ title: "My Birds:" }}
						/>

						<RootStack.Screen
							name='Main'
							component={MainView}
							options={{ title: "" }}
						/>

						<RootStack.Screen
							name='Login'
							component={LoginScreen}
							options={{ title: "" }}
						/>

						<RootStack.Screen
							name='NewPlace'
							component={NewPlaceScreen}
							options={{ title: "" }}
						/>

						<RootStack.Screen
							name='SignUp'
							component={SignUpScreen}
							options={{ title: "" }}
						/>
						<RootStack.Screen
							name='Welcome'
							component={WelcomeScreen}
							options={{ title: "" }}
						/>
						<ProfileStack.Screen
							options={{ title: "" }}
							name='AddBird'
							component={ImagePicker}
						/>
					</RootStack.Navigator>
				</NavigationContainer>
			</View>
		</LocationProvider>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	header: {
		backgroundColor: "#F5FCFF",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
	instructions: {
		textAlign: "center",
		color: "#333333",

		marginBottom: 5,
	},
});
