import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { theme } from '../../theme';

type BadgeVariant = 'success' | 'error' | 'warning' | 'info';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'info',
  size = 'md',
  style,
  textStyle,
}) => {
  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case 'success':
        return {
          backgroundColor: theme.colors.status.leastConcern,
        };
      case 'error':
        return {
          backgroundColor: theme.colors.status.endangered,
        };
      case 'warning':
        return {
          backgroundColor: theme.colors.status.vulnerable,
        };
      default:
        return {
          backgroundColor: theme.colors.primary.teal,
        };
    }
  };

  return (
    <View
      testID="badge"
      style={[
        styles.badge,
        size === 'sm' && styles.small,
        getVariantStyles(),
        style,
      ]}
    >
      <Text
        testID="badge-text"
        style={[
          styles.text,
          size === 'sm' && styles.smallText,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  small: {
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 2,
  },
  text: {
    color: theme.colors.text.light,
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.medium,
  },
  smallText: {
    fontSize: theme.typography.fontSize.xs,
  },
}); 