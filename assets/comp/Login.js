import { ScrollView , Form , Item , Input , Button } from "native-base";
import {     Stack, FormControl } from 'native-base';
import React, { useState } from "react";
import { Image , Text} from "react-native";
import { useFonts } from 'expo-font';
import ImageRegister from "./ImageRegister";
function Login() {

  const navigation = useNavigation();

  return (
    <ScrollView style={{margin : 30}}>

     <ImageRegister></ImageRegister>
    <Text style={{fontFamily : "PTSans-Bold"  ,fontWeight : "bold" , fontSize : 40 , textAlign : "center"}}>login</Text>
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
  <Text style={{ color : "white" , fontWeight : "bold" , fontSize : 20}}>login</Text>
</Button>

        </Stack>
        <Stack>
<Text style={{ fontFamily : "PTSans-Bold" , marginTop: 10 , fontSize : 20 }}>Belum Punya akun? <Text onPress={() => navigation.navigate('Register')}  style={{ color : "red" ,marginTop: 10 , fontSize : 20}}> Daftarlah! </Text>  </Text> 

        </Stack>
      </Stack>
    </FormControl>
    </ScrollView>
  )
}

export default Login