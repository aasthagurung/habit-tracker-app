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
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
    },
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

    // ➕ ADDED FOR INPUTS (Used in AddHabitScreen, Settings, etc.)
    inputField: {
        backgroundColor: '#FFFFFF', 
        padding: 18, 
        borderRadius: 20, 
        marginBottom: 14, 
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
        color: '#1A1A1A'
    },

    // ➕ ADDED FOR THE SELECTION BLOCKS IN THE MOCKUP IMAGE
    colorPaletteRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 10
    },
    colorPaletteBlock: { 
        width: 55, 
        height: 55, 
        borderRadius: 18, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 2,
    }
});