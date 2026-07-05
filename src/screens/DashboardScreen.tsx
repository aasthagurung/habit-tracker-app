// src/screens/DashboardScreen.tsx
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../styles/globalStyles';  // Only COLORS
import { dashboardStyles } from '../styles/dashboardStyles';  // All styles from here
import { Habit, storage, UserProfile } from '../utils/storage';

export default function DashboardScreen({ navigation }: any) {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [hasProfile, setHasProfile] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      loadData();
    }
  }, [isFocused]);

  const loadData = async () => {
    const h = await storage.getHabits();
    setHabits(h);

    const p = await storage.getUserProfile();
    if (p && p.name !== 'User') {
      setProfile(p);
      setHasProfile(true);
    } else {
      setHasProfile(false);
    }
  };

  const toggleComplete = async (id: string) => {
    const today = new Date().toISOString().split('T')[0];
    const updated = habits.map(h => {
      if (h.id === id) {
        const hasCompletedToday = h.history.includes(today);
        const nextHistory = hasCompletedToday
          ? h.history.filter(d => d !== today)
          : [...h.history, today];
        const nextStreak = hasCompletedToday ? Math.max(0, h.streak - 1) : h.streak + 1;
        return { ...h, history: nextHistory, streak: nextStreak };
      }
      return h;
    });
    setHabits(updated);
    await storage.saveHabits(updated);
  };

  const today = new Date().toISOString().split('T')[0];
  const totalHabits = habits.length;
  const completedToday = habits.filter(h => h.history.includes(today)).length;
  const totalStreak = habits.reduce((sum, h) => sum + h.streak, 0);
  const bestStreak = habits.reduce((max, h) => Math.max(max, h.streak), 0);
  const todayHabits = habits.filter(h => !h.history.includes(today));

  // If no profile - uses dashboardStyles
  if (!hasProfile) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background, padding: 20 }} edges={['top']}>
        <View style={dashboardStyles.setupContainer}>
          <Text style={dashboardStyles.setupEmoji}>👋</Text>
          <Text style={dashboardStyles.setupTitle}>Welcome!</Text>
          <Text style={dashboardStyles.setupSubtitle}>
            Please set up your profile first to personalize your experience.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.textDark,
              paddingVertical: 16,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
            onPress={() => navigation.navigate('ProfileSetup')}
          >
            <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '700' }}>
              Setup Profile →
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background, padding: 20 }} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={dashboardStyles.header}>
          <View>
            <Text style={dashboardStyles.greeting}>
              Hello, {profile?.name || 'User'}! 👋
            </Text>
            <Text style={dashboardStyles.subGreeting}>Let's make today productive</Text>
          </View>
          <TouchableOpacity 
            style={dashboardStyles.avatar}
            onPress={() => navigation.navigate('ProfileSetup', { isEditing: true })}
          >
            <Text style={dashboardStyles.avatarText}>{profile?.avatar || '👤'}</Text>
          </TouchableOpacity>
        </View>

        {/* Nutrition Stats */}
        {profile && profile.dailyCalories > 0 && (
          <View style={[dashboardStyles.nutritionCard, { backgroundColor: COLORS.pastelYellow }]}>
            <View style={dashboardStyles.nutritionHeader}>
              <Text style={dashboardStyles.nutritionTitle}>Daily Nutrition</Text>
              <Text style={dashboardStyles.nutritionCalories}>{profile.dailyCalories} cal</Text>
            </View>
            <View style={dashboardStyles.nutritionRow}>
              <View style={dashboardStyles.nutritionItem}>
                <Text style={dashboardStyles.nutritionValue}>{profile.protein}g</Text>
                <Text style={dashboardStyles.nutritionLabel}>Protein</Text>
              </View>
              <View style={dashboardStyles.nutritionItem}>
                <Text style={dashboardStyles.nutritionValue}>{profile.fats}g</Text>
                <Text style={dashboardStyles.nutritionLabel}>Fats</Text>
              </View>
              <View style={dashboardStyles.nutritionItem}>
                <Text style={dashboardStyles.nutritionValue}>{profile.carbs}g</Text>
                <Text style={dashboardStyles.nutritionLabel}>Carbs</Text>
              </View>
              <View style={dashboardStyles.nutritionItem}>
                <Text style={dashboardStyles.nutritionValue}>{profile.sod}%</Text>
                <Text style={dashboardStyles.nutritionLabel}>SOD</Text>
              </View>
            </View>
            <TouchableOpacity 
              style={dashboardStyles.seeProgress}
              onPress={() => navigation.navigate('Stats')}
            >
              <Text style={dashboardStyles.seeProgressText}>Today ▼</Text>
              <Text style={dashboardStyles.seeProgressSub}>See Progress</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Today's Habits */}
        <View style={dashboardStyles.sectionHeader}>
          <Text style={dashboardStyles.sectionTitle}>Today's Habits</Text>
          <Text style={dashboardStyles.sectionCount}>{todayHabits.length} remaining</Text>
        </View>

        {todayHabits.length > 0 ? (
          todayHabits.slice(0, 3).map((habit) => (
            <TouchableOpacity
              key={habit.id}
              style={[dashboardStyles.habitCard, { backgroundColor: habit.color }]}
              onPress={() => toggleComplete(habit.id)}
            >
              <View style={dashboardStyles.habitInfo}>
                <Text style={dashboardStyles.habitTitle}>{habit.title}</Text>
                {habit.description ? (
                  <Text style={dashboardStyles.habitDesc}>{habit.description}</Text>
                ) : null}
              </View>
              <View style={dashboardStyles.habitRight}>
                <Text style={dashboardStyles.habitStreak}>🔥 {habit.streak}</Text>
                <View style={dashboardStyles.checkButton}>
                  <Text style={dashboardStyles.checkText}>Check</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={dashboardStyles.emptyContainer}>
            <Text style={dashboardStyles.emptyEmoji}>🎉</Text>
            <Text style={dashboardStyles.emptyText}>All done for today!</Text>
            <Text style={dashboardStyles.emptySub}>Great job! Keep it up! 💪</Text>
          </View>
        )}

        {/* Health Cards */}
        <View style={dashboardStyles.sectionHeader}>
          <Text style={dashboardStyles.sectionTitle}>Health Health</Text>
          <Text style={dashboardStyles.sectionSub}>Enjoy Life to the Fullest.</Text>
        </View>

        <View style={dashboardStyles.healthGrid}>
          <TouchableOpacity 
            style={[dashboardStyles.healthCard, { backgroundColor: COLORS.pastelPink }]}
            onPress={() => Alert.alert('Sleep Quality', `Your sleep quality: ${profile?.sleepQuality || 0}/10`)}
          >
            <Text style={dashboardStyles.healthEmoji}>😴</Text>
            <Text style={dashboardStyles.healthTitle}>Sleep quality</Text>
            <Text style={dashboardStyles.healthSub}>{profile?.sleepQuality || 0}/10</Text>
            <View style={dashboardStyles.healthCheck}>
              <Text style={dashboardStyles.healthCheckText}>Check</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[dashboardStyles.healthCard, { backgroundColor: COLORS.pastelBlue }]}
            onPress={() => {
              const bmi = profile?.bmi || 0;
              const category = bmi < 18.5 ? 'Underweight' : 
                              bmi < 25 ? 'Normal' : 
                              bmi < 30 ? 'Overweight' : 'Obese';
              Alert.alert('BMI', `Your BMI: ${bmi} - ${category}`);
            }}
          >
            <Text style={dashboardStyles.healthEmoji}>⚖️</Text>
            <Text style={dashboardStyles.healthTitle}>BMI</Text>
            <Text style={dashboardStyles.healthSub}>
              {profile?.bmi && profile.bmi > 0 ? 
                `${profile.bmi} - ${profile.bmi < 18.5 ? 'Underweight' : 
                 profile.bmi < 25 ? 'Normal' : 
                 profile.bmi < 30 ? 'Overweight' : 'Obese'}` 
                : 'Not set'}
            </Text>
            <View style={dashboardStyles.healthCheck}>
              <Text style={dashboardStyles.healthCheckText}>Check</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        {habits.length > 0 && (
          <View style={dashboardStyles.quickStats}>
            <View style={dashboardStyles.statItem}>
              <Text style={dashboardStyles.statNumber}>{totalHabits}</Text>
              <Text style={dashboardStyles.statLabel}>Total Habits</Text>
            </View>
            <View style={dashboardStyles.statDivider} />
            <View style={dashboardStyles.statItem}>
              <Text style={dashboardStyles.statNumber}>{completedToday}</Text>
              <Text style={dashboardStyles.statLabel}>Done Today</Text>
            </View>
            <View style={dashboardStyles.statDivider} />
            <View style={dashboardStyles.statItem}>
              <Text style={dashboardStyles.statNumber}>{totalStreak}</Text>
              <Text style={dashboardStyles.statLabel}>Total Streak</Text>
            </View>
            <View style={dashboardStyles.statDivider} />
            <View style={dashboardStyles.statItem}>
              <Text style={dashboardStyles.statNumber}>{bestStreak}</Text>
              <Text style={dashboardStyles.statLabel}>Best Streak</Text>
            </View>
          </View>
        )}

        {/* Recommendation */}
        <View style={[dashboardStyles.recommendationCard, { backgroundColor: COLORS.pastelGreen }]}>
          <Text style={dashboardStyles.recommendationTitle}>Today Recommendation</Text>
          <Text style={dashboardStyles.recommendationText}>
            {getRecommendation(profile, habits, todayHabits.length)}
          </Text>
        </View>

        {/* Quick Add */}
        <TouchableOpacity
          style={dashboardStyles.quickAddButton}
          onPress={() => navigation.navigate('Add')}
        >
          <Text style={dashboardStyles.quickAddText}>+ Add New Habit</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function getRecommendation(profile: UserProfile | null, habits: Habit[], remainingCount: number): string {
  if (!profile) return 'Start tracking your habits today! 🌱';
  if (habits.length === 0) return 'Start by adding your first habit! 💪';
  if (remainingCount === 0) return 'You completed all your habits today! Amazing work! 🌟';
  if (profile.sleepQuality && profile.sleepQuality < 5) return 'Try to get 7-8 hours of sleep tonight for better recovery 😴';
  if (profile.bmi > 25) return 'Consider a 20-minute walk today to maintain a healthy weight 🚶';
  return `You have ${remainingCount} habits left today. Keep going! You got this! 💪`;
}