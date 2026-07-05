// src/screens/WelcomeScreen.tsx
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, globalStyles } from '../styles/globalStyles';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={globalStyles.welcomeContainer} edges={['top']}>
      <View style={[globalStyles.decoCircle, { backgroundColor: COLORS.pastelPink, top: -50, right: -30, width: 200, height: 200 }]} />
      <View style={[globalStyles.decoCircle, { backgroundColor: COLORS.pastelYellow, bottom: 100, left: -60, width: 180, height: 180 }]} />
      <View style={[globalStyles.decoCircle, { backgroundColor: COLORS.pastelBlue, top: 350, right: -40, width: 120, height: 120 }]} />

      <View>
        <Text style={globalStyles.welcomeHeroEmoji}>🌱</Text>
        <Text style={[globalStyles.title, globalStyles.welcomeHeroTitle]}>Activities{'\n'}just for your taste</Text>
        <Text style={globalStyles.subtitle}>Track your habits,{'\n'}build your future</Text>
      </View>

      <View style={globalStyles.welcomeEventPreview}>
        <View style={[globalStyles.welcomeEventCard, { backgroundColor: COLORS.pastelYellow }]}>
          <Text style={globalStyles.welcomeEventTitle}>Festival</Text>
          <Text style={globalStyles.welcomeEventDate}>30/05/24</Text>
        </View>
        <View style={[globalStyles.welcomeEventCard, { backgroundColor: COLORS.pastelPink }]}>
          <Text style={globalStyles.welcomeEventTitle}>Opera</Text>
          <Text style={globalStyles.welcomeEventDate}>23/04/24</Text>
        </View>
        <View style={[globalStyles.welcomeEventCard, { backgroundColor: COLORS.pastelPurple }]}>
          <Text style={globalStyles.welcomeEventTitle}>Charity event</Text>
          <Text style={globalStyles.welcomeEventDate}>10/05/24</Text>
        </View>
      </View>

      <Text style={globalStyles.welcomePrompt}>Have you picked your next event?</Text>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={globalStyles.buttonText}>Login →</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.buttonOutline} onPress={() => navigation.navigate('ProfileSetup')}>
        <Text style={globalStyles.buttonOutlineText}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}