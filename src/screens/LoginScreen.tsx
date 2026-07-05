// src/screens/LoginScreen.tsx
import { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, globalStyles } from '../styles/globalStyles';
import { storage } from '../utils/storage';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Hold on!', 'Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    await storage.setLoginStatus(true);
    const profile = await storage.getUserProfile();
    setIsLoading(false);

    if (profile && profile.name !== 'User') {
      // ✅ FIX: Use replace to navigate
      navigation.replace('MainTabs');
    } else {
      navigation.replace('ProfileSetup');
    }
  };

  return (
    <SafeAreaView style={globalStyles.container} edges={['top']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}>
          <View style={globalStyles.loginHeader}>
            <Text style={globalStyles.loginEmoji}>👋</Text>
            <Text style={globalStyles.title}>Welcome Back!</Text>
            <Text style={globalStyles.subtitle}>Login to continue your habit journey</Text>
          </View>

          <View style={globalStyles.loginForm}>
            <Text style={globalStyles.inputLabel}>Email</Text>
            <TextInput
              style={globalStyles.inputField}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={globalStyles.inputLabel}>Password</Text>
            <TextInput
              style={globalStyles.inputField}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />

            <TouchableOpacity
              style={[globalStyles.button, isLoading && globalStyles.loginDisabledButton]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text style={globalStyles.buttonText}>
                {isLoading ? 'Logging in...' : 'Login →'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={globalStyles.loginSignupLink}
              onPress={() => navigation.navigate('Welcome')}
            >
              <Text style={globalStyles.loginSignupText}>
                Don't have an account?{' '}
                <Text style={globalStyles.loginSignupHighlight}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              globalStyles.decoCircle,
              {
                backgroundColor: COLORS.pastelPink,
                top: '10%',
                right: -40,
              },
            ]}
          />
          <View
            style={[
              globalStyles.decoCircle,
              {
                backgroundColor: COLORS.pastelYellow,
                bottom: '20%',
                left: -40,
              },
            ]}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}