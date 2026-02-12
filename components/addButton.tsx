import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { useTheme } from '../context/ThemeContext'

export function AddButton({ onPress, text }: { onPress: () => void; text: string }) {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <LinearGradient
        colors={[theme.primaryDark, theme.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <View style={styles.content}>
          <Ionicons name="add" size={18} color="white" />
          <Text style={styles.text}>{text}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },

  button: {
    padding: 12,
    borderRadius: 8,

    // shadow-lg equivalent
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  text: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
})
