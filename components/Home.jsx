import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text>THIS IS HOME</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate("Profile", { name: "Jane" })}
      />
    </View>
  );
};

export default Home;
