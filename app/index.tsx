import React from "react";
import Home from "@/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ title: 'Dashboard'}} 
        />
      </Stack.Navigator>
  );
}