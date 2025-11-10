import { Link } from 'expo-router';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Tasks() {
   
   
    return (
        <View style={styles.container}>
          <View style={styles.drawerRevealIconContainer}>
            <Link href={'/modal'}> 
            <Image
              source={require('../assets/images/Button.png')}
              style={ styles.drawerRevealIcon }
            />
            </Link>
            
          </View>
          
            
        </View>
    )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'black'
  },
  button: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 20
  },
  drawerRevealIconContainer: {
    width: '100%',
    padding: 20
  },
  drawerRevealIcon: {
    alignSelf: 'flex-start',
  }
}
)

