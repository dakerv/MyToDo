import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function Themes () {
    return (
        <View style = {styles.container}>
            <Text style = {styles.introductoryText}> Hello, welcome to the Themes page </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20
    },
    introductoryText: {
        fontSize: 20,
        color: 'white'
    }
})