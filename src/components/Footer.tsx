import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/globalStyles';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerEmoji}>🌱</Text>
      <Text style={styles.footerText}>
        "Small daily habits create massive lifelong changes."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: COLORS.pastelGreen,
    padding: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  footerEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  footerText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textDark,
    fontStyle: 'italic',
  },
});