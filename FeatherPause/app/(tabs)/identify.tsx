import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function IdentifyScreen() {
  const colorScheme = useColorScheme();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
          Identify
        </Text>
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.description, { color: Colors[colorScheme ?? 'light'].text }]}>
          Use the camera or microphone to identify birds.
        </Text>
        
        <View style={styles.options}>
          <TouchableOpacity 
            style={[styles.optionButton, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.optionButton, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
            <Text style={styles.buttonText}>Record Audio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  options: {
    width: '100%',
    gap: 20,
  },
  optionButton: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
}); 