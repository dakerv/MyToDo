
import Sidebar, { Pages } from '@/components/sidebar';
import React, { useState } from "react";
import { LinearGradient } from 'react-native-svg';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Svg, { Path } from 'react-native-svg';


export default function Reminders () {

    const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState<Pages>('Reminders')

    const handleActivePage = (page: Pages) => {
        setActivePage(page);
        setIsSidebarOpen(false);
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
    button: {
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    drawerRevealIconContainer: {
    width: '100%',
    padding: 20
  },
    drawerRevealIcon: {
    alignSelf: 'flex-start',
  },
})