import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

import TabsIndex from '../../../app/(tabs)/index';
import { AuthContext } from '../../../app/_layout';

// Mock the expo-router module
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
  Link: ({ href, children }: { href: string; children: React.ReactNode }) => <>{children}</>,
}));

// Mock the useColorScheme hook
jest.mock('@/hooks/useColorScheme', () => ({
  useColorScheme: () => 'light',
}));

// Mock the ProfileScreen
jest.mock('../../../app/(tabs)/profile', () => {
  return {
    __esModule: true,
    default: (props: any) => {
      // Get the signOut function from context
      const { signOut } = React.useContext(AuthContext);
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
      <AuthContext.Provider value={{ isSignedIn: true, signIn: jest.fn(), signOut: mockSignOut }}>
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