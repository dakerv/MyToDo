import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router'
import { Appearance, useColorScheme } from "react-native";
import { StatusBar } from 'expo-status-bar';



export default function Tasks() {
   
    let colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <Text> Hello, how are you? </Text> 
            <Link href={'/screens/Reminders'} style={styles.button}>
            Go to the Reminders Page </Link>
        </View>
    )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 20
  }
}
)

