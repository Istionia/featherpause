import React from 'react';
import { render } from '@testing-library/react-native';
import { Text, SafeAreaView, View } from 'react-native';
import { Container } from '../../../../src/components/common/Container';

describe('Container Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <Text>Container Content</Text>
      </Container>
    );
    
    expect(getByText('Container Content')).toBeTruthy();
  });

  it('uses SafeAreaView when safeArea is true', () => {
    const { UNSAFE_getByType } = render(
      <Container safeArea={true}>
        <Text>Safe Area Content</Text>
      </Container>
    );
    
    expect(UNSAFE_getByType(SafeAreaView)).toBeTruthy();
  });

  it('uses View when safeArea is false', () => {
    const { UNSAFE_queryByType, UNSAFE_getByType } = render(
      <Container safeArea={false}>
        <Text>Regular View Content</Text>
      </Container>
    );
    
    expect(UNSAFE_queryByType(SafeAreaView)).toBeNull();
    expect(UNSAFE_getByType(View)).toBeTruthy();
  });

  it('applies default styles correctly', () => {
    const { getByTestId } = render(
      <Container>
        <Text>Content</Text>
      </Container>
    );
    
    const container = getByTestId('container');
    expect(container.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          flex: 1,
          backgroundColor: expect.any(String),
          padding: expect.any(Number)
        })
      ])
    );
  });

  it('applies custom styles when provided', () => {
    const customStyle = { backgroundColor: 'blue', margin: 20 };
    const { getByTestId } = render(
      <Container style={customStyle}>
        <Text>Custom Styled Content</Text>
      </Container>
    );
    
    const container = getByTestId('container');
    expect(container.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining(customStyle)
      ])
    );
  });

  it('renders with StatusBar', () => {
    const { UNSAFE_getByProps } = render(
      <Container statusBarStyle="light-content">
        <Text>Content with Light Status Bar</Text>
      </Container>
    );
    
    const statusBar = UNSAFE_getByProps({ barStyle: 'light-content' });
    expect(statusBar).toBeTruthy();
  });
}); 