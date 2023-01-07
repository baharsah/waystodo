import React from 'react'
import Cap from './Text'
import { createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen from './Screen';

const Stack = createStackNavigator();


function Container() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Screen">
        <Stack.Screen name="ItemList" options={{headerShown : false}} component={Cap} />
        <Stack.Screen name="Screen" options={{headerShown : false}} component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Container