import { Link } from 'expo-router';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export default function Reminders () {
    return (
        <View style = {styles.container}>
            <Text> Hello, Welcome  </Text> 
            <Link href={'/screens/Themes'} style={styles.button}>
            Go to the Themes page. </Link>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       padding: 20
    },
    button: {
        fontSize: 15,
        textDecorationLine: 'underline',
    }
})