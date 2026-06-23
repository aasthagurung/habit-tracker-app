import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, globalStyles } from '../styles/globalStyles';
import { storage } from '../utils/storage';

export default function StatsScreen() {
  const [total, setTotal] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      storage.getHabits().then(h => setTotal(h.length));
    }
  }, [isFocused]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Audience Flow</Text>
      <Text style={globalStyles.subtitle}>Your Consistency Breakdown</Text>

      <View style={[globalStyles.card, { backgroundColor: COLORS.pastelPurple }]}>
        <Text style={styles.hugeStat}>{total}</Text>
        <Text style={globalStyles.cardTitle}>Active Habits</Text>
        <Text style={styles.cardBody}>Keep building your clean daily routines!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hugeStat: { fontSize: 64, fontWeight: '900', color: COLORS.textDark },
  cardBody: { fontSize: 14, color: COLORS.textDark, textAlign: 'center', marginTop: 6 }
});