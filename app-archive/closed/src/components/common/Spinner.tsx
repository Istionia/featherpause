import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { theme } from '../../theme';

interface SpinnerProps {
  size?: 'small' | 'large';
  color?: string;
  style?: ViewStyle;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'large',
  color = theme.colors.primary.teal,
  style,
}) => {
  return (
    <View 
      testID="spinner-container"
      style={[styles.container, style]}
    >
      <ActivityIndicator
        testID="spinner"
        size={size}
        color={color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 