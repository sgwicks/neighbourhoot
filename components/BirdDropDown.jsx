import React, { useState, useEffect } from "react";
import { Dropdown } from "react-native-material-dropdown";
import { getAllBirds } from "../apiRequest/apiRequests";

const BirdDropDown = props => {
  const [birdNames, setBirdNames] = useState([]);
  const [userChoice, setUserChoice] = useState("");
  const birdsList = () => {
    getAllBirds().then(response => {
      const birdNameArray = response.map(bird => {
        return { value: bird.bird_name };
      });
      setBirdNames(birdNameArray);
    });
  };

  useEffect(() => {
    birdsList();
  }, []);

  const handleChange = text => {
    props.setBird_Name(text);
  };

  return (
    <>
      {console.log(userChoice)}
      <Dropdown
        label="Bird Name"
        data={birdNames}
        containerStyle={{ width: "100%" }}
        pickerStyle={{ borderBottomColor: "transparent", borderWidth: 0 }}
        onChangeText={handleChange}
      />
    </>
  );
};

export default BirdDropDown;
