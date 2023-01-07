import React, { useState } from "react";
import { Image ,  ScrollView as View , Text} from "react-native";
import { Box , NativeBaseProvider , Button}  from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer ,  useNavigation} from '@react-navigation/native'
import Cap from "./assets/comp/Text";
import Container from "./assets/comp/Container";

import { useFonts } from 'expo-font';
// import { ReactQueryDevtools } from '@react-query/devtools'
import { QueryClient ,  QueryClientProvider } from 'react-query'





const App = () => {

  const client = new QueryClient()

  const [fontsLoaded] = useFonts({
    'PTSans-Bold': require('./assets/PTSans-Bold.ttf'),
  });


  

  return (

    fontsLoaded && <QueryClientProvider client={client}>

    <NativeBaseProvider>


    <Container/>
   


    </NativeBaseProvider>
</QueryClientProvider>

    

    
    
  );
};


export default App;