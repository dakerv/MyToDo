import Sidebar, { Pages } from '@/components/sidebar';
import { useTheme } from '@/context/ThemeContext';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Svg, { Path } from 'react-native-svg';


export default function Reminders () {
    const { theme } = useTheme();
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState<Pages>('Reminders')
    const [newReminderTitle, setNewReminderTitle] = useState('');
    const [newReminderTime, setNewReminderTime] = useState('');
    const [newReminderDate, setNewReminderDate] = useState('');
    const [newReminderNote, setNewReminderNote] = useState('');


    const handleActivePage = (page: Pages) => {
        setActivePage(page);
        setIsSidebarOpen(false);
    }

    const [reminders, setReminders] = useState<Reminder[]>([
        { id: '1', title: 'Doctor Appointment', time: '10:00 AM', completed: false, date: '2024-06-20' },
    ]);

    type Reminder = {
        id: string;
        title: string;
        time:  string;
        completed: boolean;
        note?: string;
        date: string;
    }

    const today = new Date();

    const addReminder = () => {
        if (!newReminderTitle.trim()) return;
        if (!newReminderDate.trim()) return;
        if (!newReminderTime.trim()) return;

    const newReminder: Reminder = {
        id: Date.now().toString(),
        title: newReminderTitle.trim(),
        time: newReminderTime.trim(),
        completed: false
        date: today.toISOString().split('T')[0],
    };

    setReminders(prev => [newReminder, ...prev]);
    setNewReminderTitle('');
};

    const toggleReminderCompletion = (id: string) => {
        setReminders(prev =>
        prev.map(reminder => reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder));
    };

    const deleteReminder = (id: string) => {
        setReminders(prev => prev.filter(reminder => reminder.id !== id))
    };

    const uncompletedReminders = reminders.filter(reminder => !reminder.completed);
    const completedReminders = reminders.filter(reminder => reminder.completed);

     const ReminderItem = ({ reminder }: { reminder: Reminder }) => (
    <View style={styles.individualReminderContainer}>

      <TouchableOpacity style = {[ styles.selectableSquares, { borderColor: theme.accent, backgroundColor: reminder.completed ? theme.primaryColor : 'transparent' }]}
         onPress={() => toggleReminderCompletion(reminder.id)}> 
         {reminder.completed && (<Feather name="check" size={15} color="black" style={{ padding: 2 }}/> )} 
      </TouchableOpacity>

      <Text style={styles.individualReminderContainerText}>{reminder.title}</Text>
      <Text style={styles.individualReminderContainerText}> at {reminder.time} on {reminder.date} </Text>


       <TouchableOpacity onPress={() => deleteReminder(reminder.id)} style={{ marginLeft: 'auto' }}>
        <EvilIcons name="close" size={24} color="black" />
      </TouchableOpacity>

    </View>
    );

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

              
               <View style = {styles.uncompletedAndCompletedTasksContainer}>
                  <View style = {[  styles.uncompletedTasksContainer, { backgroundColor: theme.accent}]}>
                     <Text style = {styles.uncompletedTasksText}> Pending Reminders </Text>
                  </View>
                  {uncompletedReminders.map(reminder => (
                    <ReminderItem key={reminder.id} reminder={reminder} />
                  ))}

                  
              <TextInput
                value={newReminderTitle}
                onChangeText={setNewReminderTitle}
                placeholder="New reminder title"
                placeholderTextColor="rgba(255,255,255,0.5)"
                style={[styles.reminderInput, { borderColor: theme.accent, color: 'white' }]}/>

            <TextInput
               value={newReminderTime}
               onChangeText={setNewReminderTime}
               placeholder="New reminder time"
               placeholderTextColor="rgba(255,255,255,0.5)"
               style={[styles.reminderInput, { borderColor: theme.accent, color: 'white' }]}/>

            <TextInput
               value={newReminderDate}
               onChangeText={setNewReminderDate}
               placeholder="New reminder date"
               placeholderTextColor="rgba(255,255,255,0.5)"
               style={[styles.reminderInput, { borderColor: theme.accent, color: 'white' }]}/>

            <TextInput
              value={newReminderNote}
              onChangeText={setNewReminderNote}
              placeholder="New reminder note"
              placeholderTextColor="rgba(255,255,255,0.5)"
              style={[styles.reminderInput, { borderColor: theme.accent, color: 'white' }]}/>

                  <TouchableOpacity style={styles.addReminderContainer} onPress={addReminder}> 
                     <Image source={require('../assets/images/Frame.png')} />
                        <Text style ={styles.addReminderStyle}> Add tReminder </Text>
                   </TouchableOpacity>
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
    position: 'absolute',
    width: 600,
    left: 0,
    height: 90,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingTop: 45,
    padding: 18
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
    uncompletedAndCompletedTasksContainer: {
        height: 580,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 8,
        padding: 20,
  },
  uncompletedTasksContainer: {
        paddingLeft: 10,
        paddingRight: 12,
        height: 50,
        width: 350,
        borderRadius: 8,
        marginBottom: 15,
        paddingTop: 16,
  },
  uncompletedTasksText: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
  },
   individualReminderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        minHeight: 160,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 7,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 10,
        flexWrap: 'wrap',             
  },
  individualReminderContainerText: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
  },
  selectableSquares: {
        width: 24,
        height: 24,
        borderRadius: 2,
        borderWidth: 3,
        marginRight: 15,
  },
  addReminderStyle: {
        color: 'white',
        fontSize: 16
  },
  addReminderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 15,
        height: 40,
        justifyContent: 'center',
  },
  reminderInput: {
        height: 45,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 10,
        fontSize: 16,
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