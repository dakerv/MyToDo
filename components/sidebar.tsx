import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Animated } from "react-native";

type Pages = 'Tasks' | 'Reminders' | 'Themes';

type SidebarProps = {
    onSelectPage: (page: Pages) => void;
    isOpen: boolean;
    selectedPage: Pages;
}

const sidebarItems: { id: string; title: Pages; link: string }[] = [
    { id: '1', title: 'Tasks', link: '/Tasks' },
    { id: '2', title: 'Reminders', link: '/Reminders' },
    { id: '3', title: 'Themes', link: '/Themes' },
];

export default function Sidebar ({onSelectPage, isOpen, selectedPage }: SidebarProps) {

    const slideAnim = useRef(new Animated.Value(-250)).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: isOpen ? 0 : -250,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isOpen]);
  
    return (
        <Animated.View 
        style={[styles.sidebarMainContainer, { transform: [{ translateX: slideAnim }]}]}>
                <FlatList
                data={sidebarItems}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => onSelectPage(item.title)}
                    style={[
                        styles.sidebarItem,
                        selectedPage === item.title && styles.selectedSidebarItem
                    ]}>

                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
                />
            
        </Animated.View>
    )
}

const styles = StyleSheet.create ({
    sidebarMainContainer: {
        flex: 1, 
        padding: 20,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 250,
        backgroundColor: '#f0f0f0',
        zIndex: 1000,
    },
    myToDoAndExitButtonContainer: {
        width: '100%',
        height: 50,
    },
    sidebarItem: {
        padding: 15,
        borderBottomWidth: 1,
    },
    selectedSidebarItem: {
        backgroundColor: '#d3d3d3',
    }
})