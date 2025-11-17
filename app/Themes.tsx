import React from "react";
import { StyleSheet, Text, View } from 'react-native';

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
        padding: 50
    },
    introductoryText: {
        fontSize: 50,
        color: 'white'
    }
})