import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../../theme';

interface ErrorDisplayProps {
  message: string;
  onRetry?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  message,
  onRetry,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.container, style]} testID="error-container">
      <Text style={[styles.message, textStyle]} testID="error-message">
        {message}
      </Text>
      {onRetry && (
        <TouchableOpacity
          onPress={onRetry}
          style={styles.retryButton}
          testID="error-retry-button"
        >
          <Text style={styles.retryText}>
            Try Again
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: 8,
    alignItems: 'center',
  },
  message: {
    color: theme.colors.text.error,
    fontSize: theme.typography.fontSize.md,
    fontFamily: theme.typography.fontFamily.regular,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  retryButton: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
  },
  retryText: {
    color: theme.colors.primary.teal,
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.medium,
  },
}); 