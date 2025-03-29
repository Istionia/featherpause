import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Card } from '../common/Card';

describe('Card', () => {
  const onPressMock = jest.fn();

  beforeEach(() => {
    onPressMock.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(
      <Card>
        <Text>Test Content</Text>
      </Card>
    );

    expect(getByText('Test Content')).toBeTruthy();
  });

  it('renders as a View when onPress is not provided', () => {
    const { getByTestId } = render(
      <Card>
        <Text>Test Content</Text>
      </Card>
    );

    const card = getByTestId('card');
    expect(card.type).toBe('View');
  });

  it('renders as a TouchableOpacity when onPress is provided', () => {
    const { getByTestId } = render(
      <Card onPress={onPressMock}>
        <Text>Test Content</Text>
      </Card>
    );

    const card = getByTestId('card');
    expect(card.type).toBe('TouchableOpacity');
  });

  it('calls onPress when pressed', () => {
    const { getByTestId } = render(
      <Card onPress={onPressMock}>
        <Text>Test Content</Text>
      </Card>
    );

    fireEvent.press(getByTestId('card'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders with elevated variant', () => {
    const { getByTestId } = render(
      <Card variant="elevated">
        <Text>Test Content</Text>
      </Card>
    );

    const card = getByTestId('card');
    expect(card.props.style).toEqual(expect.arrayContaining([
      expect.objectContaining({
        shadowColor: expect.any(String),
        shadowOffset: expect.any(Object),
        shadowOpacity: expect.any(Number),
        shadowRadius: expect.any(Number),
        elevation: expect.any(Number),
      }),
    ]));
  });

  it('applies custom styles', () => {
    const { getByTestId } = render(
      <Card style={{ backgroundColor: 'red' }}>
        <Text>Test Content</Text>
      </Card>
    );

    const card = getByTestId('card');
    expect(card.props.style).toEqual(expect.arrayContaining([
      expect.objectContaining({ backgroundColor: 'red' }),
    ]));
  });
});