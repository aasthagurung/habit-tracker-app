// src/utils/notifications.ts
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';
import { Habit } from './storage';

// Store notification IDs to allow cancellation
let notificationIds: string[] = [];

/**
 * Set up notifications - request permissions and configure handler
 */
export const setupNotifications = async () => {
  try {
    // Request permissions
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Notification permissions not granted');
      return false;
    }

    // Set up notification handler
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
        shouldShowBanner: true,
        shouldShowList: true,
      }),
    });

    console.log('Notifications set up successfully');
    return true;
  } catch (error) {
    console.error('Error setting up notifications:', error);
    return false;
  }
};

/**
 * Schedule a daily reminder for a specific habit
 */
export const scheduleHabitReminder = async (habit: Habit) => {
  // Check if habit has a reminder time
  if (!habit.reminderTime) {
    console.log(`No reminder time set for habit: ${habit.title}`);
    return;
  }

  // Parse the time (format: "HH:MM")
  const [hour, minute] = habit.reminderTime.split(':').map(Number);
  
  if (isNaN(hour) || isNaN(minute)) {
    console.error(`Invalid time format for habit: ${habit.title}`);
    return;
  }

  try {
    const identifier = await Notifications.scheduleNotificationAsync({
      content: {
        title: `⏰ ${habit.title} Reminder`,
        body: habit.description 
          ? `Time to complete: ${habit.description}` 
          : `Time to complete your habit!`,
        sound: true,
        data: { habitId: habit.id },
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
        hour,
        minute,
        repeats: true,
      },
    });
    
    notificationIds.push(identifier);
    console.log(`✅ Scheduled reminder for "${habit.title}" at ${habit.reminderTime}`);
    return identifier;
  } catch (error) {
    console.error(`Failed to schedule reminder for "${habit.title}":`, error);
  }
};

/**
 * Schedule reminders for all habits
 */
export const scheduleRemindersForAllHabits = async (habits: Habit[]) => {
  // Cancel all existing notifications first
  await cancelAllNotifications();
  
  console.log(`📅 Scheduling reminders for ${habits.length} habits...`);
  
  // Schedule new ones for each habit with reminder time
  let scheduledCount = 0;
  for (const habit of habits) {
    if (habit.reminderTime) {
      await scheduleHabitReminder(habit);
      scheduledCount++;
    }
  }
  
  console.log(`✅ Scheduled ${scheduledCount} reminders`);
};

/**
 * Cancel a specific notification
 */
export const cancelNotification = async (identifier: string) => {
  try {
    await Notifications.cancelScheduledNotificationAsync(identifier);
    notificationIds = notificationIds.filter(id => id !== identifier);
    console.log(`❌ Cancelled notification: ${identifier}`);
  } catch (error) {
    console.error('Failed to cancel notification:', error);
  }
};

/**
 * Cancel all scheduled notifications
 */
export const cancelAllNotifications = async () => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    notificationIds = [];
    console.log('❌ Cancelled all notifications');
  } catch (error) {
    console.error('Failed to cancel all notifications:', error);
  }
};

/**
 * Cancel notification for a specific habit
 * (Cancels all and reschedules without the deleted habit)
 */
export const cancelNotificationForHabit = async (habitId: string) => {
  try {
    // Import storage dynamically to avoid circular dependency
    const { storage } = await import('./storage');
    const habits = await storage.getHabits();
    const filteredHabits = habits.filter(h => h.id !== habitId);
    await scheduleRemindersForAllHabits(filteredHabits);
    console.log(`❌ Cancelled notification for habit: ${habitId}`);
  } catch (error) {
    console.error('Failed to cancel notification for habit:', error);
  }
};

/**
 * Handle notification response (when user taps on notification)
 */
export const setupNotificationResponseHandler = (navigation: any) => {
  const subscription = Notifications.addNotificationResponseReceivedListener(response => {
    const habitId = response.notification.request.content.data?.habitId;
    console.log(`🔔 Notification tapped for habit: ${habitId}`);
    
    if (habitId) {
      // Navigate to the home screen
      navigation.navigate('MainTabs', { screen: 'Dashboard' });
    }
  });

  return subscription;
};

/**
 * Get the device push token (for future use with remote notifications)
 */
export const getPushToken = async (): Promise<string | null> => {
  if (!Device.isDevice) {
    Alert.alert('Must use physical device for Push Notifications');
    return null;
  }

  try {
    const token = await Notifications.getExpoPushTokenAsync({
      projectId: 'your-project-id', // Replace with your Expo project ID
    });
    console.log('📱 Push token:', token);
    return token.data;
  } catch (error) {
    console.error('Failed to get push token:', error);
    return null;
  }
};

/**
 * Check if notifications are enabled
 */
export const areNotificationsEnabled = async (): Promise<boolean> => {
  try {
    const settings = await Notifications.getPermissionsAsync();
    return settings.granted;
  } catch (error) {
    console.error('Failed to check notification permissions:', error);
    return false;
  }
};

/**
 * Send a test notification (for debugging)
 */
export const sendTestNotification = async () => {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '🔔 Test Notification',
        body: 'This is a test notification from your Habit Tracker app!',
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 2,
      },
    });
    console.log('✅ Test notification scheduled');
  } catch (error) {
    console.error('Failed to send test notification:', error);
  }
};