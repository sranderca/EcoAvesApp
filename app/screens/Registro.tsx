import { View, Image, StyleSheet, TouchableOpacity, TextInput, Button, Pressable, Text } from 'react-native';
import React, { useState } from 'react';




const Registro = () => {

  const [avatar, setAvatar] = useState('https://cdn-icons-png.flaticon.com/512/5869/5869029.png');
  const [avatarActual, setAvatarActual] = useState(1);

  const [text, setText] = useState('');

  const handleAvatarChange = (newAvatarIndex) => {
    // Ensure index is within valid range
    if (newAvatarIndex >= 1 && newAvatarIndex <= avatars.length) {
      setAvatar(avatars[newAvatarIndex - 1].imagen); // Access image URL based on index
      setAvatarActual(newAvatarIndex);
    } else {
      console.warn('Invalid avatar index:', newAvatarIndex); // Handle invalid input
    }
  };

  const avatars = [
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/5869/5869029.png',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/1152/1152217.png',
    },
    {
      imagen: 'https://cdn-icons-png.flaticon.com/512/12468/12468555.png',
    },
  ];


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarprincipalContainer}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
          </View>
        </View>
        <View style={styles.options}>
          {avatars.map((avatar, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAvatarChange(index + 1)}
              style={[styles.avatarSel, avatarActual === index + 1 && styles.avatarActivo]}>
              <View style={styles.containerAvatar}>
                <Image source={{ uri: avatar.imagen }} style={styles.imagenAvatar} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {/* Campos de texto con los datos del usuario */}
        <View style={styles.containerDatos}>
          {/* Campo de nombre de usuario */}
          <View style={styles.campo}>
            <View style={styles.iconoContainer}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/456/456283.png" }} style={styles.imagenIcono} />
            </View>
            <TextInput
              style={styles.textInput}
              onChangeText={text => setText(text)} // Función para actualizar el estado con el nuevo texto
              value={text} // Valor actual del campo de texto
            />
            
          </View>
          {/* Campo de nombre de usuario */}

          {/* Boton */}
          <View style={styles.campo}>
            <TouchableOpacity style={styles.button} onPress={() => console.log("pressed" as string)}>
              <Text>Press Here</Text>
            </TouchableOpacity>            
          </View>
          {/* Boton */}
            
        </View>
        {/* Campos de texto con los datos del usuario */}
        
        

      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#D0FFE8',
    alignItems: 'center',
    // borderColor: '#000',
    // borderWidth: 2,
  },
  containerDatos: {
    height: '50%',
    width: '90%',
    borderColor: '#000',
    borderWidth: 2,
    marginTop: 30,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: '100%',
    //borderWidth: 2,
    flexDirection: 'row',
    //justifyContent: 'left',
    //marginTop: 10,
    bottom: 20,   
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 8
  },
  campo: {
    //borderWidth: 2,
    flexDirection: 'row',
    //justifyContent: 'left',
    marginTop: 10,
    height: '9%'
  },
  textInput: {
    //borderColor: 'gray',

    flex: 0.95,
    borderWidth: 0,
    borderBottomWidth: 1,
    //borderRadius: 20,
    width: '80%',
    height: '100%',  
    marginLeft: 20,
    //padding: 10,
    //caretHidden: 'true'
  },
  iconoContainer: {
    width: 35,
    //borderWidth: 2,
    height: 35,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagenIcono: {
    width: '100%',
    height: '100%',
    //flex: 1,
    // width: '80%',
    // height: '100%',
    //flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
    width: '90%',
    borderColor: '#000',
    borderWidth: 2,
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 20
  },
  avatarContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 10,
    
    // marginRight: 10,
  },
  avatarprincipalContainer: {
    //position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    //position: 'absolute',
    width: 140,
    height: 140,
    //flex: 1,
    //borderRadius: 90,
    // width: undefined, 
    // height: undefined,
    resizeMode: 'cover',
    //zIndex: 1,
  },
  options: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  avatarSel: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
    marginRight: 10,
    marginLeft: 10,
  },
  avatarActivo: {
    backgroundColor: '#0077b6',
  },
  imagenAvatar: {
    width: undefined,
    height: undefined,
    flex: 1,
    borderRadius: 10,
    // width: undefined, 
    // height: undefined,
    resizeMode: 'cover',
    //zIndex: 1,
  },
  containerAvatar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Registro;
