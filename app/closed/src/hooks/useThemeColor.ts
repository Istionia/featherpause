import { useColorScheme } from 'react-native';
import { theme } from '../theme';

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ColorName = keyof typeof theme.colors;

export function useThemeColor(
  props: ThemeProps,
  colorName: ColorName,
): string {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[`${theme}Color`];

  if (colorFromProps) {
    return colorFromProps;
  }
  
  return theme === 'dark' ? 'white' : 'black';
} 