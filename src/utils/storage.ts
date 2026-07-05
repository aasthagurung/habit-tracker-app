import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Habit {
  id: string;
  title: string;
  description: string;
  color: string;
  history: string[]; // Stores dates of completion: e.g., ["2026-06-23"]
  streak: number;
  reminderTime?: string; // Format: "HH:MM"
}

const HABITS_KEY = '@habit_tracker_habits';

export interface UserProfile {
  name: string;
  avatar: string;
  dailyCalories: number;
  protein: number;
  fats: number;
  carbs: number;
  sod: number;
  sleepQuality: number;
  bmi: number;
  weight: number;
  height: number;
  age: number;
}

export const storage = {
  // Save all habits
  saveHabits: async (habits: Habit[]) => {
    try {
      await AsyncStorage.setItem(HABITS_KEY, JSON.stringify(habits));
    } catch (e) {
      console.error("Error saving habits", e);
    }
  },
  getHabits: async (): Promise<Habit[]> => {
    try {
      const data = await AsyncStorage.getItem(HABITS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error loading habits", e);
      return [];
    }
  },

  setLoginStatus: async (isLoggedIn: boolean) => {
    try {
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    } catch (error) {
      console.error('Error saving login status:', error);
    }
  },
  getLoginStatus: async () => {
    try {
      const status = await AsyncStorage.getItem('isLoggedIn');
      return status ? JSON.parse(status) : false;
    } catch (error) {
      console.error('Error retrieving login status:', error);
      return false;
    }
  },
  saveUserProfile: async (profile: UserProfile) => {  
    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  },

  getUserProfile: async () => {
    try {
      const profile = await AsyncStorage.getItem('userProfile');
      return profile ? JSON.parse(profile) : null;
    } catch (error) {
      console.error('Error retrieving user profile:', error);
      return null ;
    }
},
};