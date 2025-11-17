
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Sidebar, { Pages } from '@/components/sidebar';


export default function Reminders () {

    const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState<Pages>('Reminders')

    const handleActivePage = (page: 'Tasks' | 'Reminders' | 'Themes') => {
        setActivePage(page);
        setIsSidebarOpen(false);
    }

    return (
        <View style = {styles.container}>
            <Text> Hello, Welcome  </Text> 
            


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
       padding: 20
    },
    button: {
        fontSize: 15,
        textDecorationLine: 'underline',
    }
})