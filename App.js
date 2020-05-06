import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MainScreen from "./screens/MainScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

import BirdOverlay from "./components/BirdOverlay";
import MapScreen from "./screens/MapScreen";
import NewPlaceScreen from "./screens/NewPlaceScreen";

import ProfileScreen from "./screens/ProfileScreen";


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainView = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="newMain" component={MainScreen} />
      <MainStack.Screen name="MyModal" component={BirdOverlay} />
    </MainStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Map" component={MapScreen} />
        

       
        
        <RootStack.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={{ title: "New Place Screen" }}
        />

        <RootStack.Screen

          name="Main"
          component={MainView}
          options={{ title: "Main" }}
        />
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <RootStack.Screen

          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <RootStack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <RootStack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}

        />
        <RootStack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Map" }}
        />
        <RootStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}

        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F5FCFF"

  },
  welcome: {
    fontSize: 20,
    textAlign: "center",

    margin: 10

  },
  instructions: {
    textAlign: "center",
    color: "#333333",

    marginBottom: 5
  },

});
