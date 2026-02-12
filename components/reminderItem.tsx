import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'
import { useTheme } from '../context/ThemeContext'

interface Reminder {
  id: number
  title: string
  completed: boolean
  time: { hours: string; minutes: string; period: string }
  date: string
  notes: string
}

export function ReminderItem({ reminder, onToggle }: { reminder: Reminder; onToggle: () => void }) {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <View
      style={[
        styles.container,
        { borderColor: theme.border },
      ]}
    >
      {/* Title + Checkbox */}
      <View style={styles.headerRow}>
        <Pressable
          onPress={onToggle}
          style={[
            styles.checkbox,
            {
              backgroundColor: reminder.completed
                ? theme.primary
                : 'transparent',
              borderColor: reminder.completed
                ? theme.primary
                : theme.primaryLight,
            },
          ]}
        >
          {reminder.completed && (
            <Ionicons name="checkmark" size={12} color="white" />
          )}
        </Pressable>

        <Text
          style={[
            styles.title,
            reminder.completed && styles.completedTitle,
          ]}
        >
          {reminder.title}
        </Text>
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        {/* Time */}
        <View style={styles.row}>
          <Text style={styles.label}>Time:</Text>

          <View style={styles.timeContainer}>
            <TextInput
              value={reminder.time.hours}
              editable={false}
              style={[
                styles.smallInput,
                { borderColor: currentTheme.border },
              ]}
            />

            <Text style={styles.colon}>:</Text>

            <TextInput
              value={reminder.time.minutes}
              editable={false}
              style={[
                styles.smallInput,
                { borderColor: currentTheme.border },
              ]}
            />

            <Text style={styles.period}>
              {reminder.time.period}
            </Text>
          </View>
        </View>

        {/* Date */}
        <View style={styles.row}>
          <Text style={styles.label}>Date:</Text>

          <TextInput
            value={reminder.date}
            editable={false}
            style={[
              styles.fullInput,
              { borderColor: currentTheme.border },
            ]}
          />
        </View>

        {/* Notes */}
        <View style={styles.notesRow}>
          <Text style={styles.label}>Notes:</Text>

          <TextInput
            value={reminder.notes}
            editable={false}
            multiline
            style={[
              styles.notesInput,
              { borderColor: currentTheme.border },
            ]}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginBottom: 12,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  title: {
    fontWeight: '600',
    color: 'white',
    fontSize: 14,
  },

  completedTitle: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },

  detailsContainer: {
    marginLeft: 28,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  notesRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  label: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.7)',
    width: 50,
  },

  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  smallInput: {
    width: 32,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  colon: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 4,
  },

  period: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginLeft: 6,
  },

  fullInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    fontSize: 12,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  notesInput: {
    flex: 1,
    height: 56,
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    fontSize: 12,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
    textAlignVertical: 'top',
  },
})
