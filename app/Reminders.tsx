import Sidebar, { Pages } from '@/components/sidebar';
import { useTheme } from '@/context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import React, { use, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import Svg, { Path } from 'react-native-svg';


export default function Reminders () {
    const { theme } = useTheme();
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState<Pages>('Reminders')
    const [newReminderTitle, setNewReminderTitle] = useState('');

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

    const newReminder: Reminder = {
        id: Date.now().toString(),
        title: newReminderTitle,
        time: '12:00 AM',
        completed: false,
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

    const completedReminders = reminders.filter(reminder => reminder.completed);
    const uncompletedReminders = reminders.filter(reminder => !reminder.completed);

     const ReminderItem = ({ reminder }: { reminder: Reminder }) => (
    <View style={styles.individualTaskContainer}>

      <TouchableOpacity style = {[ styles.selectableCircles, { borderColor: theme.accent, backgroundColor: reminder.completed ? theme.primaryColor : 'transparent' }]}
         onPress={() => toggleReminderCompletion(reminder.id)}> 
         {reminder.completed && (<Feather name="check" size={15} color="black" style={{ padding: 2 }}/> )} 
      </TouchableOpacity>

      <Text style={styles.individualTasksContainerText}>{reminder.title}</Text>

       <TouchableOpacity onPress={() => deleteReminder(reminder.id)} style={{ marginLeft: 'auto' }}>
        <EvilIcons name="close" size={24} color="black" />
      </TouchableOpacity>

    </View>

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
                </View>


              <TextInput
                value={newTaskTitle}
                onChangeText={setNewTaskTitle}
                placeholder="New task title"
                placeholderTextColor="rgba(255,255,255,0.5)"
                style={[styles.taskInput, { borderColor: theme.accent, color: 'white' }]}/>
            
                  <TouchableOpacity style={styles.addTaskContainer} onPress={addTask}> 
                     <Image source={require('../assets/images/Frame.png')} />
                        <Text style ={styles.addTaskStyle}> Add task </Text>
                   </TouchableOpacity>
            
            
                 <View style = {[ styles.uncompletedTasksContainer, {backgroundColor: theme.accent }]}>
                    <Text style = {styles.uncompletedTasksText}> Completed Tasks </Text>
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
    waveWrapper: {
        position: 'absolute',
        bottom: -15,
        left: -30,
        width: 500,
        overflow: 'hidden',
        height: 120,
}
})