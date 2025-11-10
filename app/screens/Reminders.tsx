import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'


export default function Reminders () {
    return (
        <View style = {styles.container}>
            <Text> Hello, Welcome  </Text> 
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       padding: 20
    }
})