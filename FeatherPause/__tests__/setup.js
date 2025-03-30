// Include this line to fix the 'ReferenceError: regeneratorRuntime is not defined' error
import 'react-native-reanimated';

// Mock Animated module instead of specific helper
jest.mock('react-native/Libraries/Animated/Animated', () => ({
  timing: () => ({
    start: jest.fn(),
  }),
  View: 'View',
  Text: 'Text',
}));

// Mock the expo-status-bar
jest.mock('expo-status-bar', () => ({
  StatusBar: () => 'StatusBar',
}));

// Add global mocks for navigation
jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
      goBack: jest.fn(),
      setOptions: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
    useIsFocused: () => true,
  };
});

// Add test utility functions here
global.flushPromises = () => new Promise(resolve => setImmediate(resolve)); 