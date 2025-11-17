import React, { useEffect, useRef } from "react";
import { Animated, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Pages = 'Tasks' | 'Reminders' | 'Themes';

type SidebarProps = {
    onSelectPage: (page: Pages) => void;
    isOpen: boolean;
    selectedPage: Pages;
}

const sidebarItems: { id: string; title: Pages; link: string; image: any }[] = [
    { id: '1', title: 'Tasks', link: '/Tasks', image: require('../assets/images/tasksTick.png') },
    { id: '2', title: 'Reminders', link: '/Reminders', image: require('../assets/images/reminderBell.png') },
    { id: '3', title: 'Themes', link: '/Themes', image: require('../assets/images/themesPalette.png') },
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

                <View style = {styles.myToDoAndExitButtonContainer}>
                    <Text style = {styles.myAppTextStyles}> My App </Text>
                    <Image source = { require ('../assets/images/exitButton.png')}
                    style = {styles.exitButtonStyles} />
                </View>

                <View style= {styles.flatListItems}>
                <FlatList
                data={sidebarItems}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => onSelectPage(item.title)}
                    style={[
                        styles.sidebarItem,
                        selectedPage === item.title && styles.selectedSidebarItem
                    ]}>
                        
                        <View style={styles.imageAndTextStyles}>
                        <Image source={item.image}/>
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
        backgroundColor: '#d3d3d3',
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
    }
})