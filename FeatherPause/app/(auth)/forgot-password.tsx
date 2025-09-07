import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { AuthContext } from '@/src/contexts/AuthContext';
import {
  SafeAreaView,
  VStack,
  Heading,
  Text,
  Box,
  FeatherInput,
  FeatherButton,
  FeatherAlert,
} from '@/src/components/ui';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const { resetPassword, loading, error, clearError } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const goToLogin = () => {
    router.navigate('../login');
  };

  return (
    <SafeAreaView flex={1} bg="$backgroundLight0">
      <Box flex={1} justifyContent="center" px="$6">
        <VStack space="xl" alignItems="center">
          <Heading size="2xl" color="$primary700">Reset Password</Heading>
          <Text color="$textLight600" textAlign="center">
            Enter your email address, and we'll send you a link to reset your password.
          </Text>

          <VStack space="lg" width="$full">
            <FeatherInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              type="email"
              isRequired
            />
            <FeatherButton
              variant="primary"
              size="lg"
              isLoading={loading}
              onPress={async () => {
                try {
                  await resetPassword(email);
                  router.replace('../login');
                } catch {}
              }}
            >
              Send Reset Link
            </FeatherButton>
          </VStack>

          <FeatherButton variant="ghost" onPress={goToLogin}>Back to Sign In</FeatherButton>

          {error && (
            <Box mt="$4" width="$full">
              <FeatherAlert
                variant="error"
                title="Reset failed"
                description={error}
                action={{ text: 'Dismiss', onPress: clearError }}
              />
            </Box>
          )}
        </VStack>
      </Box>
    </SafeAreaView>
  );
}

const styles = {} as const;