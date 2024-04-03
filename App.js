import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from Expo vector-icons
import Home from "./screens/Home";
import { CSprovider } from "./contexts/CScontext";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Bottom = createMaterialBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerHome" component={Home} />
      {/* Add more screens to the drawer navigator if needed */}
    </Drawer.Navigator>
  );
};

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      initialRouteName="BottomHome"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Bottom.Screen
        name="BottomHome"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
    </Bottom.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <CSprovider>
        <Stack.Navigator
          initialRouteName="Drawer"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen name="Bottom" component={BottomNavigator} />
        </Stack.Navigator>
      </CSprovider>
    </NavigationContainer>
  );
};

export default App;
