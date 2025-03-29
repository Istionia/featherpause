import { Platform } from 'react-native';

export const typography = {
  fontFamily: {
    regular: Platform.select({
      ios: 'SpaceGrotesk',
      android: 'SpaceGrotesk-Regular',
    }),
    medium: Platform.select({
      ios: 'SpaceGrotesk-Medium',
      android: 'SpaceGrotesk-Medium',
    }),
    bold: Platform.select({
      ios: 'SpaceGrotesk-Bold',
      android: 'SpaceGrotesk-Bold',
    }),
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
  },
} as const;

export type Typography = typeof typography; 