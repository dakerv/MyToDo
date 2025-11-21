import { Stack } from "expo-router";
import { ThemeProvider } from "@/context/ThemeContext";

export default function TabsLayout() {
  return (
  <ThemeProvider>
  <Stack>
    <Stack.Screen 
    name="Tasks"
    options= {{ 
      headerShown: false
      }} />

    <Stack.Screen name='Reminders' 
    options={{  headerShown: false }} />

    <Stack.Screen name='Themes' 
    options={{ headerShown: false }} />

  </Stack>
  </ThemeProvider>
  )
}


//npx expo start --tunnel to get past the inability to connect issues.