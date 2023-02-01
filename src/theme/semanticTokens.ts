import colors from './colors'

const semanticTokens = {
    colors: {
        'chakra-body-bg': {
            _light: '#FBFBFB'
        },
        'chakra-body-text': {
            _light: 'gray.600'
        },
        primary: {
            _light: colors.primary[40],
            _dark: colors.primary[80],
        },
        onPrimary: {
            _light: colors.primary[100],
            _dark: colors.primary[20],
        },
        primaryContainer: {
            _light: colors.primary[90],
            _dark: colors.primary[30],
        },
        onPrimaryContainer: {
            _light: colors.primary[10],
            _dark: colors.primary[90],
        },

        secondary: {
            _light: colors.secondary[40],
            _dark: colors.secondary[80],
        },
        onSecondary: {
            _light: colors.secondary[100],
            _dark: colors.secondary[20],
        },
        secondaryContainer: {
            _light: colors.secondary[90],
            _dark: colors.secondary[30],
        },
        onSecondaryContainer: {
            _light: colors.secondary[10],
            _dark: colors.secondary[90],
        },

        error: {
            _light: colors.error[40],
            _dark: colors.error[80],
        },
        onError: {
            _light: colors.error[100],
            _dark: colors.error[20],
        },
        errorContainer: {
            _light: colors.error[90],
            _dark: colors.error[30],
        },
        onErrorContainer: {
            _light: colors.error[10],
            _dark: colors.error[90],
        },

        background: {
            _light: colors.neutral[99],
            _dark: colors.neutral[10],
        },
        onBackground: {
            _light: colors.neutral[10],
            _dark: colors.neutral[90],
        },

        surface: {
            _light: colors.neutral[99],
            _dark: colors.neutral[10],
        },
        onSurface: {
            _light: colors.neutral[10],
            _dark: colors.neutral[90],
        },

        surfaceVariant: {
            _light: colors.neutralVariant[90],
            _dark: colors.neutralVariant[30],
        },
        onSurfaceVariant: {
            _light: colors.neutralVariant[30],
            _dark: colors.neutralVariant[80],
        },

        outline: {
            _light: colors.neutralVariant[50],
            _dark: colors.neutralVariant[60],
        },
        outlineVariant: {
            _light: colors.neutralVariant[80],
            _dark: colors.neutralVariant[30],
        },
    }
}

export default semanticTokens