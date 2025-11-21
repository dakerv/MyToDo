import Sidebar, { Pages } from '@/components/sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Themes () {
    const { themeName, setThemeName, theme} = useTheme();
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState<Pages>('Themes')

    const handleActivePage = (page: Pages) => {
        setIsSidebarOpen(false);
        setActivePage(page);
    }
    return (
        <View style = {styles.container}>
            <View style={styles.drawerRevealIconContainer}>
                <TouchableOpacity onPress={() => setIsSidebarOpen (!isSideBarOpen)}>
                    <Image
                    source={require('../assets/images/Button.png')}
                    style={ styles.drawerRevealIcon }/>
                </TouchableOpacity>
            </View>

            <View style={styles.headerContainer}> 
                <Text style ={styles.headerText}> Theme </Text>
            </View>
        <Sidebar 
            isOpen={isSideBarOpen} 
            onSelectPage={handleActivePage} 
            selectedPage={activePage}
        />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
            flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'black',
    zIndex: 1
    },
    introductoryText: {
        fontSize: 50,
        color: 'white'
    },
     drawerRevealIconContainer: {
    width: '100%',
    height: 72,
  },
    drawerRevealIcon: {
    alignSelf: 'flex-start',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  headerContainer: {
    marginTop: 10,
  }
})