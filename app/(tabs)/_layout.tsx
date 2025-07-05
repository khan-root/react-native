import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout(){
    return(
        <Tabs screenOptions={{
            tabBarShowLabel:false,
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.grey,
            tabBarStyle: {
                backgroundColor: "black",
                borderTopColor: "black",
                borderTopWidth: 1,
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 50,
                paddingBottom: 10,
            }
        }}>
            <Tabs.Screen name="index" options={{title: "Home", headerShown: false, tabBarIcon: ({color, size}) => (
                <Ionicons name="home" color={color} size={size} />
            )}}/>
            <Tabs.Screen name="bookmarks" options={{title: "Bookmarks", headerShown: false, tabBarIcon: ({color, size}) => (
                <Ionicons name="bookmark" color={color} size={size} />
            )}}/>
            <Tabs.Screen name="create" options={{title: "Create", headerShown: false, tabBarIcon: ({color, size}) => (
                <Ionicons name="add" color={color} size={size} />
            )}}/>
            <Tabs.Screen name="notification" options={{title: "Notification", headerShown: false, tabBarIcon: ({color, size}) => (
                <Ionicons name="notifications" color={color} size={size} />
            )}}/>
            <Tabs.Screen name="profile" options={{title: "Profile", headerShown: false, tabBarIcon: ({color, size}) => (
                <Ionicons name="person" color={color} size={size} />
            )}}/>
        </Tabs>
    )
}