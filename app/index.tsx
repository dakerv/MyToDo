import React from "react";
import Tasks from "@/app/screens/Tasks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
      <Stack.Navigator initialRouteName="Tasks">
        <Stack.Screen 
        name="Tasks" 
        component={Tasks}
        options={{ title: 'Dashboard'}} 
        />
      </Stack.Navigator>
  );
}