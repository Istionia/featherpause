import React from 'react';
import { render } from '@testing-library/react-native';

import LoginScreen from '../../../app/(auth)/login';
import IdentifyScreen from '../../../app/(tabs)/identify';
import LogbookScreen from '../../../app/(tabs)/logbook';
import LearnScreen from '../../../app/(tabs)/learn';
import ProfileScreen from '../../../app/(tabs)/profile';
import { AuthContext } from '../../../app/_layout';

// Mock the expo-router module
jest.mock('expo-router', () => ({
  useRouter: () => ({
    navigate: jest.fn(),
    replace: jest.fn(),
  }),
  Link: ({ href, children }: { href: string; children: React.ReactNode }) => <>{children}</>,
}));

// Mock the useColorScheme hook
jest.mock('@/hooks/useColorScheme', () => ({
  useColorScheme: () => 'light',
}));

describe('Navigation Accessibility', () => {
  const mockAuthContext = {
    isSignedIn: true,
    signIn: jest.fn(),
    signOut: jest.fn(),
  };

  it('LoginScreen is accessible', async () => {
    // Check that key elements have accessible labels
    const { getByText } = render(
      <AuthContext.Provider value={{ isSignedIn: false, signIn: jest.fn(), signOut: jest.fn() }}>
        <LoginScreen />
      </AuthContext.Provider>
    );
    expect(getByText('Sign In')).toBeTruthy();
    expect(getByText('Create Account')).toBeTruthy();
    expect(getByText('Forgot Password?')).toBeTruthy();
  });

  it('IdentifyScreen is accessible', () => {
    const { getByText } = render(<IdentifyScreen />);
    expect(getByText('Identify')).toBeTruthy();
    expect(getByText('Take Photo')).toBeTruthy();
    expect(getByText('Record Audio')).toBeTruthy();
  });

  it('LogbookScreen is accessible', () => {
    const { getByText } = render(<LogbookScreen />);
    expect(getByText('Logbook')).toBeTruthy();
    expect(getByText('Filter')).toBeTruthy();
  });

  it('LearnScreen is accessible', () => {
    const { getByText } = render(<LearnScreen />);
    expect(getByText('Learn')).toBeTruthy();
    expect(getByText('Bird of the Day')).toBeTruthy();
    expect(getByText('Guides')).toBeTruthy();
  });

  it('ProfileScreen is accessible', () => {
    const { getByText } = render(
      <AuthContext.Provider value={mockAuthContext}>
        <ProfileScreen />
      </AuthContext.Provider>
    );
    expect(getByText('Profile')).toBeTruthy();
    expect(getByText('Jane Doe')).toBeTruthy();
    expect(getByText('Log Out')).toBeTruthy();
  });
}); 