import { ScrollView , Form , Item , Input , Button } from "native-base";
import {     Stack, FormControl } from 'native-base';
import React, { useState } from "react";
import { Image , Text} from "react-native";
import { useFonts } from 'expo-font';
import ImageRegister from "./ImageRegister";






function Cap() {

  const [fontsLoaded] = useFonts({
    'PTSans-Bold': require('../PTSans-Bold.ttf'),
  });

  return (
    <ScrollView style={{margin : 30}}>

     <ImageRegister></ImageRegister>
    <Text style={{fontFamily : "PTSans-Bold"  ,fontWeight : "bold" , fontSize : 40 , textAlign : "center"}}>Register</Text>
    <FormControl>
      <Stack space={5}>
        <Stack>
          <FormControl.Label>name</FormControl.Label>
          <Input p={2} placeholder="name" name="name" />
        </Stack>
        <Stack>
          <FormControl.Label>Email</FormControl.Label>
          <Input p={2} placeholder="Email" name='email' />
        </Stack>
        <Stack> 
          <FormControl.Label>Password</FormControl.Label>
          <Input p={2} placeholder="Password" name="password" onChangeText={(e) => {console.log(e)}} type="password" />
        </Stack>
        <Stack>
        <Button style={{ }} colorScheme={"warning"}>
  <Text style={{ color : "white" , fontWeight : "bold" , fontSize : 20}}>Register</Text>
</Button>

        </Stack>
        <Stack>
<Text style={{ fontFamily : "PTSans-Bold" , marginTop: 10 , fontSize : 20 }}>Sudah Punya akun? <Text style={{ color : "red" ,marginTop: 10 , fontSize : 20}}>Loginlah! </Text>  </Text> 

        </Stack>
      </Stack>
    </FormControl>
    </ScrollView>
  )
}

export default Cap