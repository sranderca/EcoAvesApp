import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';


const Aprender = ({ navigation }) => {

  const lecciones = [
    {
      titulo: 'Lección 1: La alimentación de los colibríes',
      texto: 'En esta lección aprenderás cómo ayudar a las aves en tu entorno.',
      imagen: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/405057234_849154273881885_7464129580886231320_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_ohc=EszEhbdmfv0AX8x5Cur&_nc_ht=scontent.fclo1-3.fna&oh=00_AfA5nT0_Q7i3Hznz17s7LV4NZRjI1u9P-uHwrcUl9Ka2xg&oe=65D425B8',
    },
    {
      titulo: 'Lección 2: Turismo responsable',
      texto: 'Descubre cómo disfrutar de la naturaleza sin dañar a las aves.',
      imagen: 'https://d1466fuyav80bi.cloudfront.net/statics/2023-11/conservacion_avistamiento-de-aves_image-1.jpg',
    },
    {
      titulo: 'Lección 3: Turismo responsable',
      texto: 'Descubre cómo disfrutar de la naturaleza sin dañar a las aves.',
      imagen: 'https://efeverde.com/wp-content/uploads/2022/01/8013347661001w.jpg',
    },
    {
      titulo: 'Lección 4: Turismo responsable',
      texto: 'Descubre cómo disfrutar de la naturaleza sin dañar a las aves.',
      imagen: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/426220284_10225494309840057_8500913182631942375_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=gOQoKKprJT8AX8Lh5WK&_nc_ht=scontent.fclo1-3.fna&oh=00_AfDXQPCyTdP2J5AQkU9m82vLQshZKkf7qbL6ye2dQJpQfw&oe=65D3C671',
    },
  ];

  const navegationLection = () => {
    navigation.navigate("Leccion1");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Actitudes para la conservación de las aves</Text>
        <Image source={require('./../../assets/ave-conservacion.png')} style={styles.image} />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.texto}>
          En la siguiente sección, se presentan distintos casos donde tendrás que analizar qué
          actitudes tomarías en pro de las aves de la laguna y su hábitat. Al final, te puedes orientar
          sobre las mejores decisiones respondiendo unas breves preguntas.
        </Text>
        <Text style={styles.tituloLecciones}>Todas las lecciones</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.lecciones}>
          {lecciones.map((lesson, index) => (
            <TouchableOpacity
              key={index}
              onPress={navegationLection}
              style={styles.leccion}>
              <Text style={styles.textoLeccion}>{lesson.titulo}</Text>
              <View style={styles.imageContainer}>
                <Image source={{ uri: lesson.imagen }} style={styles.imagenLecciones} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    //flex: 1,
    // justifyContent: 'center', 
    // alignItems: 'center',
    backgroundColor: '#D0FFE8',
  },
  header: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
  },
  content: {
    //flex: 1,
    marginTop: 10,
    padding: 10
  },
  texto: {
    //flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  image: {
    width: 68,
    height: 68,
    marginRight: 10
  },
  lecciones: {
    //flex: 1,
    flexDirection: 'column',
    //flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: 35,
    //marginRight: 20    
  },
  leccion: {
    //padding: 40,
    width: 330,
    height: 125,
    marginBottom: 20,
    backgroundColor: '#ddd',
  },
  leccionActiva: {
    backgroundColor: '#0077b6',
  },
  textoLeccion: {
    marginTop: 85,
    marginLeft: 13,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    zIndex: 2,
  },
  tituloLecciones: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    padding: 10,
  },
  imagenLecciones: {
    width: undefined,
    height: undefined,
    flex: 1,
    // width: undefined, 
    // height: undefined,
    resizeMode: 'cover',
    zIndex: 1,
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  containerText: {
    marginBottom: -5,
  }
});


export default Aprender