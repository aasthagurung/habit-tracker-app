import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { globalStyles, COLORS } from '../styles/globalStyles';
import { storage } from '../utils/storage';

export default function SettingsScreen() {
  const clearAllData = () => {
    Alert.alert("Clear data?", "This removes all your habits forever.", [
      { text: "Cancel" },
      { text: "Reset Everything", onPress: async () => await storage.saveHabits([]) }
    ]);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Hearth Health & Settings</Text>
      <Text style={globalStyles.subtitle}>Manage your profile details</Text>

      <TouchableOpacity style={[globalStyles.button, { backgroundColor: COLORS.pastelPink }]} onPress={clearAllData}>
        <Text style={[globalStyles.buttonText, { color: COLORS.textDark }]}>Clear All Application Data</Text>
      </TouchableOpacity>
    </View>
  );
}