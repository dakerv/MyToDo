import { Link } from 'expo-router';
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Sidebar from "../components/Sidebar";

export default function Tasks() {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('Tasks');

  const handleActivePage = (page: 'Tasks' | 'Reminders' | 'Themes') => {
    setActivePage(page);
    setIsSidebarOpen(false);
  }
  
    return (
        <View style={styles.container}>
          <View style={styles.drawerRevealIconContainer}>
          
            <Image
              source={require('../assets/images/Button.png')}
              style={ styles.drawerRevealIcon }
            />
          
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

