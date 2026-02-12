import React, { useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { AddButton } from '../components/addButton'
import { ReminderItem } from '../components/reminderItem'
import { useTheme } from '../context/ThemeContext'

export function Reminders() {
  const { theme } = useTheme()

  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: 'Study for Test',
      completed: false,
      time: {
        hours: '12',
        minutes: '00',
        period: 'PM',
      },
      date: '14th August',
      notes: 'I need to finish this before I sleep',
    },
    {
      id: 2,
      title: 'Take Trash Out',
      completed: false,
      time: {
        hours: '02',
        minutes: '00',
        period: 'PM',
      },
      date: '16th August',
      notes: 'Mummy will be mad if I forget',
    },
    {
      id: 3,
      title: 'Doctor Appointment',
      completed: true,
      time: {
        hours: '10',
        minutes: '30',
        period: 'AM',
      },
      date: '12th August',
      notes: 'Annual checkup',
    },
  ])

  const addReminder = () => {
    const newReminder = {
      id: reminders.length + 1,
      title: 'New reminder',
      completed: false,
      time: {
        hours: '12',
        minutes: '00',
        period: 'PM',
      },
      date: 'Today',
      notes: '',
    }

    setReminders([...reminders, newReminder])
  }

  const toggleReminderCompletion = (id: number) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, completed: !reminder.completed }
          : reminder,
      ),
    )
  }

  const pendingReminders = reminders.filter(
    (reminder) => !reminder.completed,
  )

  const completedReminders = reminders.filter(
    (reminder) => reminder.completed,
  )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Reminders</Text>

      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.bg,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={styles.innerPadding}>
          {/* Pending Section */}
          <View
            style={[
              styles.sectionHeader,
              {
                backgroundColor: theme.accent,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={styles.sectionHeaderText}>
              Pending Reminders
            </Text>
          </View>

          <View style={styles.listSpacing}>
            {pendingReminders.map((reminder) => (
              <ReminderItem
                key={reminder.id}
                reminder={reminder}
                onToggle={() =>
                  toggleReminderCompletion(reminder.id)
                }
              />
            ))}
          </View>

          <AddButton onPress={addReminder} text="Add Reminder" />

          {/* Completed Section */}
          <View
            style={[
              styles.sectionHeader,
              styles.completedSection,
              {
                backgroundColor: theme.accent,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={styles.sectionHeaderText}>
              Completed Reminders
            </Text>
          </View>

          <View style={styles.listSpacing}>
            {completedReminders.map((reminder) => (
              <ReminderItem
                key={reminder.id}
                reminder={reminder}
                onToggle={() =>
                  toggleReminderCompletion(reminder.id)
                }
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,

    // drop shadow equivalent
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  card: {
    borderWidth: 1,
    borderRadius: 12,

    // shadow-2xl equivalent
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },

  innerPadding: {
    padding: 16,
  },

  sectionHeader: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },

  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },

  listSpacing: {
    marginBottom: 16,
  },

  completedSection: {
    marginTop: 24,
  },
})
