import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";

type Pages = 'Tasks' | 'Reminders' | 'Themes';

type SidebarProps = {
    onSelectPage: (page: Pages) => void;
}

const sidebarItems = [
    { id: '1', title: 'Tasks', link: '/Tasks' },
    { id: '2', title: 'Reminders', link: '/Reminders' },
    { id: '3', title: 'Themes', link: '/Themes' },
];

export default function Sidebar ({onSelectPage}: SidebarProps) {
  
    return (
        <View style={styles.container}>
            <View style={styles.myToDoAndExitButtonContainer}> </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        padding: 20
    },
    myToDoAndExitButtonContainer: {
        width: '100%',
        height: 50,
    }
})