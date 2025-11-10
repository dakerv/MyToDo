import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="Tasks" 
    options= {{ 
      headerTitle: 'Tasks'
    }} />

    <Stack.Screen name='Reminders' options={{ headerShown: false }} />
    <Stack.Screen name='Theme' options={{ headerShown: false}} />
  </Stack>
  )
}


//npx expo start --tunnel to get past the inability to connect issues.