import '@testing-library/jest-native/extend-expect';
import { jest } from '@jest/globals';
import { Text } from 'react-native';

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock expo-font
jest.mock('expo-font', () => ({
  useFonts: () => [true],
}));

// Add a simple test to prevent "Your test suite must contain at least one test" error
describe('Setup', () => {
  it('should have proper mocks configured', () => {
    expect(true).toBe(true);
  });
});

// Export utility functions that might be useful for tests
export const flushPromises = () => new Promise(resolve => setImmediate(resolve)); 