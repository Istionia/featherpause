// Include this line to fix the 'ReferenceError: regeneratorRuntime is not defined' error
import 'react-native-reanimated';

// Complete mock for Animated to fix the "Animated.Value is not a constructor" error
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => {
  return {
    shouldUseNativeDriver: () => false,
  };
}, { virtual: true });

jest.mock('react-native/Libraries/Animated/Animated', () => {
  return {
    timing: jest.fn(() => ({
      start: jest.fn(cb => cb && cb()),
    })),
    spring: jest.fn(() => ({
      start: jest.fn(cb => cb && cb()),
    })),
    decay: jest.fn(() => ({
      start: jest.fn(cb => cb && cb()),
    })),
    View: 'View',
    Text: 'Text',
    Image: 'Image',
    createAnimatedComponent: jest.fn(component => component),
    Value: jest.fn(function(value) {
      this.value = value;
      this.setValue = jest.fn();
      this.interpolate = jest.fn(() => ({
        interpolate: jest.fn(),
      }));
      return this;
    }),
    ValueXY: jest.fn(function() {
      this.x = 0;
      this.y = 0;
      this.setValue = jest.fn();
      this.setOffset = jest.fn();
      return this;
    }),
    event: jest.fn(() => jest.fn()),
  };
}, { virtual: true });

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

// Add a simple test to prevent "Your test suite must contain at least one test" error
test('Setup file is properly loaded', () => {
  expect(true).toBe(true);
}); 