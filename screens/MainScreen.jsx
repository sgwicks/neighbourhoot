import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import {
  getAllBirdsByArea,
  getBirdsByFeatures
} from "../apiRequest/apiRequests";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { LocationContext } from "../components/LocationContext";
import { getLocationHandler } from "../components/UserLocation";
import NavBar from "../components/NavBar";
import Loading from "./Loading";

const MainScreen = ({ navigation, route }) => {
  const [context, setContext] = useContext(LocationContext);
  const [birdList, updateBirdList] = useState([]);
  const [isLoading, updateIsLoading] = useState(true);

  useEffect(() => {
    if (route.params) {
      getBirdsByFeatures(route.params.features)
        .then(birds => {
          updateBirdList(birds);
        })
        .then(updateIsLoading(false));
    } else {
      getAllBirdsByArea(context.location)
        .then(birds => {
          updateBirdList(birds);
        })
        .then(() => {
          updateIsLoading(false);
        });
    }
  }, [context.location, route.params]);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { lat, lon } = await getLocationHandler();

        setContext({
          ...context,
          location: `?lat=${lat}&lon=${lon}`,
          lon,
          lat
        });
      } catch (err) {
        console.log(err);
      }
    };
    getLocation();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <>
      <ScrollView style={{ backgroundColor: "#2D9676" }}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.text}>Birds in your area:</Text>
          </View>
          {birdList.map((bird, i) => {
            return (
              <TouchableWithoutFeedback
                style={styles.birds}
                onPress={() => {
                  navigation.navigate("MyModal", {
                    ...bird,
                    screen: "newMain"
                  });
                }}
                key={i}
              >
                <Image style={styles.birds} source={{ uri: bird.img_url }} />
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView>
      <View style={{ backgroundColor: "#2D9676", flex: 1 }} />
      <NavBar
        navigation={navigation}
        birdList={birdList}
        updateBirdList={updateBirdList}
        back="Main"
      />
    </>
  );
};

const styles = StyleSheet.create({
  birds: {
    height: 150,
    display: "flex",
    width: 150,
    marginBottom: 40,
    borderRadius: 20
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#2D9676",
    justifyContent: "space-around"
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "System",
    marginBottom: 40,
    marginTop: 20
  },
  buttonContainer: {
    backgroundColor: "#6D3716",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    width: 100,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 10,
    color: "white",
    textAlign: "center"
  },

  iconContainer: {
    backgroundColor: "#2D9676",
    borderTopColor: "black",
    borderTopWidth: 4,
    height: 60,
    justifyContent: "space-around"
  },
  title: {
    flexBasis: "100%",
    flexShrink: 0
  }
});

export default MainScreen;
