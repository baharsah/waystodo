import React, { useState } from "react";
import { Image ,  ScrollView as View , Text} from "react-native";
import { Box , NativeBaseProvider , Button}  from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer ,  useNavigation} from '@react-navigation/native'
import Cap from "./assets/comp/Text";
import Container from "./assets/comp/Container";

import { useFonts } from 'expo-font';



const App = () => {

  const [fontsLoaded] = useFonts({
    'PTSans-Bold': require('./assets/PTSans-Bold.ttf'),
  });


  

  return (

    fontsLoaded && <NativeBaseProvider>

    <Container/>


    </NativeBaseProvider>
    

    
    
  );
};


export default App;