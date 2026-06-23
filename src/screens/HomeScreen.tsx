import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, globalStyles } from '../styles/globalStyles';
import { Habit, storage } from '../utils/storage';

export default function HomeScreen() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      storage.getHabits().then(setHabits);
    }
  }, [isFocused]);

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

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.title}>Hello, Awesome!</Text>
      <Text style={globalStyles.subtitle}>Here are your routines for today</Text>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const today = new Date().toISOString().split('T')[0];
          const isDoneToday = item.history.includes(today);

          return (
            <View style={[globalStyles.card, { backgroundColor: item.color }, styles.habitRow]}>
              <View style={{ flex: 1 }}>
                <Text style={globalStyles.cardTitle}>{item.title}</Text>
                <Text style={[globalStyles.cardTitle, { fontSize: 14 }]}>🔥 {item.streak} day streak</Text>
              </View>
              <TouchableOpacity 
                style={[styles.checkBtn, { backgroundColor: isDoneToday ? COLORS.textDark : COLORS.white }]}
                onPress={() => toggleComplete(item.id)}
              >
                <Text style={{ color: isDoneToday ? COLORS.white : COLORS.textDark, fontWeight: '700' }}>
                  {isDoneToday ? '✓' : '+'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        ListEmptyComponent={<Text style={styles.empty}>No habits yet! Go add one below.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  habitRow: { flexDirection: 'row', alignItems: 'center' },
  checkBtn: { width: 44, height: 44, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  empty: { textAlign: 'center', marginTop: 40, color: COLORS.textMuted, fontSize: 16 }
});