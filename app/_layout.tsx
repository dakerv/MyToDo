import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
  <Stack>
    <Stack.Screen 
    name="Tasks"
    options= {{ 
      headerShown: false
      }} />

    <Stack.Screen name='Reminders' 
    options={{  headerTitle: 'Reminders' }} />

    <Stack.Screen name='Themes' 
    options={{ headerTitle: 'Themes' }} />

  </Stack>
  )
}


//npx expo start --tunnel to get past the inability to connect issues.