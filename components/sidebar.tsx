import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type Pages = 'Tasks' | 'Reminders' | 'Themes';
export type PageLinks = '/Tasks' | '/Reminders' | '/Themes';

type SidebarProps = {
    onSelectPage: (page: Pages) => void;
    isOpen: boolean;
    selectedPage: Pages;
    onClose: () => void;
}

const sidebarItems: { id: string; title: Pages; link: PageLinks; image: any }[] = [
    { id: '1', title: 'Tasks', link: '/Tasks', image: require('../assets/images/tasksTick.png') },
    { id: '2', title: 'Reminders', link: '/Reminders', image: require('../assets/images/reminderBell.png') },
    { id: '3', title: 'Themes', link: '/Themes', image: require('../assets/images/themesPalette.png') },
];

export default function Sidebar ({onSelectPage, isOpen, selectedPage, onClose }: SidebarProps) {

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
        pointerEvents={isOpen ? 'auto' : 'none'}
        style={[styles.sidebarMainContainer, { transform: [{ translateX: slideAnim }]}]}>

                <View style = {styles.myToDoAndExitButtonContainer}>
                    <Text style = {styles.myAppTextStyles}> My App </Text>

                    <TouchableOpacity onPress={onClose}>
                    <Image source = {require ('../assets/images/exitButton.png')}
                    style = {styles.exitButtonStyles}/>
                    </TouchableOpacity>
                </View>

                <View style= {styles.flatListItems}>
                <FlatList
                data={sidebarItems}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                    onPress={() => {
                        onSelectPage(item.title)
                        router.push(item.link)
                    }}
                    style={[
                        styles.sidebarItem,
                        selectedPage === item.title && styles.selectedSidebarItem
                    ]}>
                        
                        <View style={styles.imageAndTextStyles}>
                        <Image source={item.image} style={styles.imageStyleOnly}/>
                        <Text style= {styles.textStyleOnly}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                />
                </View>
            
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
        backgroundColor: 'black',
        zIndex: 1000,
    },
    myToDoAndExitButtonContainer: {
        marginTop: 50,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sidebarItem: {
        padding: 15,
        borderBottomWidth: 1,
        color: 'white'
    },
    selectedSidebarItem: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    flatListItems: {
        marginTop: 20,
    },
    myAppTextStyles: {
        fontSize: 25,
        color: 'white'
    },
    exitButtonStyles: {
        bottom: 7,
    },
    imageAndTextStyles: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textStyleOnly: {
        color: 'white',
        fontSize: 18,
        marginLeft: 15
    },
    imageStyleOnly: {
        width: 20,
        height: 20,
        tintColor: 'white'
    }
})