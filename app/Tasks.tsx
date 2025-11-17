import { Link } from 'expo-router';
import React, { useState} from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Sidebar from '@/components/sidebar';

export default function Tasks() {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('Tasks');

  const handleActivePage = (page: 'Tasks' | 'Reminders' | 'Themes') => {
    setActivePage(page);
    setIsSidebarOpen(false);
  }

    return (
        <View style={styles.container}>
           
           <Sidebar 
            isOpen={isSideBarOpen} 
            onSelectPage={handleActivePage} 
            selectedPage={activePage}
            />

          <View style={styles.drawerRevealIconContainer}>
            <TouchableOpacity onPress={() => setIsSidebarOpen (!isSideBarOpen)}>
            <Image
              source={require('../assets/images/Button.png')}
              style={ styles.drawerRevealIcon }
            />
            </TouchableOpacity>
          </View>

          <Text style = {{ color: 'white', fontSize: 24}}>
            Tasks Page
          </Text>
          
            
        </View>
    )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white'
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

