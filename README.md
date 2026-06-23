# 📍 Habit Tracker App

A vibrant, minimalist lifestyle planner and habit tracker built with **React Native** and **Expo (SDK 56)**. This app uses a playful pastel palette with thick organic typography and clean rounded container components designed specifically for young adults and students.

---

## 🎨 Design Aesthetic & UI
Inspired by modern grid-based lifestyle planners, the app implements:
* **Aesthetic Theme:** Soft pastel tones (`#FFEFA6`, `#FFD4DB`, `#E3D7FF`, `#CBE5FF`, `#D2F5E3`) against a warm cream background.
* **Typography:** Heavy bold header layout structures paired with clean secondary metadata.
* **Architecture:** Zero-redundancy style inheritance utilizing a single, centralized `globalStyles.ts` file for clean maintenance.

---

## 📁 Project Architecture
```text
habit_tracker_app/
├── src/
│   ├── components/      # Shared custom UI pieces (Header, Footer, widgets)
│   ├── navigation/      # React Navigation setup (Stack + Bottom Tab structure)
│   ├── screens/         # Main interactive application views
│   │   ├── WelcomeScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── AddHabitScreen.tsx
│   │   ├── StatsScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── styles/          # Single source of truth styling (globalStyles.ts)
│   └── utils/           # Local storage drivers (AsyncStorage persistence)
├── App.tsx              # Application core container element
└── package.json         # Dependency manifest