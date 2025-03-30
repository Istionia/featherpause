import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function ForgotPasswordScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const goToLogin = () => {
    router.navigate('../login');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
        Reset Password
      </Text>
      <Text style={[styles.subtitle, { color: Colors[colorScheme ?? 'light'].text }]}>
        Enter your email address, and we'll send you a link to reset your password.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            { backgroundColor: Colors[colorScheme ?? 'light'].background },
            { color: Colors[colorScheme ?? 'light'].text },
          ]}
          placeholder="Email"
          placeholderTextColor="#A0A0A0"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={{ color: Colors[colorScheme ?? 'light'].tint }}>Back to Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
  },
}); 