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