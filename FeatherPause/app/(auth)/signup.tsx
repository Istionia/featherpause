import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function SignupScreen() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
        Create Account
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
        <TextInput
          style={[
            styles.input,
            { backgroundColor: Colors[colorScheme ?? 'light'].background },
            { color: Colors[colorScheme ?? 'light'].text },
          ]}
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
        />
        <TextInput
          style={[
            styles.input,
            { backgroundColor: Colors[colorScheme ?? 'light'].background },
            { color: Colors[colorScheme ?? 'light'].text },
          ]}
          placeholder="Confirm Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={{ color: Colors[colorScheme ?? 'light'].text }}>Already have an account? </Text>
        <Link href="/(auth)/login" asChild>
          <TouchableOpacity>
            <Text style={{ color: Colors[colorScheme ?? 'light'].tint }}>Sign In</Text>
          </TouchableOpacity>
        </Link>
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
}); 