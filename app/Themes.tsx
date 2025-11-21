import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Sidebar, { Pages } from '@/components/sidebar';
import { useState } from "react";
import { useTheme } from '@/context/ThemeContext';

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
                                style={ styles.drawerRevealIcon }
                                />
                            </TouchableOpacity>
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
    padding: 20
  },
    drawerRevealIcon: {
    alignSelf: 'flex-start',
  },
})