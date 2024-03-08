import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseConfig";
import Login from "./app/screens/Login";
import HomeScreen from "./app/screens/HomeScreen";
import AprenderScreen from "./app/screens/AprenderScreen";
import DetalleAve from "./app/screens/DetalleAve";
import AvesScreen from "./app/screens/AvesScreen";
import { Image } from "react-native";
import Registro from "./app/screens/Registro";
import Leccion1 from "./app/screens/lecciones/Leccion1";

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/book.png")}
              style={{ width: 30, height: 30, tintColor: color }} />
          )
          ,
          headerShown: false
        }}
        name="Aprender" component={AprenderScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/home.png")}
              style={{ width: 30, height: 30, tintColor: color }} />
          ),
          headerShown: false
        }}
        name="Home" component={Registro} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/gorrion.png")}
              style={{ width: 30, height: 30, tintColor: color }} />
          )
          ,
          headerShown: false
        }}
        name="Aves" component={AvesScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? <Stack.Screen name='Tab' component={MyTabs} options={{ headerShown: false }} /> :
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />}
        <Stack.Screen name="DetalleAve" component={DetalleAve} options={{ headerShown: false }} />
        <Stack.Screen name="Leccion1" component={Leccion1} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
