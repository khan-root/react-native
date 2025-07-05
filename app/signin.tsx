import { auth } from "@/firebase/config";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


export default function Signin(){

    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    })

    const handleChange = (name: string, value: string) => {
        setFormValue({...formValue, [name]: value})
    }

    const handleSignIn = async() => {
        const {email, password} = formValue

        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <View>
            <View>
                <Text>Email</Text>
                <TextInput 
                    value={formValue.email}
                    onChangeText={(text) => handleChange("email", text)}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect={false}
                />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput
                    value={formValue.password}
                    onChangeText={(text) => handleChange("password", text)}
                    placeholder="Password"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <View style={{
                display:"flex",
                flexDirection: "column",
                gap: 10
            }}>
                <Button title="Sign In" onPress={handleSignIn} />
                <Button title="Register" onPress={()=> router.push("/register")} />
            </View>
        </View>
    )
}