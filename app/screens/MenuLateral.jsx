import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const MenuLateral = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text>Ordenar</Text>
      <View style={{ marginTop: 10 }}>
        <CheckBox />
        <Text>Fácil</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <CheckBox />
        <Text>Medio Fácil</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <CheckBox />
        <Text>Medio Difícil</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <CheckBox />
        <Text>Difícil</Text>
      </View>
    </View>
  );
};

export default MenuLateral;