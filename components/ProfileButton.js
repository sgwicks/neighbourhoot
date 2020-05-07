import React from "react";
import { Button } from "react-native";

const ProfileButton = ({ navigation }) => {
  // console.log(navigation);
  const { navigate } = navigation;

  return (
    <View>
      <Text>HEREE</Text>
      <Button onPress={() => navigate("Profile")} title="Profile" />;
    </View>
  );
};

export default ProfileButton;
