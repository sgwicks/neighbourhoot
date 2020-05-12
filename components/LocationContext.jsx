import React, { useState } from "react";

const LocationContext = React.createContext();

const LocationProvider = props => {
  const [context, setContext] = useState({
    location: "?lat=57.355333&lon=-2.507852",
    user_id: "00631bc1-75c9-4cd6-ad90-cdd7c0560829",
    lat: 57.355333,
    lon: -2.507852
  });
  return (
    <LocationContext.Provider value={[context, setContext]}>
      {props.children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
