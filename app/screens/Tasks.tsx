import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { Appearance, useColorScheme } from "react-native";
import { StatusBar } from 'expo-status-bar';



export default function Tasks() {
    const navigation = useNavigation();
    let colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <Text> Hello, how are you? </Text> 
    
        </View>
    )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    padding: 20,
  }
}
)

