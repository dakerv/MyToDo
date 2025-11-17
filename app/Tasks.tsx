import Sidebar, { Pages } from '@/components/sidebar';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Tasks() {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState<Pages>('Tasks');

  const handleActivePage = (page: Pages) => {
    setActivePage(page);
    setIsSidebarOpen(false);
  }

    return (
        <View style={styles.container}>

          <View style={styles.drawerRevealIconContainer}>
            <TouchableOpacity onPress={() => setIsSidebarOpen (!isSideBarOpen)}>
            <Image
              source={require('../assets/images/Button.png')}
              style={ styles.drawerRevealIcon }
            />
            </TouchableOpacity>
          </View>

          <View style = {styles.firstView}>
            <Text style = {styles.hiButton}> Hi </Text>
          </View>
          
            <Sidebar 
            isOpen={isSideBarOpen} 
            onSelectPage={handleActivePage} 
            selectedPage={activePage}
            />
        </View>
    )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'black',
    zIndex: 1
  },
  button: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 20
  },
  drawerRevealIconContainer: {
    width: '100%',
    padding: 20
  },
  drawerRevealIcon: {
    alignSelf: 'flex-start',
  },
  hiButton: {
    fontSize: 50,
    color: 'white'
 },
 firstView: {
    backgroundColor: 'grey',
    height: 200, 
    width: '100%',
    marginTop: 50
}
}
)

