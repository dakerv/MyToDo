import { useTheme } from '@/context/ThemeContext';
import Sidebar, { Pages } from '@/components/sidebar';
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Svg, { Path } from 'react-native-svg';


export default function Reminders () {
    const { theme } = useTheme();
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState<Pages>('Reminders')

    const handleActivePage = (page: Pages) => {
        setActivePage(page);
        setIsSidebarOpen(false);
    }

    return (
        <LinearGradient colors={theme.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>

            <View style={styles.drawerRevealIconContainer}>
                <TouchableOpacity onPress={() => setIsSidebarOpen (!isSideBarOpen)}>
                    <Image
                    source={require('../assets/images/Button.png')}
                    style={ styles.drawerRevealIcon }
                    />
                </TouchableOpacity>
            </View>
            
             <View style = {[ styles.circleGlow, { borderColor: theme.glowColor}]}> </View>
             <View style = {[ styles.squareGlow, { borderColor: theme.glowColor}]}> </View>
             <View style = {[ styles.smallerSquare, {borderColor: theme.glowColor, backgroundColor: theme.glowColor }]}> </View>

              <View style={styles.headerContainer}> 
                 <Text style ={styles.headerText}> Reminders </Text>
              </View>
             

         <View style={styles.waveWrapper}>
                  <Svg
                    width="100%"
                    height={120}
                    viewBox="0 0 1440 150"
                    preserveAspectRatio="none">
               
                    <Path
                      d="M0,75 L80,55 Q120,35,160,55 T320,55 T480,55 T640,55 T800,55 T960,55 T1120,55 T1280,55 T1440,75 V150 H0 Z"
                      fill={theme.accent} />
                  </Svg>
                  </View>

        <Sidebar 
            isOpen={isSideBarOpen} 
            onSelectPage={handleActivePage} 
            selectedPage={activePage}
            onClose = {() => setIsSidebarOpen(false)}/>
        </LinearGradient>
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
  circleGlow: {
        position: 'absolute',
        top: 140,
        right: 60,
        width: 140,
        height: 140,
        borderRadius: 90,
        borderWidth: 4.5,
        opacity: 0.2
    },
    squareGlow: {
        position: 'absolute',
        top: 450,
        right: 200,
        width: 170,
        height: 170,
        borderWidth: 4,
        opacity: 0.2
},
    smallerSquare: {
        position: 'absolute',
        top: 430,
        left: 250,
        width: 90,
        height: 90,
        opacity: 0.2,
        borderWidth: 4,
    },
     headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
  },
    headerContainer: {
        marginTop: 65,
        marginBottom: 30,
  },
    waveWrapper: {
        position: 'absolute',
        bottom: -15,
        left: -30,
        width: 500,
        overflow: 'hidden',
        height: 120,
}
})