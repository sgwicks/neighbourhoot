import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ImagePicker from "../components/ImagePicker";

const MainScreen = props => {
  const [images, setImages] = useState([
    {
      img:
        "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"
    },
    {
      img:
        "https://www.lovethegarden.com/sites/default/files/content/articles/UK_wildbirds-01-robin.jpg"
    },
    {
      img:
        "https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Cockatiel-2.jpg"
    },
    {
      img: "https://scx2.b-cdn.net/gfx/news/hires/2019/uscresearche.jpg"
    },
    {
      img:
        "https://www.thespruce.com/thmb/bS1rvJQcPY2BwMoeAOT_l8x__0Q=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/red-summer-tanager-58991d123df78caebc049ac4.jpg"
    },
    {
      img:
        "https://www.thisiscolossal.com/wp-content/uploads/2019/12/lloyd-7.jpg"
    }
  ]);

  const imageTakenHandler = imagePath => {
    setImages({ img: imagePath });
  };

  // useEffect(() => {
  //   imageTakenHandler(imagePath);
  // }, [imagePath]);

  return (
    <View>
      <Text>This is the main Screen</Text>
      {images.map((bird, i) => {
        return <Image style={styles.birds} key={i} source={bird.img} />;
      })}
      <ImagePicker onImageTaken={imageTakenHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  birds: {
    width: 100,
    height: 100,
    // resizeMode: "contain",
    flex: 1
  }
});

export default MainScreen;
