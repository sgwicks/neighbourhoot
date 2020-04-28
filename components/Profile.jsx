import React from "react";
import { View, Text, Button } from "react-native";

const Profile = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text>THIS IS PROFILE</Text>
      <Button
        title="Go to home"
        onPress={() => navigate("Home", { name: "Jane" })}
      />
    </View>
  );
};

export default Profile;
