import React from 'react';
import { View, ScrollView } from 'react-native';
import LocationPicker from '../components/LocationPicker';
// import MapView from "react-native-maps";

const MapScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text>Map here</Text>
        {/* <LocationPicker navigation={navigation} /> */}
      </View>
    </ScrollView>
  );
};

export default MapScreen;
