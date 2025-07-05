import { Text, View } from "react-native";

export default function Index(){
  return(
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-5xl font-quicksand-bold">Home</Text>
      <Text className="font-bold text-5xl"> World</Text>
    </View>
  )
}