import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ListItem } from '../common/ListItem';

describe('ListItem', () => {
  const onPressMock = jest.fn();

  beforeEach(() => {
    onPressMock.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(
      <ListItem
        title="Test Title"
      />
    );

    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders with subtitle', () => {
    const { getByText } = render(
      <ListItem
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );

    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('renders as a View when onPress is not provided', () => {
    const { getByTestId } = render(
      <ListItem
        title="Test Title"
      />
    );

    const item = getByTestId('list-item');
    expect(item.type).toBe('View');
  });

  it('renders as a TouchableOpacity when onPress is provided', () => {
    const { getByTestId } = render(
      <ListItem
        title="Test Title"
        onPress={onPressMock}
      />
    );

    const item = getByTestId('list-item');
    expect(item.type).toBe('TouchableOpacity');
  });

  it('calls onPress when pressed', () => {
    const { getByTestId } = render(
      <ListItem
        title="Test Title"
        onPress={onPressMock}
      />
    );

    fireEvent.press(getByTestId('list-item'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders with left image', () => {
    const { getByTestId } = render(
      <ListItem
        title="Test Title"
        leftImage={{ uri: 'test.jpg' }}
      />
    );

    const image = getByTestId('list-item-image');
    expect(image.props.source).toEqual({ uri: 'test.jpg' });
  });

  it('renders with right element', () => {
    const { getByText } = render(
      <ListItem
        title="Test Title"
        rightElement={<Text>Right Element</Text>}
      />
    );

    expect(getByText('Right Element')).toBeTruthy();
  });

  it('applies disabled state correctly', () => {
    const { getByTestId } = render(
      <ListItem
        title="Test Title"
        onPress={onPressMock}
        disabled
      />
    );

    const item = getByTestId('list-item');
    expect(item.type).toBe('TouchableOpacity');
    expect(item.props.disabled).toBe(true);
    expect(item.props.style).toEqual(expect.arrayContaining([
      expect.objectContaining({ opacity: 0.5 }),
    ]));
  });

  it('applies custom styles', () => {
    const { getByTestId, getByText } = render(
      <ListItem
        title="Test Title"
        style={{ backgroundColor: 'red' }}
        titleStyle={{ color: 'blue' }}
        subtitleStyle={{ color: 'green' }}
      />
    );

    const item = getByTestId('list-item');
    expect(item.props.style).toEqual(expect.arrayContaining([
      expect.objectContaining({ backgroundColor: 'red' }),
    ]));
    expect(getByText('Test Title').props.style).toEqual(expect.arrayContaining([
      expect.objectContaining({ color: 'blue' }),
    ]));
  });
}); 