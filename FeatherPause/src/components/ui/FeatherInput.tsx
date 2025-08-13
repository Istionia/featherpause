import React, { useState } from 'react';
import {
  VStack,
  HStack,
  Input,
  InputField,
  Text,
  Button,
  ButtonText,
  Box,
} from '@gluestack-ui/themed';

interface FeatherInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  isRequired?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  [key: string]: any;
}

export const FeatherInput: React.FC<FeatherInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  type = 'text',
  isRequired = false,
  isInvalid = false,
  errorMessage,
  helperText,
  leftIcon,
  rightIcon,
  isDisabled = false,
  size = 'md',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  const getBorderColor = () => {
    if (isInvalid) return '$error400';
    if (isFocused) return '$primary400';
    return '$borderLight300';
  };

  const getBackgroundColor = () => {
    if (isDisabled) return '$backgroundLight100';
    return '$backgroundLight0';
  };

  return (
    <VStack space="xs" width="$full">
      {/* Label */}
      {label && (
        <HStack space="xs" alignItems="center">
          <Text 
            size="sm" 
            fontWeight="$medium" 
            color="$textLight700"
          >
            {label}
          </Text>
          {isRequired && (
            <Text size="sm" color="$error500">
              *
            </Text>
          )}
        </HStack>
      )}

      {/* Input Container */}
      <Box position="relative">
        <Input
          size={size}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          borderColor={getBorderColor()}
          backgroundColor={getBackgroundColor()}
          borderRadius="$lg"
          _focus={{
            borderColor: '$primary400',
            backgroundColor: '$backgroundLight0',
          }}
          _invalid={{
            borderColor: '$error400',
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        >
          <HStack alignItems="center" flex={1}>
            {leftIcon && (
              <Box ml="$3" mr="$2">
                {leftIcon}
              </Box>
            )}
            
            <InputField
              flex={1}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={isPassword && !showPassword}
              keyboardType={
                type === 'email' 
                  ? 'email-address' 
                  : type === 'number' 
                    ? 'numeric' 
                    : 'default'
              }
              autoCapitalize={type === 'email' ? 'none' : 'sentences'}
              autoCorrect={type !== 'email' && type !== 'password'}
              color="$textLight900"
              placeholderTextColor="$textLight400"
              fontSize="$md"
            />

            {/* Password Toggle */}
            {isPassword && (
              <Box mr="$3" ml="$2">
                <Button
                  variant="ghost"
                  size="xs"
                  onPress={() => setShowPassword(!showPassword)}
                  p="$1"
                >
                  <ButtonText 
                    size="xs" 
                    color="$textLight600"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </ButtonText>
                </Button>
              </Box>
            )}

            {/* Right Icon */}
            {rightIcon && !isPassword && (
              <Box mr="$3" ml="$2">
                {rightIcon}
              </Box>
            )}
          </HStack>
        </Input>
      </Box>

      {/* Helper Text or Error Message */}
      {(errorMessage || helperText) && (
        <Text 
          size="xs" 
          color={isInvalid ? '$error500' : '$textLight500'}
          ml="$1"
        >
          {isInvalid && errorMessage ? errorMessage : helperText}
        </Text>
      )}
    </VStack>
  );
};

export default FeatherInput;
