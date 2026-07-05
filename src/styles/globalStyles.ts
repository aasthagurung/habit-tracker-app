// src/styles/globalStyles.ts
import { StyleSheet } from 'react-native';

export const COLORS = {
    background: '#F9F6EE',
    textDark: '#1A1A1A',
    textMuted: '#666666',
    white: '#FFFFFF',
    pastelYellow: '#FFEFA6',
    pastelPink: '#FFD4DB',
    pastelPurple: '#E3D7FF',
    pastelBlue: '#CBE5FF',
    pastelGreen: '#D2F5E3',
};

export const globalStyles = StyleSheet.create({
    // Container
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
    },
    
    // Typography
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: COLORS.textDark,
        marginBottom: 8,
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textMuted,
        marginBottom: 20,
    },
    
    // Cards
    card: {
        borderRadius: 24,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.06)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.textDark,
        opacity: 0.8,
    },
    
    // Buttons
    button: {
        backgroundColor: COLORS.textDark,
        paddingVertical: 16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '700',
    },
    buttonOutline: {
        backgroundColor: 'transparent',
        paddingVertical: 14,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        borderWidth: 2,
        borderColor: COLORS.textDark,
    },
    buttonOutlineText: {
        color: COLORS.textDark,
        fontSize: 16,
        fontWeight: '700',
    },
    buttonDanger: {
        backgroundColor: '#FF6B6B',
        paddingVertical: 16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonDangerText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '700',
    },
    
    // Inputs
    inputField: {
        backgroundColor: '#FFFFFF',
        padding: 18,
        borderRadius: 20,
        marginBottom: 14,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
        color: '#1A1A1A',
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textDark,
        marginBottom: 6,
        marginTop: 12,
    },
    
    // Color Palette
    colorPaletteRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 10,
    },
    colorPaletteBlock: {
        width: 55,
        height: 55,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    
    // Welcome Screen
    welcomeContainer: {
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    welcomeHeroEmoji: {
        fontSize: 48,
        marginBottom: 10,
    },
    welcomeHeroTitle: {
        fontSize: 36,
        lineHeight: 42,
        letterSpacing: -1,
    },
    welcomeEventPreview: {
        marginVertical: 24,
        gap: 10,
    },
    welcomeEventCard: {
        padding: 14,
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    welcomeEventTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: COLORS.textDark,
    },
    welcomeEventDate: {
        fontSize: 13,
        color: COLORS.textMuted,
        fontWeight: '500',
    },
    welcomePrompt: {
        fontSize: 14,
        color: COLORS.textMuted,
        textAlign: 'center',
        marginBottom: 30,
        fontStyle: 'italic',
    },
    
    // Login Screen
    loginHeader: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    loginEmoji: {
        fontSize: 48,
        marginBottom: 16,
    },
    loginForm: {
        width: '100%',
    },
    loginDisabledButton: {
        opacity: 0.6,
    },
    loginSignupLink: {
        marginTop: 20,
        alignItems: 'center',
    },
    loginSignupText: {
        fontSize: 14,
        color: COLORS.textMuted,
    },
    loginSignupHighlight: {
        color: COLORS.textDark,
        fontWeight: '700',
    },
    
    // Profile Setup
    profileSectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.textDark,
        marginTop: 20,
        marginBottom: 10,
    },
    profileRow: {
        flexDirection: 'row',
        gap: 12,
    },
    profileRowItem: {
        flex: 1,
    },
    profileSmallInput: {
        backgroundColor: '#FFFFFF',
        padding: 14,
        borderRadius: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
        color: '#1A1A1A',
    },
    profileAvatarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 10,
    },
    profileAvatarOption: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    profileAvatarSelected: {
        borderColor: COLORS.textDark,
        backgroundColor: COLORS.pastelBlue,
    },
    profileAvatarEmoji: {
        fontSize: 24,
    },
    profileBMICard: {
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 10,
    },
    profileBMILabel: {
        fontSize: 14,
        color: COLORS.textMuted,
    },
    profileBMIValue: {
        fontSize: 32,
        fontWeight: '900',
        color: COLORS.textDark,
    },
    profileBMICategory: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textDark,
        marginTop: 4,
    },
    profileSleepOptions: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 4,
    },
    profileSleepOption: {
        flex: 1,
        padding: 10,
        borderRadius: 12,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    profileSleepSelected: {
        backgroundColor: COLORS.pastelPurple,
        borderColor: COLORS.textDark,
    },
    profileSleepOptionText: {
        fontSize: 13,
        color: COLORS.textMuted,
    },
    profileSleepSelectedText: {
        color: COLORS.textDark,
        fontWeight: '700',
    },
    
    // Decorative Circles
    decoCircle: {
        position: 'absolute',
        borderRadius: 999,
        opacity: 0.3,
    },
});