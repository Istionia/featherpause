import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Badge,
  BadgeText,
} from '@gluestack-ui/themed';

interface FeatherCardProps {
  title: string;
  subtitle?: string;
  description: string;
  badge?: {
    text: string;
    variant: 'success' | 'warning' | 'error' | 'info';
  };
  children?: React.ReactNode;
}

const getBadgeColors = (variant: string) => {
  switch (variant) {
    case 'success':
      return { bg: '$success100', textColor: '$success700' };
    case 'warning':
      return { bg: '$warning100', textColor: '$warning700' };
    case 'error':
      return { bg: '$error100', textColor: '$error700' };
    case 'info':
    default:
      return { bg: '$info100', textColor: '$info700' };
  }
};

export const FeatherCard: React.FC<FeatherCardProps> = ({
  title,
  subtitle,
  description,
  badge,
  children,
}) => {
  const badgeColors = badge ? getBadgeColors(badge.variant) : null;

  return (
    <Box
      bg="$backgroundLight0"
      borderRadius="$xl"
      borderWidth={1}
      borderColor="$borderLight200"
      p="$5"
      shadowColor="$backgroundLight400"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={8}
      elevation={3}
    >
      <VStack space="md">
        {/* Header with title and badge */}
        <HStack justifyContent="space-between" alignItems="flex-start">
          <VStack flex={1} space="xs">
            <Heading size="lg" color="$primary700">
              {title}
            </Heading>
            {subtitle && (
              <Text size="sm" color="$textLight600">
                {subtitle}
              </Text>
            )}
          </VStack>
          {badge && badgeColors && (
            <Badge
              bg={badgeColors.bg}
              borderRadius="$full"
              px="$3"
              py="$1"
            >
              <BadgeText color={badgeColors.textColor} size="xs">
                {badge.text}
              </BadgeText>
            </Badge>
          )}
        </HStack>

        {/* Description */}
        <Text size="md" color="$textLight700" lineHeight="$lg">
          {description}
        </Text>

        {/* Additional content */}
        {children && (
          <Box mt="$2">
            {children}
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default FeatherCard;
