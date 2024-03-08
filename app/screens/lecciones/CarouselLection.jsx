import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import React from "react";
import Carousel from 'react-native-reanimated-carousel';
import { BlurView } from "expo-blur";
import Constants from "expo-constants";
import  dataLeccion  from '../../data/dataLeccion'

const CarouselLection = () => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <BlurView intensity={30}>
        <View style={styles.birdCard}>
          <Image source={item.image} style={styles.birdImage} />
          <View style={styles.birdInfo}>
            <Text style={styles.birdName}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </BlurView>
    </View>
  );

  return (
    <Carousel
      data={dataLeccion}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
    flexGrow: 1
  },
  birdCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: "hidden",
    width: 300,
    maxWidth: "100%",
    textAlign: "center",
  },
  birdImage: {
    width: 300,
    height: 200,
    resizeMode: "cover",
  },
  birdInfo: {
    padding: 20,
  },
  birdName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scientificName: {
    color: "#666",
    marginBottom: 10,
  },
  description: {
    lineHeight: 20,
  },
  icon: {
    width: 20, 
    height: 20,
    marginRight: 5,
  },
})

export default CarouselLection;