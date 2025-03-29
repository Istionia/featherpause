import React from 'react';
import { render } from '@testing-library/react-native';
import { RootNavigator } from '../RootNavigator';

describe('RootNavigator', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<RootNavigator />);
    // Since isAuthenticated is false, we should see the Login screen
    expect(getByText('Login Screen')).toBeTruthy();
  });
}); 