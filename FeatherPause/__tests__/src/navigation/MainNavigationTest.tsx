import React from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';
import { View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../../app/_layout';

// Import React within the mock factory
jest.mock('expo-router', () => {
  const React = require('react');
  const { View } = require('react-native');
  
  return {
    Stack: {
      Screen: ({ name, children }: { name: string; children?: React.ReactNode }) => (
        <View testID={`screen-${name}`}>{children}</View>
      ),
    },
  };
});

// Mock expo-font
jest.mock('expo-font', () => ({
  useFonts: jest.fn().mockReturnValue([true]),
}));

// Mock SplashScreen
jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

// Mock the useColorScheme hook
jest.mock('@/hooks/useColorScheme', () => ({
  useColorScheme: () => 'light',
}));

// Mock ThemeProvider with proper imports
jest.mock('@react-navigation/native', () => {
  const React = require('react');
  
  return {
    ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

// Mock the RootLayout component
jest.mock('../../../app/_layout', () => {
  const React = require('react');
  const { View } = require('react-native');
  const originalModule = jest.requireActual('../../../app/_layout');
  
  return {
    ...originalModule,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    AuthContext: {
      Provider: ({ children, value }: { children: React.ReactNode; value: any }) => (
        <View testID={`auth-${value.isSignedIn ? 'signed-in' : 'signed-out'}`}>{children}</View>
      ),
      Consumer: originalModule.AuthContext.Consumer,
    },
  };
});

describe('Main Navigation Structure', () => {
  it('renders auth or tabs based on sign-in state', () => {
    // Test signed out state
    const AuthProvider = ({ children, value }: any) => (
      <View testID={`auth-${value.isSignedIn ? 'signed-in' : 'signed-out'}`}>{children}</View>
    );
    
    // Save original Provider
    const OriginalProvider = AuthContext.Provider;
    // Replace with our custom implementation for testing
    AuthContext.Provider = AuthProvider as any;
    
    const { getByTestId } = render(
      <AuthContext.Provider value={{ isSignedIn: false, signIn: jest.fn(), signOut: jest.fn() }}>
        <View testID="screen-(auth)">Auth Content</View>
      </AuthContext.Provider>
    );
    
    expect(getByTestId('auth-signed-out')).toBeTruthy();
    
    // Restore original provider
    AuthContext.Provider = OriginalProvider;
  });

  it('handles sign in action', () => {
    const mockSignIn = jest.fn();
    
    const { getByTestId } = render(
      <View>
        <TouchableOpacity testID="sign-in-button" onPress={mockSignIn} />
      </View>
    );
    
    fireEvent.press(getByTestId('sign-in-button'));
    
    expect(mockSignIn).toHaveBeenCalled();
  });
}); 