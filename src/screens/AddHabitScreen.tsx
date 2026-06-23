import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, globalStyles } from '../styles/globalStyles';
import { storage } from '../utils/storage';

const COLOR_OPTIONS = [COLORS.pastelYellow, COLORS.pastelPink, COLORS.pastelPurple, COLORS.pastelBlue, COLORS.pastelGreen];

export default function AddHabitScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert("Hold on!", "Please give your habit a name.");
      return;
    }
    const current = await storage.getHabits();
    const newHabit = {
      id: Date.now().toString(),
      title,
      description: desc,
      color: selectedColor,
      history: [],
      streak: 0,
    };
    await storage.saveHabits([...current, newHabit]);
    setTitle('');
    setDesc('');
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={globalStyles.container} edges={['top']}>
      <Text style={globalStyles.title}>Activities{"\n"}just for your taste</Text>
      <Text style={globalStyles.subtitle}>Create custom pastel widgets</Text>
      
      <TextInput 
        style={globalStyles.inputField} 
        placeholder="What's your goal? (e.g., Run, Meditate)" 
        placeholderTextColor="#999"
        value={title} 
        onChangeText={setTitle}
      />
      
      <TextInput 
        style={globalStyles.inputField} 
        placeholder="Notes or description..." 
        placeholderTextColor="#999"
        value={desc} 
        onChangeText={setDesc}
      />

      <Text style={[globalStyles.cardTitle, { fontSize: 16, marginTop: 15 }]}>Select Theme Palette:</Text>
      
      <View style={globalStyles.colorPaletteRow}>
        {COLOR_OPTIONS.map((color) => (
          <TouchableOpacity 
            key={color} 
            style={[
              globalStyles.colorPaletteBlock, 
              { backgroundColor: color, borderColor: selectedColor === color ? COLORS.textDark : 'transparent' }
            ]} 
            onPress={() => setSelectedColor(color)}
          >
            {selectedColor === color && <Text style={{ fontWeight: '900', color: COLORS.textDark }}>✓</Text>}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={globalStyles.button} onPress={handleSave}>
        <Text style={globalStyles.buttonText}>Save Activity →</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}