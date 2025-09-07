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

export default function SignupScreen() {
  const router = useRouter();
  const { signUp, loading, error, clearError } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState<string | undefined>(undefined);

  const goToLogin = () => {
    router.navigate('../login');
  };

  return (
    <SafeAreaView flex={1} bg="$backgroundLight0">
      <Box flex={1} justifyContent="center" px="$6">
        <VStack space="xl" alignItems="center">
          <Heading size="2xl" color="$primary700">Create Account</Heading>

          <VStack space="lg" width="$full">
            <FeatherInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              type="email"
              isRequired
            />
            <FeatherInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              type="password"
              isRequired
            />
            <FeatherInput
              label="Confirm Password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              type="password"
              isRequired
              isInvalid={!!localError}
              errorMessage={localError}
            />

            <FeatherButton
              variant="primary"
              size="lg"
              isLoading={loading}
              onPress={async () => {
                if (password !== confirmPassword) {
                  setLocalError('Passwords do not match');
                  return;
                }
                setLocalError(undefined);
                try {
                  await signUp(email, password);
                  router.replace('../login');
                } catch {}
              }}
              mt="$2"
            >
              Create Account
            </FeatherButton>
          </VStack>

          <Text color="$textLight600">Already have an account?</Text>
          <FeatherButton variant="ghost" onPress={goToLogin}>Sign In</FeatherButton>

          {(error || localError) && (
            <Box mt="$4" width="$full">
              <FeatherAlert
                variant="error"
                title="Signup failed"
                description={error ?? localError}
                action={{ text: 'Dismiss', onPress: () => { clearError(); setLocalError(undefined); } }}
              />
            </Box>
          )}
        </VStack>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});