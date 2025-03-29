import React from 'react';
import { render } from '@testing-library/react-native';
import { MainNavigator } from '../MainNavigator';

describe('MainNavigator', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<MainNavigator />);
    // Should show the Identify screen by default
    expect(getByText('Identify Screen')).toBeTruthy();
  });
}); 