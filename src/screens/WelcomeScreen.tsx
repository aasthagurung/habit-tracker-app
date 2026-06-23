import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, globalStyles } from '../styles/globalStyles';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={[globalStyles.container, styles.center]}>
      <View style={[styles.circleDecoration, { backgroundColor: COLORS.pastelPink }]} />
      <Text style={styles.heroText}>Discover,{"\n"}Create, Enjoy</Text>
      <Text style={globalStyles.subtitle}>Work hard, play hard. Track your routines cleanly.</Text>
      
      <TouchableOpacity 
        style={[globalStyles.button, { width: '100%' }]} 
        onPress={() => navigation.navigate('MainTabs')}
      >
        <Text style={globalStyles.buttonText}>Get Started →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { justifyContent: 'center', alignItems: 'flex-start' },
  heroText: { fontSize: 40, fontWeight: '900', color: COLORS.textDark, lineHeight: 46, marginBottom: 12 },
  circleDecoration: { width: 120, height: 120, borderRadius: 60, position: 'absolute', top: '15%', right: -20, opacity: 0.6 }
});