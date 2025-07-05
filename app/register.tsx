import CustomButton from "@/components/customButton";
import { auth } from "@/firebase/config";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Register(){

    const [registerValue, setRegisterValue] = useState({
        email: "",
        password: "",
    })

    const handleChange = (name: string, value: string) => {
        setRegisterValue((pervState)=>({
            ...pervState,
            [name]: value
        }))
    }

    const handleRegister = async() => {
        const {email, password} = registerValue

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View>
            <Text>Register</Text>
            <View>
                <Text>Email</Text>
                <TextInput 
                    value={registerValue.email}
                    onChangeText={(text)=> handleChange("email", text)}
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
                    value={registerValue.password}
                    onChangeText={(text)=> handleChange("password", text)}
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
                <CustomButton
                    onPress={handleRegister} 
                    className="bg-black text-white "
                    variant="outline"
                >
                    Register
                </CustomButton>
                <CustomButton
                    onPress={()=> router.push("/signin")}
                >
                    Sigin
                </CustomButton>
            </View>
        </View>
    )
}


