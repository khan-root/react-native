import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";



const TabIcons = ({name, focused, title}: {name: keyof typeof Ionicons.glyphMap, focused: boolean, title: string})=>{  
   return focused ? (
    <View className="bg-white w-[112px] h-16 mt-4 rounded-full flex-row items-center justify-center space-x-2">
      <Ionicons name={name} size={20} color="#0F0D23" />
      <Text className="text-[#0F0D23] font-semibold">{title}</Text>
    </View>
  ) : (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Ionicons name={name} size={20} color="#A8B5DB" />
    </View>
  );
}

export default function TabsLayout(){
    return(
        <Tabs         
        screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
        //   marginHorizontal: 20,
          marginBottom: 5,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
            
        >
            <Tabs.Screen name="index" options={{title: "Home", headerShown: false, tabBarIcon: ({focused}) => (
                <TabIcons name="home" focused={focused} title="Home" />
            )}}/>
            <Tabs.Screen name="bookmarks" options={{title: "Bookmarks", headerShown: false, tabBarIcon: ({ focused}) => (
                <TabIcons name="bookmark" focused={focused} title="Bookmarks" />
            )}}/>
            <Tabs.Screen name="create" options={{title: "Create", headerShown: false, tabBarIcon: ({ focused}) => (
                <TabIcons name="add" focused={focused} title="Create" />
            )}}/>
            <Tabs.Screen name="notification" options={{title: "Notification", headerShown: false, tabBarIcon: ({ focused}) => (
                <TabIcons name="notifications" focused={focused} title="Notification" />
            )}}/>
            <Tabs.Screen name="profile" options={{title: "Profile", headerShown: false, tabBarIcon: ({ focused}) => (
                <TabIcons name="person" focused={focused} title="Profile" />
            )}}/>
        </Tabs>
    )
}