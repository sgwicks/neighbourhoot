import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import LocationPicker from '../components/LocationPicker';
// import MapView, { Marker } from "react-native-maps";
import * as Permissions from 'expo-permissions';

import { getBirdsToPopulateMap } from '../apiRequest/apiRequests';

const NewPlaceScreen = (props) => {
  // console.log(userLocation, "<<<<<<<<");
  const [databaseLocations, setDatabaseLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [selectedLocation, setSelectedLocation] = useState();
  const [mapRegion, setMapRegion] = useState({
    latitude: 51.3805849,
    longitude: -0.1479596,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  useEffect(() => {
    // console.log(props.route.params, "<<<<<");
    // const { userLocation } = props.route.params;
    // console.log(userLocation, "<<<");
    // if (userLocation) {
    //   setMapRegion({
    //     latitude: userLocation.lat,
    //     longitude: userLocation.lng,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421
    //   });
    // }
  }, []);

  // if (userLocation) {
  //   setMapRegion({
  //     latitude: userLocation.lat,
  //     longitude: userLocation.lng,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421
  //   });
  // }

  const getBirds = () => {
    getBirdsToPopulateMap().then((response) => {
      setDatabaseLocation(response);
      // setIsLoading(false);
    });
  };

  useEffect(() => {
    getBirds();
  }, []);

  const selectLocationHandler = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
  };

  // let markerCoordinates;

  // if (selectedLocation) {
  //   markerCoordinates = {
  //     latitude: selectedLocation.lat,
  //     longitude: selectedLocation.lng
  //   };
  // }

  return (
    <View>
      <Text>Map goes here</Text>
    </View>
    // <MapView
    //   style={styles.map}
    //   region={mapRegion}
    //   // onPress={selectLocationHandler}>
    //   // {markerCoordinates && (
    //   // 	<Marker title='Picked Location' coordinate={markerCoordinates}></Marker>
    //   // )}
    // >
    //   {databaseLocations.map((location, index) => {
    //     const locationSpec = {
    //       latitude: location.lat,
    //       longitude: location.lng
    //     };
    //     return (
    //       <Marker
    //         key={index}
    //         title={location.comName}
    //         coordinate={locationSpec}
    //       ></Marker>
    //     );
    //   })}
    // </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default NewPlaceScreen;
