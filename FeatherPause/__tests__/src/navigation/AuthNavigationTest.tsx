import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { useRouter } from 'expo-router';

import LoginScreen from '../../../app/(auth)/login';
import SignupScreen from '../../../app/(auth)/signup';
import ForgotPasswordScreen from '../../../app/(auth)/forgot-password';
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

describe('Auth Navigation', () => {
  const mockNavigate = jest.fn();
  const mockSignIn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
      replace: jest.fn(),
    });
  });

  it('navigates to signup screen from login screen', () => {
    render(
      <AuthContext.Provider value={{ isSignedIn: false, signIn: mockSignIn, signOut: jest.fn() }}>
        <LoginScreen />
      </AuthContext.Provider>
    );

    const createAccountButton = screen.getByText('Create Account');
    fireEvent.press(createAccountButton);

    expect(mockNavigate).toHaveBeenCalledWith('../signup');
  });

  it('navigates to forgot password screen from login screen', () => {
    render(
      <AuthContext.Provider value={{ isSignedIn: false, signIn: mockSignIn, signOut: jest.fn() }}>
        <LoginScreen />
      </AuthContext.Provider>
    );

    const forgotPasswordButton = screen.getByText('Forgot Password?');
    fireEvent.press(forgotPasswordButton);

    expect(mockNavigate).toHaveBeenCalledWith('../forgot-password');
  });

  it('navigates to login screen from signup screen', () => {
    render(
      <AuthContext.Provider value={{ isSignedIn: false, signIn: mockSignIn, signOut: jest.fn() }}>
        <SignupScreen />
      </AuthContext.Provider>
    );

    const signInButton = screen.getByText('Sign In');
    fireEvent.press(signInButton);

    expect(mockNavigate).toHaveBeenCalledWith('../login');
  });

  it('navigates to login screen from forgot password screen', () => {
    render(
      <AuthContext.Provider value={{ isSignedIn: false, signIn: mockSignIn, signOut: jest.fn() }}>
        <ForgotPasswordScreen />
      </AuthContext.Provider>
    );

    const signInButton = screen.getByText('Back to Sign In');
    fireEvent.press(signInButton);

    expect(mockNavigate).toHaveBeenCalledWith('../login');
  });

  it('calls signIn function when login button is pressed', () => {
    render(
      <AuthContext.Provider value={{ isSignedIn: false, signIn: mockSignIn, signOut: jest.fn() }}>
        <LoginScreen />
      </AuthContext.Provider>
    );

    const signInButton = screen.getByText('Sign In');
    fireEvent.press(signInButton);

    expect(mockSignIn).toHaveBeenCalled();
  });
}); 