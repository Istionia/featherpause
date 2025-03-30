import { Link } from 'expo-router';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { AuthContext } from '../_layout';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
        FeatherPause
      </Text>
      <Text style={[styles.subtitle, { color: Colors[colorScheme ?? 'light'].text }]}>
        Bird Identification & Conservation
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
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}
        onPress={signIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.links}>
        <Link href="/(auth)/signup">
          <TouchableOpacity>
            <Text style={[styles.link, { color: Colors[colorScheme ?? 'light'].tint }]}>
              Create Account
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(auth)/forgot-password">
          <TouchableOpacity>
            <Text style={[styles.link, { color: Colors[colorScheme ?? 'light'].tint }]}>
              Forgot Password?
            </Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
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
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    fontSize: 14,
  },
}); 