import React from 'react';
import {
  VStack,
  HStack,
  Spinner,
  Text,
  Box,
} from '@gluestack-ui/themed';

interface FeatherSpinnerProps {
  size?: 'small' | 'large';
  color?: string;
  text?: string;
  overlay?: boolean;
}

export const FeatherSpinner: React.FC<FeatherSpinnerProps> = ({
  size = 'large',
  color = '$primary500',
  text,
  overlay = false,
}) => {
  const content = (
    <VStack space="md" alignItems="center" justifyContent="center">
      <Spinner size={size} color={color} />
      {text && (
        <Text 
          size="md" 
          color="$textLight600" 
          textAlign="center"
          fontWeight="$medium"
        >
          {text}
        </Text>
      )}
    </VStack>
  );

  if (overlay) {
    return (
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="rgba(255, 255, 255, 0.9)"
        justifyContent="center"
        alignItems="center"
        zIndex={1000}
      >
        {content}
      </Box>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {content}
    </Box>
  );
};

// Loading skeleton component
interface FeatherSkeletonProps {
  height?: number;
  width?: number | string;
  borderRadius?: number;
  lines?: number;
}

export const FeatherSkeleton: React.FC<FeatherSkeletonProps> = ({
  height = 20,
  width = '100%',
  borderRadius = 4,
  lines = 1,
}) => {
  return (
    <VStack space="sm">
      {Array.from({ length: lines }).map((_, index) => (
        <Box
          key={index}
          height={height}
          width={width}
          backgroundColor="$backgroundLight200"
          borderRadius={borderRadius}
          // Add subtle animation if needed
        />
      ))}
    </VStack>
  );
};

export default FeatherSpinner;
