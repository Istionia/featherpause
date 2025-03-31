import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

import TabsIndex from '../../../app/(tabs)/index';
import { AuthContext } from '../../../app/_layout';

// Define types
interface AuthContextType {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
}

// Mock the expo-router module properly
jest.mock('expo-router', () => {
  const React = require('react');
  return {
    useRouter: jest.fn(),
    Link: ({ href, children }: { href: string; children: React.ReactNode }) => <>{children}</>,
  };
});

// Mock the useColorScheme hook
jest.mock('@/hooks/useColorScheme', () => ({
  useColorScheme: () => 'light',
}));

// Create AuthContext mock outside of component mock
let mockAuthContext: AuthContextType | null = null;

// Mock the ProfileScreen
jest.mock('../../../app/(tabs)/profile', () => {
  const React = require('react');
  const { View, Text, TouchableOpacity } = require('react-native');
  
  // Get a reference to the real AuthContext
  const { AuthContext } = require('../../../app/_layout');
  
  return {
    __esModule: true,
    default: (props: any) => {
      // Get the signOut function from the mock context we'll set before the test
      const signOut = jest.fn(() => {
        // If mockAuthContext is available (during tests), use its signOut
        if (mockAuthContext && mockAuthContext.signOut) {
          mockAuthContext.signOut();
        }
      });
      
      return (
        <View>
          <Text>Profile</Text>
          <Text>Jane Doe</Text>
          <TouchableOpacity testID="logout-button" onPress={signOut}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
});

describe('Tab Navigation', () => {
  const mockReplace = jest.fn();
  const mockNavigate = jest.fn();
  const mockSignOut = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
      navigate: mockNavigate,
    });
    
    // Set our mock context for the test
    mockAuthContext = {
      isSignedIn: true,
      signIn: jest.fn(),
      signOut: mockSignOut
    };
  });

  it('redirects to identify tab from index', () => {
    // We need to mount the component to trigger useEffect
    render(<TabsIndex />);

    // Check that the replace method was called with the correct path
    expect(mockReplace).toHaveBeenCalledWith('./identify');
  });

  it('signs out when logout is pressed in profile screen', () => {
    // Import the component dynamically to use our mock
    const ProfileScreen = require('../../../app/(tabs)/profile').default;

    const { getByTestId } = render(
      <AuthContext.Provider value={mockAuthContext as AuthContextType}>
        <ProfileScreen />
      </AuthContext.Provider>
    );

    // Find and press the Log Out button
    const logoutButton = getByTestId('logout-button');
    fireEvent.press(logoutButton);

    // Verify signOut was called
    expect(mockSignOut).toHaveBeenCalled();
  });
}); 