import {Text, View, } from 'react-native'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useState } from 'react';
import { Input } from '../components/Reuse';


export default CreateUser = ()=>{
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


    const createUser =async ()=>{
      const user= await  createUserWithEmailAndPassword(auth, email, password)
   
  
    }

    return(
        <View>
            <Text>CreateUser page</Text>
            <Input placeholder="" />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
        </View>
    )
}