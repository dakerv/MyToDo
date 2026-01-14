import Sidebar, { Pages } from '@/components/sidebar';
import { useTheme } from '@/context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Svg, { Path } from 'react-native-svg';
import Feather from '@expo/vector-icons/Feather';

export default function Tasks() {
  const { theme } = useTheme();
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState<Pages>('Tasks');
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleActivePage = (page: Pages) => {
    setActivePage(page);
    setIsSidebarOpen(false);
  }

  type Task = {
    id: string;
    title: string;
    completed: boolean;
  };

  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Do dishes', completed: false },
    { id: '2', title: 'Clean room', completed: false },
    { id: '3', title: 'Buy groceries', completed: false },
    { id: '4', title: 'Walk the dog', completed: true },
    { id: '5', title: 'Read a book', completed: true },
  ]);

  const addTask = () => {
  if (!newTaskTitle.trim()) return;

  const newTask: Task = {
    id: Date.now().toString(),
    title: newTaskTitle,
    completed: false,
  };

  setTasks(prev => [newTask, ...prev]);
  setNewTaskTitle('');
};

  const toggleTaskCompletion = (id: string) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } //adding ...tasks is to add the old completed value and not lose your whole type. without it, native would update the whole thing
      : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  };

  const uncompletedTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(tasks => tasks.completed);

  const TaskItem = ({ task }: { task: Task }) => (
    <View style={styles.individualTaskContainer}>

      <TouchableOpacity style = {[ styles.selectableCircles, { borderColor: theme.accent, backgroundColor: task.completed ? theme.primaryColor : 'transparent' }]}
         onPress={() => toggleTaskCompletion(task.id)}> 
         {task.completed &&(<Feather name="check" size={24} color="black" /> )} 
      </TouchableOpacity>

      <Text style={styles.individualTasksContainerText}>{task.title}</Text>

       <TouchableOpacity onPress={() => deleteTask(task.id)} style={{ marginLeft: 'auto' }}>
        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>X</Text>
      </TouchableOpacity>

    </View>
  );

    return (
        
        <LinearGradient colors={theme.gradient}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
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
                <Text style ={styles.headerText}> Tasks </Text>
              </View>

                <View style = {styles.uncompletedAndCompletedTasksContainer}>
                  
                  <View style = {[  styles.uncompletedTasksContainer, { backgroundColor: theme.accent}]}>
                    <Text style = {styles.uncompletedTasksText}> Uncompleted Tasks </Text>
                  </View>
                  {uncompletedTasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                  ))}

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
                    {completedTasks.map(task => (
                    <TaskItem key={task.id} task={task} /> ))}
                    
                    
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
            onClose = {() => setIsSidebarOpen(false)}
            />
        </LinearGradient>
    )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 1
  },
  button: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 20,
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
  individualTaskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        minHeight: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 10,
        flexWrap: 'wrap',             
  },
  individualTasksContainerText: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
  },
  selectableCircles: {
        width: 24,
        height: 24,
        borderRadius: 15,
        borderWidth: 3,
        marginRight: 15,
  },
  addTaskStyle: {
        color: 'white',
        fontSize: 16
  },
  addTaskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 15,
        height: 40,
        justifyContent: 'center',
  },
  taskInput: {
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
}
)

