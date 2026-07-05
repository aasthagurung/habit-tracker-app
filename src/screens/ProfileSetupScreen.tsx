import { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, globalStyles } from '../styles/globalStyles';
import { storage, UserProfile } from '../utils/storage';

const AVATAR_OPTIONS = ['👤', '😊', '🌟', '🔥', '💪', '🧘', '🏃', '🎯', '🌈', '⭐'];

export default function ProfileSetupScreen({ navigation, route }: any) {
  const isEditing = route?.params?.isEditing || false;
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    avatar: '👤',
    dailyCalories: 0,
    protein: 0,
    fats: 0,
    carbs: 0,
    sod: 0,
    sleepQuality: 0,
    bmi: 0,
    weight: 0,
    height: 0,
    age: 0,
  });

  useEffect(() => {
    if (isEditing) {
      loadProfile();
    }
  }, [isEditing]);

  const loadProfile = async () => {
    const data = await storage.getUserProfile();
    setProfile(data);
  };

  const updateField = (field: keyof UserProfile, value: any) => {
    setProfile({ ...profile, [field]: value });
  };

  const calculateBMI = () => {
    if (profile.weight > 0 && profile.height > 0) {
      const heightInMeters = profile.height / 100;
      const bmi = profile.weight / (heightInMeters * heightInMeters);
      updateField('bmi', Math.round(bmi * 10) / 10);
    }
  };

  const handleSave = async () => {
    if (!profile.name.trim()) {
      Alert.alert('Hold on!', 'Please enter your name.');
      return;
    }

    if (profile.weight > 0 && profile.height > 0) {
      calculateBMI();
    }

    await storage.saveUserProfile(profile);

    if (isEditing) {
      Alert.alert('Success!', 'Profile updated successfully.');
      navigation.goBack();
    } else {
      Alert.alert('Welcome!', 'Your profile has been set up.');
      // ✅ FIX: Replace the current screen with MainTabs
      navigation.replace('MainTabs');
    }
  };

  return (
    <SafeAreaView style={globalStyles.container} edges={['top']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={globalStyles.title}>
            {isEditing ? 'Edit Profile' : 'Welcome! Setup Your Profile'}
          </Text>
          <Text style={globalStyles.subtitle}>
            {isEditing
              ? 'Update your personal information'
              : 'Tell us about yourself to personalize your experience'}
          </Text>

          {/* Avatar Selection */}
          <Text style={globalStyles.inputLabel}>Choose Your Avatar</Text>
          <View style={globalStyles.profileAvatarGrid}>
            {AVATAR_OPTIONS.map((emoji) => (
              <TouchableOpacity
                key={emoji}
                style={[
                  globalStyles.profileAvatarOption,
                  profile.avatar === emoji && globalStyles.profileAvatarSelected,
                ]}
                onPress={() => updateField('avatar', emoji)}
              >
                <Text style={globalStyles.profileAvatarEmoji}>{emoji}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Basic Info */}
          <Text style={globalStyles.inputLabel}>Your Name *</Text>
          <TextInput
            style={globalStyles.inputField}
            placeholder="Enter your name"
            value={profile.name}
            onChangeText={(text) => updateField('name', text)}
          />

          <Text style={globalStyles.inputLabel}>Age</Text>
          <TextInput
            style={globalStyles.inputField}
            placeholder="Your age"
            value={profile.age > 0 ? String(profile.age) : ''}
            onChangeText={(text) => updateField('age', parseInt(text) || 0)}
            keyboardType="numeric"
          />

          {/* Health Metrics */}
          <Text style={globalStyles.profileSectionTitle}>Health Metrics</Text>

          <View style={globalStyles.profileRow}>
            <View style={globalStyles.profileRowItem}>
              <Text style={globalStyles.inputLabel}>Weight (kg)</Text>
              <TextInput
                style={globalStyles.profileSmallInput}
                placeholder="70"
                value={profile.weight > 0 ? String(profile.weight) : ''}
                onChangeText={(text) => updateField('weight', parseFloat(text) || 0)}
                keyboardType="numeric"
              />
            </View>
            <View style={globalStyles.profileRowItem}>
              <Text style={globalStyles.inputLabel}>Height (cm)</Text>
              <TextInput
                style={globalStyles.profileSmallInput}
                placeholder="175"
                value={profile.height > 0 ? String(profile.height) : ''}
                onChangeText={(text) => updateField('height', parseFloat(text) || 0)}
                keyboardType="numeric"
              />
            </View>
          </View>

          {profile.bmi > 0 && (
            <View style={[globalStyles.profileBMICard, { backgroundColor: COLORS.pastelBlue }]}>
              <Text style={globalStyles.profileBMILabel}>Your BMI</Text>
              <Text style={globalStyles.profileBMIValue}>{profile.bmi}</Text>
              <Text style={globalStyles.profileBMICategory}>
                {profile.bmi < 18.5
                  ? 'Underweight'
                  : profile.bmi < 25
                  ? 'Normal'
                  : profile.bmi < 30
                  ? 'Overweight'
                  : 'Obese'}
              </Text>
            </View>
          )}

          {/* Nutrition */}
          <Text style={globalStyles.profileSectionTitle}>Nutrition Goals</Text>

          <Text style={globalStyles.inputLabel}>Daily Calories Goal</Text>
          <TextInput
            style={globalStyles.inputField}
            placeholder="2000"
            value={profile.dailyCalories > 0 ? String(profile.dailyCalories) : ''}
            onChangeText={(text) => updateField('dailyCalories', parseInt(text) || 0)}
            keyboardType="numeric"
          />

          <View style={globalStyles.profileRow}>
            <View style={globalStyles.profileRowItem}>
              <Text style={globalStyles.inputLabel}>Protein (g)</Text>
              <TextInput
                style={globalStyles.profileSmallInput}
                placeholder="150"
                value={profile.protein > 0 ? String(profile.protein) : ''}
                onChangeText={(text) => updateField('protein', parseFloat(text) || 0)}
                keyboardType="numeric"
              />
            </View>
            <View style={globalStyles.profileRowItem}>
              <Text style={globalStyles.inputLabel}>Fats (g)</Text>
              <TextInput
                style={globalStyles.profileSmallInput}
                placeholder="70"
                value={profile.fats > 0 ? String(profile.fats) : ''}
                onChangeText={(text) => updateField('fats', parseFloat(text) || 0)}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={globalStyles.profileRow}>
            <View style={globalStyles.profileRowItem}>
              <Text style={globalStyles.inputLabel}>Carbs (g)</Text>
              <TextInput
                style={globalStyles.profileSmallInput}
                placeholder="250"
                value={profile.carbs > 0 ? String(profile.carbs) : ''}
                onChangeText={(text) => updateField('carbs', parseFloat(text) || 0)}
                keyboardType="numeric"
              />
            </View>
            <View style={globalStyles.profileRowItem}>
              <Text style={globalStyles.inputLabel}>SOD (%)</Text>
              <TextInput
                style={globalStyles.profileSmallInput}
                placeholder="20"
                value={profile.sod > 0 ? String(profile.sod) : ''}
                onChangeText={(text) => updateField('sod', parseFloat(text) || 0)}
                keyboardType="numeric"
              />
            </View>
          </View>

          <Text style={globalStyles.inputLabel}>Sleep Quality (1-10)</Text>
          <TextInput
            style={globalStyles.inputField}
            placeholder="8"
            value={profile.sleepQuality > 0 ? String(profile.sleepQuality) : ''}
            onChangeText={(text) => updateField('sleepQuality', parseInt(text) || 0)}
            keyboardType="numeric"
          />

          <TouchableOpacity style={globalStyles.button} onPress={handleSave}>
            <Text style={globalStyles.buttonText}>
              {isEditing ? 'Update Profile →' : 'Get Started →'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}