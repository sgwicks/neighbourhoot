import Overlay from "react-native-modal-overlay";
import React, { Component, Fragment, useState, useContext } from "react";
import { Dropdown } from "react-native-material-dropdown";
import { Text, TouchableOpacity } from "react-native";

const FilterOverlay = ({ route, navigation }) => {
  const { navigate } = navigation;
  const [isVisible, updateIsVisible] = useState(true);
  const [chest, setChest] = useState("");
  const [head, setHead] = useState("");
  const [back, setBack] = useState("");

  const onClose = () => {
    updateIsVisible(false);
    navigate("newMain");
  };

  const chestColour = [
    {
      value: "red"
    },
    {
      value: "brown"
    },
    {
      value: "black"
    }
  ];

  const headColour = [
    {
      value: "blue"
    },
    {
      value: "yellow"
    },
    {
      value: "brown"
    }
  ];

  const backColour = [
    {
      value: "brown"
    },
    { value: "black" },
    { value: "white" }
  ];

  const handleSubmit = () => {
    const features = {
      chest,
      head,
      back
    };
    setChest("");
    setHead("");
    setBack("");
    navigate("newMain", { features });
  };

  return (
    <Overlay visible={isVisible} onClose={onClose} closeOnTouchOutside>
      <Dropdown
        onChangeText={text => setChest(text)}
        label="Chest colour"
        data={chestColour}
        containerStyle={{ width: "100%" }}
        pickerStyle={{ borderBottomColor: "transparent", borderWidth: 0 }}
      />
      <Dropdown
        onChangeText={text => setHead(text)}
        label="Head colour"
        data={headColour}
        containerStyle={{ width: "100%" }}
        pickerStyle={{ borderBottomColor: "transparent", borderWidth: 0 }}
      />
      <Dropdown
        onChangeText={text => setBack(text)}
        label="Back colour"
        data={backColour}
        containerStyle={{ width: "100%" }}
        pickerStyle={{ borderBottomColor: "transparent", borderWidth: 0 }}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Filter</Text>
      </TouchableOpacity>
    </Overlay>
  );
};

export default FilterOverlay;
