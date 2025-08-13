import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';

import { AuthContext } from '../_layout';
import {
  SafeAreaView,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  ButtonText,
  Box,
  FeatherInput,
  FeatherButton,
  FeatherIcon,
} from '@/src/components/ui';

export default function LoginScreen() {
  const { signIn } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToSignup = () => {
    router.navigate('./signup');
  };

  const goToForgotPassword = () => {
    router.navigate('./forgot-password');
  };

  return (
    <SafeAreaView flex={1} bg="$backgroundLight0">
      <Box flex={1} justifyContent="center" px="$6">
        <VStack space="xl" alignItems="center">
          {/* Logo/Branding */}
          <VStack space="md" alignItems="center" mb="$8">
            <Box p="$4" bg="$primary100" borderRadius="$full">
              <FeatherIcon name="bird" size="2xl" color="$primary600" />
            </Box>
            <Heading size="2xl" color="$primary700" textAlign="center">
              FeatherPause
            </Heading>
            <Text 
              size="md" 
              color="$textLight600" 
              textAlign="center"
              maxWidth="$80"
            >
              Bird Identification & Conservation
            </Text>
          </VStack>

          {/* Login Form */}
          <VStack space="lg" width="$full">
            <FeatherInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              type="email"
              leftIcon={<FeatherIcon name="email" size="sm" color="$textLight500" />}
              isRequired
            />

            <FeatherInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              type="password"
              leftIcon={<FeatherIcon name="lock" size="sm" color="$textLight500" />}
              isRequired
            />

            <FeatherButton
              variant="primary"
              size="lg"
              onPress={signIn}
              mt="$4"
            >
              Sign In
            </FeatherButton>
          </VStack>

          {/* Links */}
          <HStack space="lg" justifyContent="center" mt="$6">
            <Button variant="link" onPress={goToSignup}>
              <ButtonText color="$primary600" size="sm">
                Create Account
              </ButtonText>
            </Button>

            <Text color="$textLight400" size="sm">•</Text>

            <Button variant="link" onPress={goToForgotPassword}>
              <ButtonText color="$primary600" size="sm">
                Forgot Password?
              </ButtonText>
            </Button>
          </HStack>
        </VStack>
      </Box>
    </SafeAreaView>
  );
} 