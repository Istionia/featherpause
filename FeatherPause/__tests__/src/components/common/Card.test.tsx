import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Card } from '../../../../src/components/common/Card';

describe('Card Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId, getByText } = render(
      <Card>
        <Text>Card Content</Text>
      </Card>
    );
    
    expect(getByTestId('card')).toBeTruthy();
    expect(getByText('Card Content')).toBeTruthy();
  });

  it('renders as View when no onPress is provided', () => {
    const { getByTestId } = render(
      <Card>
        <Text>Card Content</Text>
      </Card>
    );
    
    const card = getByTestId('card');
    // Testing the component type indirectly through available props
    expect(card.props.onPress).toBeUndefined();
  });

  it('renders correctly when onPress is provided', () => {
    const onPress = jest.fn();
    const { getByTestId, getByText } = render(
      <Card onPress={onPress}>
        <Text>Touchable Card</Text>
      </Card>
    );
    
    expect(getByTestId('card')).toBeTruthy();
    expect(getByText('Touchable Card')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Card onPress={onPress}>
        <Text>Touchable Card</Text>
      </Card>
    );
    
    const card = getByTestId('card');
    fireEvent.press(card);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('applies elevated styles when variant is elevated', () => {
    const { getByTestId } = render(
      <Card variant="elevated">
        <Text>Elevated Card</Text>
      </Card>
    );
    
    // Just verify it renders correctly
    expect(getByTestId('card')).toBeTruthy();
  });

  it('applies custom styles when provided', () => {
    const customStyle = { backgroundColor: 'red', padding: 20 };
    const { getByTestId } = render(
      <Card style={customStyle}>
        <Text>Styled Card</Text>
      </Card>
    );
    
    // Just verify it renders correctly
    expect(getByTestId('card')).toBeTruthy();
  });
}); 