import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertText,
  VStack,
  HStack,
  Text,
  Button,
  ButtonText,
  Box,
} from '@gluestack-ui/themed';

interface FeatherAlertProps {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  description?: string;
  action?: {
    text: string;
    onPress: () => void;
  };
  onClose?: () => void;
  isClosable?: boolean;
}

const getAlertStyles = (variant: string) => {
  switch (variant) {
    case 'success':
      return {
        bg: '$success50',
        borderColor: '$success200',
        iconColor: '$success600',
        textColor: '$success800',
        icon: '✅',
      };
    case 'warning':
      return {
        bg: '$warning50',
        borderColor: '$warning200',
        iconColor: '$warning600',
        textColor: '$warning800',
        icon: '⚠️',
      };
    case 'error':
      return {
        bg: '$error50',
        borderColor: '$error200',
        iconColor: '$error600',
        textColor: '$error800',
        icon: '❌',
      };
    case 'info':
    default:
      return {
        bg: '$info50',
        borderColor: '$info200',
        iconColor: '$info600',
        textColor: '$info800',
        icon: 'ℹ️',
      };
  }
};

export const FeatherAlert: React.FC<FeatherAlertProps> = ({
  variant = 'info',
  title,
  description,
  action,
  onClose,
  isClosable = false,
}) => {
  const styles = getAlertStyles(variant);

  return (
    <Alert
      backgroundColor={styles.bg}
      borderColor={styles.borderColor}
      borderWidth={1}
      borderRadius="$lg"
      p="$4"
    >
      <HStack space="md" alignItems="flex-start" flex={1}>
        {/* Icon */}
        <Text fontSize="$lg">
          {styles.icon}
        </Text>

        {/* Content */}
        <VStack flex={1} space="xs">
          {title && (
            <Text
              fontWeight="$semibold"
              color={styles.textColor}
              size="md"
            >
              {title}
            </Text>
          )}
          {description && (
            <Text
              color={styles.textColor}
              size="sm"
              lineHeight="$sm"
            >
              {description}
            </Text>
          )}

          {/* Action Button */}
          {action && (
            <Box mt="$2">
              <Button
                size="sm"
                variant="outline"
                borderColor={styles.iconColor}
                onPress={action.onPress}
              >
                <ButtonText color={styles.iconColor} size="sm">
                  {action.text}
                </ButtonText>
              </Button>
            </Box>
          )}
        </VStack>

        {/* Close Button */}
        {isClosable && onClose && (
          <Button
            size="xs"
            variant="ghost"
            onPress={onClose}
            p="$1"
          >
            <ButtonText color={styles.textColor} size="sm">
              ✕
            </ButtonText>
          </Button>
        )}
      </HStack>
    </Alert>
  );
};

// Error boundary component using Gluestack
interface FeatherErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class FeatherErrorBoundary extends React.Component<
  FeatherErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: FeatherErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('FeatherErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box flex={1} justifyContent="center" alignItems="center" p="$5">
          <FeatherAlert
            variant="error"
            title="Something went wrong"
            description="An unexpected error occurred. Please try refreshing the app."
            action={{
              text: 'Reload',
              onPress: () => {
                this.setState({ hasError: false, error: undefined });
              },
            }}
          />
        </Box>
      );
    }

    return this.props.children;
  }
}

export default FeatherAlert;
