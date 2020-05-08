import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { getBirdsByUserId } from "../apiRequest/apiRequests";
import ImagePicker from "../components/ImagePicker";
import { LocationContext } from "../components/LocationContext";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import NavBar from "../components/NavBar";

const ProfileScreen = ({ navigation }) => {
  const [context, setContext] = useContext(LocationContext);
  const [birdList, updateBirdList] = useState([]);
  const { user_id } = context;
  const [trigger, toggleTrigger] = useState(true);

  useEffect(() => {
    getBirdsByUserId(user_id).then(response => {
      updateBirdList(response);
    });
  }, [trigger]);

  const handlePress = () => {
    navigation.navigate("ProfileAddBird", { birdList, updateBirdList });
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Text>Add Sighting!</Text>
      </TouchableWithoutFeedback>
      <View>
        {birdList.map((bird, i) => {
          return (
            <TouchableWithoutFeedback
              style={styles.birds}
              onPress={() => {
                navigation.navigate("ProfileModal", {
                  ...bird,
                  screen: "ProfileScreen",
                  toggleTrigger,
                  trigger
                });
              }}
              key={i}
            >
              <Image style={styles.birds} source={{ uri: bird.img_url }} />
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      <NavBar navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  birds: {
    height: 150,
    display: "flex",
    width: 150,
    // borderWidth: 1,
    // borderColor: "black",
    marginBottom: 40,
    borderRadius: 20
  }
});

export default ProfileScreen;
