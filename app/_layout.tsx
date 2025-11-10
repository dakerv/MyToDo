import { Stack } from "expo-router";
import Tasks from "./(screens)/Tasks";

export default function RootLayout() {
  return (
  <Stack initialRouteName="Tasks">
    <Stack.Screen 
    name="Tasks"
    options= {{ 
      headerTitle: 'Tasks',
      
    }} />

    <Stack.Screen name='Reminders' 
    options={{ 
      headerTitle: 'Reminders',
      headerShown: false
    }} />

    <Stack.Screen name='Theme' 
    options={{ 
      headerTitle: 'Themes'
    }} />
  </Stack>
  )
}


//npx expo start --tunnel to get past the inability to connect issues.