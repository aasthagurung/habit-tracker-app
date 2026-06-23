import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../styles/globalStyles';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textColumn}>
        <Text style={styles.titleText}>{title}</Text>
        {subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
      </View>
      
      {/* Profile Mock Avatar Icon */}
      <TouchableOpacity style={styles.avatarContainer}>
        <Text style={styles.avatarText}>👋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    marginBottom: 10,
  },
  textColumn: {
    flex: 1,
  },
  titleText: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.textDark,
    letterSpacing: -0.5,
  },
  subtitleText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  avatarContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: COLORS.pastelBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.textDark,
  },
  avatarText: {
    fontSize: 20,
  },
});