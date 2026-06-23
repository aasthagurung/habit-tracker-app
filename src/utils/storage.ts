import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Habit {
  id: string;
  title: string;
  description: string;
  color: string;
  history: string[]; // Stores dates of completion: e.g., ["2026-06-23"]
  streak: number;
}

const HABITS_KEY = '@habit_tracker_habits';

export const storage = {
  // Save all habits
  saveHabits: async (habits: Habit[]) => {
    try {
      await AsyncStorage.setItem(HABITS_KEY, JSON.stringify(habits));
    } catch (e) {
      console.error("Error saving habits", e);
    }
  },

  // Read all habits
  getHabits: async (): Promise<Habit[]> => {
    try {
      const data = await AsyncStorage.getItem(HABITS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error fetching habits", e);
      return [];
    }
  }
};