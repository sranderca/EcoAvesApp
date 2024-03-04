import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FIREBASE_STORE } from '../../firebaseConfig';
import Constants from "expo-constants";

const AvesScreen = ({ navigation }) => {
  interface Aves {
    nombre: string;
    nom_cientifico: string;
    imagen: string;
    id_especie: string
    descripcion: string
    prob_dever: string
  }

  const [aves, setAves] = useState<Aves[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    async function fetchAves() {
      try {
        const AvesCollection = collection(FIREBASE_STORE, "Aves");
        const q = query(AvesCollection, where("nombre", ">=", searchQuery));

        const querySnapshot = await getDocs(q);
        const fetchedAves: Aves[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            nombre: data.nombre,
            nom_cientifico: data.nom_cientifico,
            imagen: data.imagen,
            id_especie: data.id_especie,
            descripcion: data.descripcion,
            prob_dever: data.prob_dever
          };
        });

        setAves(fetchedAves);
      } catch (error) {
        console.error("Error fetching Aves:", error);
      }
    }

    fetchAves();
  }, [searchQuery]);

  const handleAvePress = (ave: Aves) => {
    navigation.navigate('DetalleAve', { ave });
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    setSearchQuery('');
  };

  const renderAve = ({ item }: { item: Aves }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleAvePress(item)}>
      <Image source={{ uri: item.imagen }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nombreComun}>{item.nombre}</Text>
        <Text style={styles.nombreCientifico}>({item.nom_cientifico})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <Image
        source={require("../../assets/screenGeneral.png")}
        style={[StyleSheet.absoluteFill]}
      />
      <View style={styles.head}>
        {showSearchInput ? (
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar ave..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        ) : (
          <TouchableOpacity style={styles.titleContainer} onPress={toggleSearchInput}>
            <Text style={styles.title}>Explorar Aves</Text>
          </TouchableOpacity>
        )}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={toggleSearchInput}>
            <Image
              source={require('../../assets/search.png')}
              style={[styles.button, { marginRight: 20 }]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/filter.png')}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>DRMI Laguna de Sonso, Guadalajara de Buga</Text>
        <Text style={styles.infoText}>198 aves</Text>
      </View>
      <FlatList
        data={aves}
        renderItem={renderAve}
        keyExtractor={(item) => item.id_especie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    flexGrow: 1
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  searchInput: {
    flex: 1,
    marginRight: 20,
    fontSize: 18
  },
  titleContainer: {
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    width: 25,
    height: 25
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  nombreComun: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nombreCientifico: {
    fontSize: 14,
    color: '#888888',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#66FFA6',
  },
  infoText: {
    fontSize: 14,
    color: '#333333',
    padding: 1
  },
});

export default AvesScreen;