// src/styles/dashboardStyles.ts
import { StyleSheet } from 'react-native';
import { COLORS } from './globalStyles';

export const dashboardStyles = StyleSheet.create({
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.textDark,
    letterSpacing: -0.5,
  },
  subGreeting: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.pastelBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.textDark,
  },
  avatarText: {
    fontSize: 24,
  },

  // Nutrition Card Styles
  nutritionCard: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  nutritionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  nutritionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  nutritionCalories: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textDark,
    opacity: 0.7,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionValue: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  nutritionLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  seeProgress: {
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.06)',
  },
  seeProgressText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  seeProgressSub: {
    fontSize: 12,
    color: COLORS.textMuted,
  },

  // Section Headers
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  sectionSub: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  sectionCount: {
    fontSize: 14,
    color: COLORS.textMuted,
  },

  // Habit Card Styles
  habitCard: {
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  habitInfo: {
    flex: 1,
  },
  habitTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  habitDesc: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  habitRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  habitStreak: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textDark,
  },
  checkButton: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
  },
  checkText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textDark,
  },

  // Empty State
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  emptySub: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 4,
  },

  // Health Cards
  healthGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
  },
  healthCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  healthEmoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  healthTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 2,
  },
  healthSub: {
    fontSize: 11,
    color: COLORS.textMuted,
    marginBottom: 10,
  },
  healthCheck: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  healthCheckText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textDark,
  },

  // Quick Stats
  quickStats: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },

  // Recommendation
  recommendationCard: {
    padding: 20,
    borderRadius: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 6,
  },
  recommendationText: {
    fontSize: 14,
    color: COLORS.textDark,
    opacity: 0.8,
    lineHeight: 20,
  },

  // Quick Add Button
  quickAddButton: {
    backgroundColor: COLORS.textDark,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  quickAddText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },

  // Setup Screen
  setupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  setupEmoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  setupTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.textDark,
    marginBottom: 10,
  },
  setupSubtitle: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },

  // Profile Setup Screen Styles
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textDark,
    marginBottom: 6,
    marginTop: 12,
  },
  profileSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
    marginTop: 20,
    marginBottom: 10,
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 10,
  },
  avatarOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  avatarSelected: {
    borderColor: COLORS.textDark,
    backgroundColor: COLORS.pastelBlue,
  },
  avatarEmoji: {
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  rowItem: {
    flex: 1,
  },
  smallInput: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    color: '#1A1A1A',
  },
  bmiCard: {
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 10,
  },
  bmiLabel: {
    fontSize: 14,
    color: COLORS.textMuted,
  },
  bmiValue: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.textDark,
  },
  bmiCategory: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textDark,
    marginTop: 4,
  },
  sleepOptions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  sleepOption: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  sleepSelected: {
    backgroundColor: COLORS.pastelPurple,
    borderColor: COLORS.textDark,
  },
  sleepOptionText: {
    fontSize: 13,
    color: COLORS.textMuted,
  },
  sleepSelectedText: {
    color: COLORS.textDark,
    fontWeight: '700',
  },
});