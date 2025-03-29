import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import { theme } from '../../theme';

interface IconButtonProps {
  onPress: () => void;
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  icon,
  size = 'md',
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
}) => {
  const getSize = (): number => {
    switch (size) {
      case 'sm':
        return 32;
      case 'lg':
        return 48;
      default:
        return 40;
    }
  };

  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary.teal,
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.primary.terracotta,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.primary.teal,
        };
      case 'text':
        return {
          backgroundColor: 'transparent',
          padding: 0,
        };
      default:
        return {};
    }
  };

  const buttonStyle = [
    styles.button,
    {
      width: getSize(),
      height: getSize(),
    },
    getVariantStyles(),
    disabled && styles.disabled,
    style,
  ];

  return (
    <TouchableOpacity
      testID="icon-button"
      onPress={onPress}
      disabled={disabled || loading}
      style={buttonStyle}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          testID="activity-indicator"
          color={
            variant === 'outline' || variant === 'text'
              ? theme.colors.primary.teal
              : theme.colors.text.light
          }
        />
      ) : (
        icon
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
}); 