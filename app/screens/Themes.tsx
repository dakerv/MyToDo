import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'

export default function Themes () {
    return (
        <View style = {styles.container}>
            <Text> Hello, welcome to the Themes page </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20
    }
})