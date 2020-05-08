import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const verifyPermissions = async () => {
  const result = await Permissions.askAsync(Permissions.LOCATION);
  if (result.status !== "granted") {
    Alert.alert(
      "Insufficient permissions.",
      "You need to grant location permissions to use this app.",
      [{ text: "Okay" }]
    );
    return false;
  }
  return true;
};

const getLocationHandler = async () => {
  const hasPermission = await verifyPermissions();
  if (!hasPermission) {
    return;
  }
  try {
    const location = await Location.getCurrentPositionAsync({
      timeInterval: 5000
    });

    return {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
  } catch (err) {
    Alert.alert("could not fetch location", "Please try again", [
      { text: "okay" }
    ]);
  }
};

export { getLocationHandler };
