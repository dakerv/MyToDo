import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Sidebar, { Pages } from '@/components/sidebar';
import { useState } from "react";

export default function Themes () {
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState<Pages>('Themes')

    const handleActivePage = (page: Pages) => {
        setIsSidebarOpen(false);
        setActivePage(page);
    }
    return (
        <View style = {styles.container}>
            <Text style = {styles.introductoryText}> Hello, welcome to the Themes page </Text>
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
        padding: 50
    },
    introductoryText: {
        fontSize: 50,
        color: 'white'
    }
})