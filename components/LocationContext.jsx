import React, { useState } from "react";
import * as Location from "expo-location";

const LocationContext = React.createContext();

const LocationProvider = props => {
  const [context, setContext] = useState({
    location: "?lat=57.355333&lon=-2.507852",
    user_id: "00631bc1-75c9-4cd6-ad90-cdd7c0560829"
  });
  return (
    <LocationContext.Provider value={[context, setContext]}>
      {props.children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };

//"?lat=57.355333&lon=-2.507852"
