import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="Tasks" 
    options= {{ 
      headerTitle: 'Tasks'
    }} />

    <Stack.Screen name='Reminders' 
    options={{ 
      headerTitle: 'Reminders' 
    }} />

    <Stack.Screen name='Theme' 
    options={{ 
      headerTitle: 'Themes'
    }} />
  </Stack>
  )
}


//npx expo start --tunnel to get past the inability to connect issues.