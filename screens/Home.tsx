import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { Link } from 'expo-router';



export default function Home() {
    const navigation = useNavigation();

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

