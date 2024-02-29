import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FIREBASE_STORE } from '../../firebaseConfig'
import { FIREBASE_APP } from '../../firebaseConfig';
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
import Constants from "expo-constants";
import datosAves from "../data/datosAves";

const AvesScreen = ({ navigation }) => {
    const [showTextInput, setShowTextInput] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [search, setSearch] = useState('');     
    const [aves, setAves] = useState([]);

    useEffect(() => {

        const fetchAves = async () => {
          try {
            const avesCollection = collection(FIREBASE_STORE, "Aves");
            const querySnapshot = await getDocs(avesCollection);
    
            const fetchedAves = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    nombre: data.nombre,
                    nom_cientifico: data.nom_cientifico,
                    imagen: data.imagen
                };
            });
            setAves(fetchedAves);
          } catch (error) {
            console.error("Error fetching Aves:", error);
          }
        }
    
        fetchAves();
      }, []);
    
    const handleSearchButtonPress = () => {
        setShowTextInput(true);
    };

    const handleTextInputChange = text => {
        setSearchQuery(text);
        setSearch(text)
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setShowTextInput(false);
        });

        return unsubscribe;
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.aveCard} onPress={() => navigation.navigate('DetalleAve', { bird: item })}>
            <Image source={{ uri: item.imagen }} style={styles.imagenAve} />
            <View>
                <Text style={styles.nombreComun}>{item.nombre}</Text>
                <Text style={styles.nombreCientifico}>({item.nom_cientifico})</Text>
            </View>
        </TouchableOpacity>
    );

    const filteredBirds = aves.filter(bird =>
        (bird.nombreComun && bird.nombreComun.toLowerCase().includes(search.toLowerCase())) ||
        (bird.nombreCientifico && bird.nombreCientifico.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/screenGeneral.png")}
                style={[styles.image, StyleSheet.absoluteFill]}
            />
            <View style={styles.head}>
                {!showTextInput ? (
                    <>
                        <Text style={styles.titulo}>Explorar aves</Text>
                        <TouchableOpacity onPress={handleSearchButtonPress}>
                            <Image
                                source={require('../../assets/search.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </>
                ) : (
                    <TextInput
                        style={styles.textInput}
                        onChangeText={handleTextInputChange}
                        value={searchQuery}
                        placeholder="Buscar ave..."
                    />
                )}
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/filter.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>DRMI Laguna de Sonso, Guadalajara de Buga</Text>
                <Text style={styles.infoText}>198 aves</Text>
            </View>
            <FlatList
                data={filteredBirds}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
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
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        width: 25,
        height: 25,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    aveCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        padding: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imagenAve: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 12,
    },
    nombreComun: {
        fontSize: 18,
        fontWeight: 'bold',
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
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        marginRight: 10,
    },
    searchButton: {
        padding: 10,
    },
    textInput: {
        flex: 1,
        fontSize: 16
    },
});

export default AvesScreen;