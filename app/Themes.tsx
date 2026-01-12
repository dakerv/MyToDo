import Sidebar, { Pages } from '@/components/sidebar';
import { ThemeName, themes, useTheme } from '@/context/ThemeContext';
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Themes () {
    const { themeName, setThemeName, theme} = useTheme();
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState<Pages>('Themes')

    const handleActivePage = (page: Pages) => {
        setIsSidebarOpen(false);
        setActivePage(page);
    }

    const themeOptions: {id: string; image: any; name: ThemeName; description: string; }[] = [
        { id: '1', image: require ('../assets/images/Petal Icon.png'), name: 'Petal', description: 'Soft pink and black elegance'},
        { id: '2', image: require ('../assets/images/Mint Icon.png'), name: 'Mint', description: 'Fresh green and black harmony'},
        { id: '3', image: require ('../assets/images/Neutral Icon.png'), name: 'Neutral', description: 'Professional black and white'},
    ]
    return (
        <View style = {[styles.container, {backgroundColor: theme.primaryDark}]}>
            <View style={styles.drawerRevealIconContainer}>
                <TouchableOpacity onPress={() => setIsSidebarOpen (!isSideBarOpen)}>
                    <Image
                    source={require('../assets/images/Button.png')}
                    style={ styles.drawerRevealIcon }/>
                </TouchableOpacity>
            </View>

          <View style = {[ styles.circleGlow, { borderColor: theme.glowColor}]}> </View>
          <View style = {[ styles.squareGlow, { borderColor: theme.glowColor}]}> </View>
          <View style = {[ styles.smallerSquare, {borderColor: theme.glowColor, backgroundColor: theme.glowColor }]}></View>



            <View style={styles.headerContainer}> 
                <Text style ={styles.headerText}> Themes </Text>
            </View>


            <View style = {styles.containerForFlatlistAndPreferredThemeText}>
            <Text style = {styles.yourPreferredTheme}> Choose your preferred colour theme </Text>

            <FlatList
            data={themeOptions}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity
                onPress={() => setThemeName(item.name as ThemeName)}
                style={{
                    backgroundColor: themes[item.name].bg,
                    paddingLeft: 20,
                    paddingBottom: 25,
                    paddingTop: 15,
                    borderRadius: 10,
                    marginBottom: 15,
                    borderWidth: themeName === item.name ? 2 : 0,
                    borderColor: themeName === item.name ? theme.primaryColor : 'transparent',
                }}
            >

                <View style={styles.themeOptionContainer}>
                    <Image source={item.image} style={{width: 70, height: 70, marginTop: 10}} />

                    <View style={styles.themeOptionTextContainerOnly}>
                        <Text style = {{ color: themes[item.name].primaryColor, fontWeight: 'bold', fontSize: 18 }}>
                        {item.name}
                        </Text>

                        <Text style = {{ color: themes[item.name].primaryColor, fontSize: 14 }}>
                        {item.description}
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>
            
            )}  />  
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
            onClose={() => setIsSidebarOpen(false)}
        />

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: 'black',
        zIndex: 1
    },
    circleGlow: {
        position: 'absolute',
        top: 140,
        right: 60,
        width: 140,
        height: 140,
        borderRadius: 90,
        borderWidth: 4.5,
        opacity: 0.35
    },
    squareGlow: {
        position: 'absolute',
        top: 450,
        right: 200,
        width: 170,
        height: 170,
        borderWidth: 4,
        opacity: 0.35
},
    smallerSquare: {
        position: 'absolute',
        top: 430,
        left: 250,
        width: 90,
        height: 90,
        opacity: 0.4,
        borderWidth: 4,
    },
    introductoryText: {
        fontSize: 50,
        color: 'white'
    },
    drawerRevealIconContainer: {
        position: 'absolute',
        width: 600,
        left: 0,
        height: 90,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingTop: 45,
        padding: 18
  },
    drawerRevealIcon: {
        alignSelf: 'flex-start',
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
    themeOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
  },
  themeOptionTextContainerOnly: {
        flex: 1
  },
  yourPreferredTheme: {
    color: 'white',
    fontSize: 16,
    marginTop: 40,
    marginBottom: 25,
  },
  containerForFlatlistAndPreferredThemeText: {
    height: 550,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 8,
    padding: 20,
  },
  waveWrapper: {
  position: 'absolute',
  bottom: -15,
  left: -30,
  width: 500,
  overflow: 'hidden',
  height: 120,
},
})