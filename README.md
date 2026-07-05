ech Stack
Technology	Purpose
React Native	Mobile app framework
Expo SDK 56	Development platform
TypeScript	Type-safe JavaScript
React Navigation v7	Screen navigation (Stack + Bottom Tabs)
AsyncStorage	Local data persistence
Expo Notifications	Push notification management
DateTimePicker	Time selection for reminders
📱 Screens Overview
1. Welcome Screen (Before Login)
Hero section with app branding

Event preview cards

Login and Create Account buttons

Decorative pastel circles

2. Login Screen
Email and password inputs

Login button with loading state

Sign up navigation link

3. Profile Setup Screen (First-time users)
Avatar selection (10 options)

Personal information (Name, Age)

Health metrics (Weight, Height - auto-calculates BMI)

Nutrition goals (Calories, Protein, Fats, Carbs, SOD)

Sleep quality rating (1-10)

4. Dashboard Screen (After Login)
Personalized greeting with user's name

Nutrition summary card

Today's habits (with completion toggle)

Health cards (Sleep Quality, BMI)

Quick stats (Total Habits, Done Today, Total Streak, Best Streak)

Smart recommendations (based on user data)

Quick Add button for new habits

5. Add Habit Screen
Habit name and description inputs

5 pastel color options

Daily reminder toggle with time picker

Save button

6. Stats Screen
Total habits count

Total completions

Total streak

Best streak

Weekly completions

Habit breakdown list

7. Settings Screen
Clear all data (with confirmation)

Edit profile

Logout

🔧 Installation & Setup
Prerequisites
Node.js (LTS version)

npm or yarn

Expo CLI

iOS Simulator (macOS) or Android Emulator

Expo Go app on physical device (optional)

Installation Steps
bash
# 1. Clone the repository
git clone https://github.com/aasthagurung/habit-tracker-app.git
cd habit-tracker-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm start

# 4. Run on specific platform
npm run android    # Android emulator/device
npm run ios        # iOS simulator (macOS only)
npm run web        # Web browser
Environment Variables
Add these to your package.json scripts or run with:

bash
EXPO_ROUTER_DISABLE_RN_NAVIGATION_CHECK=1 EXPO_NO_TYPED_ROUTES=true npm start
📦 Dependencies
json
{
  "dependencies": {
    "@react-native-async-storage/async-storage": "2.2.0",
    "@react-native-community/datetimepicker": "^8.0.0",
    "@react-navigation/bottom-tabs": "^7.18.2",
    "@react-navigation/native": "^7.3.3",
    "expo": "~56.0.12",
    "expo-constants": "~56.0.18",
    "expo-device": "~56.0.4",
    "expo-notifications": "~0.32.0",
    "expo-splash-screen": "~56.0.10",
    "expo-status-bar": "~56.0.4",
    "react": "19.2.3",
    "react-native": "0.85.3",
    "react-native-safe-area-context": "~5.7.0",
    "react-native-screens": "4.25.2"
  },
  "devDependencies": {
    "@types/react": "~19.2.2",
    "typescript": "~6.0.3"
  }
}
🧪 Testing
Test Scenarios
Test Case	Expected Result
Create account with profile	Redirects to Dashboard
Login with existing account	Redirects to Dashboard
Create habit with reminder	Notification scheduled
Mark habit as complete	Streak increases by 1
Edit habit	Changes saved
Delete habit	Removed from list
Logout	Redirects to Welcome screen
📄 Course Requirements Demonstrated
Requirement	Implementation
React Native with Expo	✅ Full app built with Expo SDK 56
TypeScript	✅ All files use TypeScript with strict mode
Navigation	✅ Stack + Bottom Tab navigation
CRUD Operations	✅ Create, Read, Update, Delete habits
Local Storage	✅ AsyncStorage for all data persistence
Push Notifications	✅ Expo Notifications with user-defined times
Responsive UI	✅ Pastel theme with Flexbox layout
State Management	✅ useState, useEffect, custom hooks
🎯 Future Enhancements
Cloud sync across devices

User authentication with Firebase

Habit categories and tags

Progress charts and graphs

Social sharing of achievements

Dark mode support

Widget support (iOS/Android)

Export/Import data

👨‍💻 Author
Aastha Gurung
BIT 4.6A - Advanced Mobile Development
University of Applied Sciences

📝 License
This project is for educational purposes only.

🙏 Acknowledgments
React Native Documentation

Expo Documentation

React Navigation Documentation

Course Instructor: Ibrahim Musabeh

Happy Habit Tracking! 🌱

text

---

## ✅ **Copy and Paste Instructions**

1. Open your `README.md` file
2. Select all content (Cmd+A or Ctrl+A)
3. Delete everything
4. Paste the content above
5. Save the file

That's it! Your README is now complete and reflects your entire app! 🎉
wich is my which to copy paste
Here are ALL the files you need to copy and paste directly into your project. I've organized them by folder:

📁 Copy These Files in Order
1. app.json
json
{
  "expo": {
    "name": "habit_tracker_app",
    "slug": "habit_tracker_app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "habittrackerapp",
    "userInterfaceStyle": "automatic",
    "ios": {
      "icon": "./assets/expo.icon"
    },
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#E6F4FE",
        "foregroundImage": "./assets/images/android-icon-foreground.png",
        "backgroundImage": "./assets/images/android-icon-background.png",
        "monochromeImage": "./assets/images/android-icon-monochrome.png"
      },
      "predictiveBackGestureEnabled": false
    },
    "web": {
      "output": "single",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      [
        "expo-splash-screen",
        {
          "backgroundColor": "#208AEF",
          "android": {
            "image": "./assets/images/splash-icon.png",
            "imageWidth": 76
          }
        }
      ]
    ],
    "experiments": {
      "typedRoutes": false,
      "reactCompiler": true
    }
  }
}
2. package.json
json
{
  "name": "habit_tracker_app",
  "main": "node_modules/expo/AppEntry.js",
  "version": "1.0.0",
  "dependencies": {
    "@react-native-async-storage/async-storage": "2.2.0",
    "@react-native-community/datetimepicker": "^8.0.0",
    "@react-navigation/bottom-tabs": "^7.18.2",
    "@react-navigation/native": "^7.3.3",
    "expo": "~56.0.12",
    "expo-constants": "~56.0.18",
    "expo-device": "~56.0.4",
    "expo-notifications": "~0.32.0",
    "expo-splash-screen": "~56.0.10",
    "expo-status-bar": "~56.0.4",
    "react": "19.2.3",
    "react-native": "0.85.3",
    "react-native-safe-area-context": "~5.7.0",
    "react-native-screens": "4.25.2"
  },
  "devDependencies": {
    "@types/react": "~19.2.2",
    "typescript": "~6.0.3"
  },
  "scripts": {
    "start": "EXPO_ROUTER_DISABLE_RN_NAVIGATION_CHECK=1 EXPO_NO_TYPED_ROUTES=true expo start",
    "android": "EXPO_ROUTER_DISABLE_RN_NAVIGATION_CHECK=1 EXPO_NO_TYPED_ROUTES=true expo start --android",
    "ios": "EXPO_ROUTER_DISABLE_RN_NAVIGATION_CHECK=1 EXPO_NO_TYPED_ROUTES=true expo start --ios",
    "web": "EXPO_ROUTER_DISABLE_RN_NAVIGATION_CHECK=1 EXPO_NO_TYPED_ROUTES=true expo start --web"
  },
  "private": true
}
3. App.tsx
tsx
// App.tsx
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from './src/styles/globalStyles';

// Import Screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileSetupScreen from './src/screens/ProfileSetupScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import AddHabitScreen from './src/screens/AddHabitScreen';
import StatsScreen from './src/screens/StatsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Import Utils
import { setupNotifications, scheduleRemindersForAllHabits } from './src/utils/notifications';
import { storage } from './src/utils/storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.textDark,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
        },
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ tabBarLabel: '● Home' }} />
      <Tab.Screen name="Add" component={AddHabitScreen} options={{ tabBarLabel: '● Create' }} />
      <Tab.Screen name="Stats" component={StatsScreen} options={{ tabBarLabel: '● Stats' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: '● Profile' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      const loggedIn = await storage.getLoginStatus();
      setIsLoggedIn(loggedIn);

      const granted = await setupNotifications();
      if (granted) {
        const habits = await storage.getHabits();
        await scheduleRemindersForAllHabits(habits);
      }
      
      setIsLoading(false);
    };
    initializeApp();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isLoggedIn ? (
            <>
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="MainTabs" component={MainTabs} />
              <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
4. src/styles/globalStyles.ts
tsx
// src/styles/globalStyles.ts
import { StyleSheet } from 'react-native';

export const COLORS = {
    background: '#F9F6EE',
    textDark: '#1A1A1A',
    textMuted: '#666666',
    white: '#FFFFFF',
    pastelYellow: '#FFEFA6',
    pastelPink: '#FFD4DB',
    pastelPurple: '#E3D7FF',
    pastelBlue: '#CBE5FF',
    pastelGreen: '#D2F5E3',
};

export const globalStyles = StyleSheet.create({
    // ==================== CONTAINERS ====================
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
    },
    welcomeContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },

    // ==================== TYPOGRAPHY ====================
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: COLORS.textDark,
        marginBottom: 8,
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textMuted,
        marginBottom: 20,
    },
    welcomeHeroEmoji: {
        fontSize: 48,
        marginBottom: 10,
    },
    welcomeHeroTitle: {
        fontSize: 36,
        lineHeight: 42,
        letterSpacing: -1,
    },

    // ==================== BUTTONS ====================
    button: {
        backgroundColor: COLORS.textDark,
        paddingVertical: 16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '700',
    },
    buttonOutline: {
        backgroundColor: 'transparent',
        paddingVertical: 14,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        borderWidth: 2,
        borderColor: COLORS.textDark,
    },
    buttonOutlineText: {
        color: COLORS.textDark,
        fontSize: 16,
        fontWeight: '700',
    },

    // ==================== CARDS ====================
    card: {
        borderRadius: 24,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.06)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.textDark,
        opacity: 0.8,
    },

    // ==================== INPUTS ====================
    inputField: {
        backgroundColor: '#FFFFFF',
        padding: 18,
        borderRadius: 20,
        marginBottom: 14,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
        color: '#1A1A1A',
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textDark,
        marginBottom: 6,
        marginTop: 12,
    },

    // ==================== COLOR PALETTE ====================
    colorPaletteRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 10,
    },
    colorPaletteBlock: {
        width: 55,
        height: 55,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },

    // ==================== WELCOME SCREEN ====================
    welcomeEventPreview: {
        marginVertical: 24,
        gap: 10,
    },
    welcomeEventCard: {
        padding: 14,
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    welcomeEventTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: COLORS.textDark,
    },
    welcomeEventDate: {
        fontSize: 13,
        color: COLORS.textMuted,
        fontWeight: '500',
    },
    welcomePrompt: {
        fontSize: 14,
        color: COLORS.textMuted,
        textAlign: 'center',
        marginBottom: 30,
        fontStyle: 'italic',
    },

    // ==================== LOGIN SCREEN ====================
    loginHeader: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    loginEmoji: {
        fontSize: 48,
        marginBottom: 16,
    },
    loginForm: {
        width: '100%',
    },
    loginDisabledButton: {
        opacity: 0.6,
    },
    loginSignupLink: {
        marginTop: 20,
        alignItems: 'center',
    },
    loginSignupText: {
        fontSize: 14,
        color: COLORS.textMuted,
    },
    loginSignupHighlight: {
        color: COLORS.textDark,
        fontWeight: '700',
    },

    // ==================== PROFILE SETUP ====================
    profileSectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.textDark,
        marginTop: 20,
        marginBottom: 10,
    },
    profileRow: {
        flexDirection: 'row',
        gap: 12,
    },
    profileRowItem: {
        flex: 1,
    },
    profileSmallInput: {
        backgroundColor: '#FFFFFF',
        padding: 14,
        borderRadius: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
        color: '#1A1A1A',
    },
    profileAvatarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 10,
    },
    profileAvatarOption: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    profileAvatarSelected: {
        borderColor: COLORS.textDark,
        backgroundColor: COLORS.pastelBlue,
    },
    profileAvatarEmoji: {
        fontSize: 24,
    },
    profileBMICard: {
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 10,
    },
    profileBMILabel: {
        fontSize: 14,
        color: COLORS.textMuted,
    },
    profileBMIValue: {
        fontSize: 32,
        fontWeight: '900',
        color: COLORS.textDark,
    },
    profileBMICategory: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textDark,
        marginTop: 4,
    },

    // ==================== DECORATIVE ====================
    decoCircle: {
        position: 'absolute',
        borderRadius: 999,
        opacity: 0.3,
    },
});
5. src/styles/dashboardStyles.ts
tsx
// src/styles/dashboardStyles.ts
import { StyleSheet } from 'react-native';
import { COLORS } from './globalStyles';

export const dashboardStyles = StyleSheet.create({
    // ==================== CONTAINER ====================
    dashboardContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
    },

    // ==================== HEADER ====================
    dashboardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    dashboardGreeting: {
        fontSize: 28,
        fontWeight: '900',
        color: COLORS.textDark,
        letterSpacing: -0.5,
    },
    dashboardSubGreeting: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginTop: 2,
    },
    dashboardAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.pastelBlue,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: COLORS.textDark,
    },
    dashboardAvatarText: {
        fontSize: 24,
    },

    // ==================== NUTRITION CARD ====================
    nutritionCard: {
        borderRadius: 24,
        padding: 20,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    nutritionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    nutritionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.textDark,
    },
    nutritionCalories: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textDark,
        opacity: 0.7,
    },
    nutritionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    nutritionItem: {
        alignItems: 'center',
    },
    nutritionValue: {
        fontSize: 18,
        fontWeight: '800',
        color: COLORS.textDark,
    },
    nutritionLabel: {
        fontSize: 12,
        color: COLORS.textMuted,
        marginTop: 2,
    },
    seeProgress: {
        alignItems: 'center',
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.06)',
    },
    seeProgressText: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.textDark,
    },
    seeProgressSub: {
        fontSize: 12,
        color: COLORS.textMuted,
    },

    // ==================== SECTION HEADERS ====================
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: COLORS.textDark,
    },
    sectionSub: {
        fontSize: 12,
        color: COLORS.textMuted,
    },
    sectionCount: {
        fontSize: 14,
        color: COLORS.textMuted,
    },

    // ==================== HABIT CARDS ====================
    habitCard: {
        padding: 16,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    habitInfo: {
        flex: 1,
    },
    habitTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.textDark,
    },
    habitDesc: {
        fontSize: 12,
        color: COLORS.textMuted,
        marginTop: 2,
    },
    habitRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    habitStreak: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textDark,
    },
    checkButton: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 12,
    },
    checkText: {
        fontSize: 12,
        fontWeight: '700',
        color: COLORS.textDark,
    },

    // ==================== EMPTY STATE ====================
    emptyContainer: {
        alignItems: 'center',
        paddingVertical: 30,
    },
    emptyEmoji: {
        fontSize: 48,
        marginBottom: 10,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.textDark,
    },
    emptySub: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginTop: 4,
    },

    // ==================== HEALTH CARDS ====================
    healthGrid: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 10,
    },
    healthCard: {
        flex: 1,
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    healthEmoji: {
        fontSize: 28,
        marginBottom: 8,
    },
    healthTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.textDark,
        marginBottom: 2,
    },
    healthSub: {
        fontSize: 11,
        color: COLORS.textMuted,
        marginBottom: 10,
    },
    healthCheck: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    healthCheckText: {
        fontSize: 11,
        fontWeight: '700',
        color: COLORS.textDark,
    },

    // ==================== QUICK STATS ====================
    quickStats: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: '800',
        color: COLORS.textDark,
    },
    statLabel: {
        fontSize: 11,
        color: COLORS.textMuted,
        marginTop: 2,
    },
    statDivider: {
        width: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },

    // ==================== RECOMMENDATION ====================
    recommendationCard: {
        padding: 20,
        borderRadius: 16,
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    recommendationTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.textDark,
        marginBottom: 6,
    },
    recommendationText: {
        fontSize: 14,
        color: COLORS.textDark,
        opacity: 0.8,
        lineHeight: 20,
    },

    // ==================== QUICK ADD ====================
    quickAddButton: {
        backgroundColor: COLORS.textDark,
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 20,
    },
    quickAddText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '700',
    },

    // ==================== SETUP SCREEN ====================
    setupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    setupEmoji: {
        fontSize: 60,
        marginBottom: 20,
    },
    setupTitle: {
        fontSize: 32,
        fontWeight: '900',
        color: COLORS.textDark,
        marginBottom: 10,
    },
    setupSubtitle: {
        fontSize: 16,
        color: COLORS.textMuted,
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 24,
    },
});
6. src/utils/storage.ts
tsx
// src/utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Habit {
  id: string;
  title: string;
  description: string;
  color: string;
  history: string[];
  createdAt: string;
  streak: number;
  reminderTime?: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  dailyCalories: number;
  protein: number;
  carbs: number;
  fats: number;
  sod: number;
  sleepQuality: number;
  b
