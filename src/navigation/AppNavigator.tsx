import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddHabitScreen from '../screens/AddHabitScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StatsScreen from '../screens/StatsScreen';
import { COLORS } from '../styles/globalStyles';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: COLORS.textDark,
      tabBarInactiveTintColor: COLORS.textMuted,
      tabBarStyle: { backgroundColor: COLORS.white, borderTopWidth: 0, height: 60, paddingBottom: 8 }
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: '● Home' }} />
      <Tab.Screen name="Add" component={AddHabitScreen} options={{ tabBarLabel: '● Create' }} />
      <Tab.Screen name="Stats" component={StatsScreen} options={{ tabBarLabel: '● Stats' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: '● Profile' }} />
    </Tab.Navigator>
  );
}