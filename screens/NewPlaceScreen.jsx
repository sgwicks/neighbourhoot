import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import { LocationContext } from "../components/LocationContext";
import { getAllBirdsByArea } from "../apiRequest/apiRequests";

const NewPlaceScreen = props => {
  const [context, setContext] = useContext(LocationContext);
  const [databaseLocations, setDatabaseLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mapRegion, setMapRegion] = useState({
    latitude: 53.7949152,
    longitude: -1.5490281,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  useEffect(() => {
    getAllBirdsByArea(context.location).then(birds =>
      setDatabaseLocation(birds)
    );
    setMapRegion({
      ...mapRegion,
      latitude: context.lat,
      longitude: context.lon
    });
  }, []);

  return (
    <MapView style={styles.map} region={mapRegion}>
      {databaseLocations.map((location, index) => {
        const locationSpec = {
          latitude: context.lat,
          longitude: context.lon
        };
        return (
          <Marker
            key={index}
            title={location.comName}
            coordinate={locationSpec}
          ></Marker>
        );
      })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default NewPlaceScreen;
