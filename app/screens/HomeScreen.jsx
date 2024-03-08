import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image, TouchableOpacity, Text } from 'react-native';
import { getAuth, updateProfile } from "firebase/auth";

const HomeScreen = () => {
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  const actualizarPerfil = () => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL
    }).then(() => {
      Alert.alert('Perfil actualizado exitosamente');
      setMostrarFormulario(false); // Ocultar el formulario después de la actualización
    }).catch((error) => {
      Alert.alert('Error al actualizar el perfil', error.message);
    });
  };

  const seleccionarImagen = (imagen) => {
    setPhotoURL(imagen);
    setMostrarFormulario(false); // Ocultar el formulario después de seleccionar una imagen
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {mostrarFormulario ? (
        <>
          <TextInput
            style={{ width: '80%', marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray' }}
            placeholder="Nombre de usuario"
            value={displayName}
            onChangeText={text => setDisplayName(text)}
          />
          <TouchableOpacity onPress={() => setMostrarFormulario(false)}>
            <Button title="Seleccionar avatar" onPress={() => setMostrarFormulario(false)} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', display: mostrarFormulario ? 'flex' : 'none' }}>
            <TouchableOpacity onPress={() => seleccionarImagen('imagen1')}>
              <Image source={require('../../assets/anas.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => seleccionarImagen('imagen2')}>
              <Image source={require('../../assets/anhima.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => seleccionarImagen('imagen3')}>
              <Image source={require('../../assets/sarki.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text>{displayName}</Text>
          {photoURL && <Image source={{ uri: photoURL }} style={{ width: 200, height: 200, marginBottom: 10 }} />}
          <Button title="Actualizar perfil" onPress={actualizarPerfil} />
        </>
      )}
    </View>
  );
};

export default HomeScreen;