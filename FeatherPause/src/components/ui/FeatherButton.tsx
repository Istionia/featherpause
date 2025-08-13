import React from 'react';
import {
  Button,
  ButtonText,
  ButtonSpinner,
  HStack,
} from '@gluestack-ui/themed';

interface FeatherButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
  children: React.ReactNode;
  [key: string]: any;
}

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'primary':
      return {
        bg: '$primary500',
        borderColor: '$primary500',
        _hover: { bg: '$primary600' },
        _pressed: { bg: '$primary700' },
        _text: { color: 'white' },
      };
    case 'secondary':
      return {
        bg: '$secondary500',
        borderColor: '$secondary500',
        _hover: { bg: '$secondary600' },
        _pressed: { bg: '$secondary700' },
        _text: { color: 'white' },
      };
    case 'outline':
      return {
        bg: 'transparent',
        borderColor: '$primary500',
        borderWidth: 1,
        _hover: { bg: '$primary50' },
        _pressed: { bg: '$primary100' },
        _text: { color: '$primary600' },
      };
    case 'ghost':
      return {
        bg: 'transparent',
        borderColor: 'transparent',
        _hover: { bg: '$primary50' },
        _pressed: { bg: '$primary100' },
        _text: { color: '$primary600' },
      };
    case 'danger':
      return {
        bg: '$error500',
        borderColor: '$error500',
        _hover: { bg: '$error600' },
        _pressed: { bg: '$error700' },
        _text: { color: 'white' },
      };
    default:
      return {
        bg: '$primary500',
        borderColor: '$primary500',
        _hover: { bg: '$primary600' },
        _pressed: { bg: '$primary700' },
        _text: { color: 'white' },
      };
  }
};

export const FeatherButton: React.FC<FeatherButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  onPress,
  children,
  ...props
}) => {
  const variantStyles = getVariantStyles(variant);

  return (
    <Button
      size={size}
      isDisabled={isDisabled || isLoading}
      onPress={onPress}
      borderRadius="$lg"
      shadowColor="$backgroundLight400"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.15}
      shadowRadius={4}
      elevation={3}
      {...variantStyles}
      {...props}
    >
      <HStack space="sm" alignItems="center">
        {isLoading && (
          <ButtonSpinner 
            color={variantStyles._text?.color || 'white'} 
            size="sm" 
          />
        )}
        {!isLoading && leftIcon && leftIcon}
        <ButtonText 
          color={variantStyles._text?.color || 'white'}
          fontWeight="$semibold"
        >
          {children}
        </ButtonText>
        {!isLoading && rightIcon && rightIcon}
      </HStack>
    </Button>
  );
};

export default FeatherButton;
