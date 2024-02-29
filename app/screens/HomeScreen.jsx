import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { BlurView } from 'expo-blur';
import { FIREBASE_AUTH } from "../../firebaseConfig";
import Constants from "expo-constants";


const HomeScreen = () => {
  const [currentBird, setCurrentBird] = useState({
    image: require("../../assets/anhima.jpg"),
    name: 'Buitre Cienaga',
    scientificName: 'Anhima cornuta',
    description: "Pajaro enorme y extraño. Se encuentra cerca de pantanos de agua dulce y rios en las tierras bajas de la Amazonía, es mayormente gris oscuro y negro, tiene escamas blanccas en el cuello y el vientre blanco. Su nombre hace referencia al apéndice característico, como de unicornio, en la parte superior de su cabeza."
  });

  const birdDetails = [
    {
      image: require("../../assets/anhima.jpg"),
      name: 'Buitre Cienaga',
      scientificName: 'Anhima cornuta',
      description: 'Pajaro enorme y extraño. Se encuentra cerca de pantanos de agua dulce y rios en las tierras bajas de la Amazonía, es mayormente gris oscuro y negro, tiene escamas blanccas en el cuello y el vientre blanco. Su nombre hace referencia al apéndice característico, como de unicornio, en la parte superior de su cabeza.',
    },
    {
      image: require("../../assets/anas.jpg"),
      name: 'Pato Colorada',
      scientificName: 'Anas cyanoptera',
      description: 'Pato pequeño con parches azul blancuzco en la parte superior de las alas. Los machos son café rojizo por encima. Pico negro. Forrajea en las orillas de humedales bajos zambullendo medio cuerpo.',
    },
    {
      image: require("../../assets/sarki.jpg"),
      name: 'Pato Brasilero',
      scientificName: 'Sarkidiornis melanotos',
      description: 'Ave acuática grande bicolor. Ambos sexos son color verde-violáceo iridiscente arriba con el pecho blanco o beige. Los machos tienen un gran bulto negro en el pico, flancos oscuros y vientre blancuzco, mientras que las hembras tienen un pico simple y flancos grises. Nota las alas totalmente oscuras.',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * birdDetails.length);
      setCurrentBird(birdDetails[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/screenGeneral.png")}
        style={[styles.image, StyleSheet.absoluteFill]}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.logoutButton} onPress={() => FIREBASE_AUTH.signOut()}>
          <Image
            source={require('../../assets/logout.png')}
            style={styles.icon}
          />
          <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
        </TouchableOpacity>

        <BlurView intensity={30}>
          <View style={styles.birdCard}>
            <Image
              source={currentBird.image}
              style={styles.birdImage}
            />
            <View style={styles.birdInfo}>
              <Text style={styles.birdName}>{currentBird.name}</Text>
              <Text style={styles.scientificName}>{currentBird.scientificName}</Text>
              <Text style={styles.description}>{currentBird.description}</Text>
            </View>
          </View>
        </BlurView>
      </ScrollView>
    </View>
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
  logoutButton: {
    position: 'absolute',
    top: 30, 
    right: 0, 
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  icon: {
    width: 20, 
    height: 20,
    marginRight: 5,
  },
  logoutButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
})

export default HomeScreen;