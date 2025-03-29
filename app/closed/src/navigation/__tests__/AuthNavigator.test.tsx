import React from 'react';
import { render } from '@testing-library/react-native';
import { AuthNavigator } from '../AuthNavigator';

describe('AuthNavigator', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<AuthNavigator />);
    // Should show the Login screen
    expect(getByText('Login Screen')).toBeTruthy();
  });
}); 