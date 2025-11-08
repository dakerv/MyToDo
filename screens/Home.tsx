import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import { StyleSheet, View, Text } from "react-native";


export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text> Hello, how are you? </Text> </View>
    )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    padding: 20,
  }
}
)