import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
// Import from the conservation package
import { someUtilFunction } from 'conservation';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to FeatherPause!</Text>
        <Text>{someUtilFunction()}</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
} 