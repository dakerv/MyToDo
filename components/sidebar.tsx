import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";

type Pages = 'Tasks' | 'Reminders' | 'Themes';

type SidebarProps = {
    onSelectPage: (page: Pages) => void;
}

const sidebarItems: { id: string; title: Pages; link: string }[] = [
    { id: '1', title: 'Tasks', link: '/Tasks' },
    { id: '2', title: 'Reminders', link: '/Reminders' },
    { id: '3', title: 'Themes', link: '/Themes' },
];

export default function Sidebar ({onSelectPage}: SidebarProps) {
  
    return (
        <View style={styles.sidebarMainContainer}>
            <View style={styles.myToDoAndExitButtonContainer}> </View>
                <FlatList
                data={sidebarItems}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => onSelectPage(item.title)}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
                />
            
        </View>
    )
}

const styles = StyleSheet.create ({
    sidebarMainContainer: {
        flex: 1, 
        padding: 20
    },
    myToDoAndExitButtonContainer: {
        width: '100%',
        height: 50,
    }
})