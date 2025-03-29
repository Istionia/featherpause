import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { IconButton } from '../common/IconButton';

describe('IconButton', () => {
  const onPressMock = jest.fn();
  const TestIcon = () => <Text>Icon</Text>;

  beforeEach(() => {
    onPressMock.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(
      <IconButton
        icon={<TestIcon />}
        onPress={onPressMock}
      />
    );

    expect(getByText('Icon')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByTestId } = render(
      <IconButton
        icon={<TestIcon />}
        onPress={onPressMock}
      />
    );

    fireEvent.press(getByTestId('icon-button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders loading state correctly', () => {
    const { getByTestId } = render(
      <IconButton
        icon={<TestIcon />}
        onPress={onPressMock}
        loading
      />
    );

    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('disables button when disabled prop is true', () => {
    const { getByTestId } = render(
      <IconButton
        icon={<TestIcon />}
        onPress={onPressMock}
        disabled
      />
    );

    fireEvent.press(getByTestId('icon-button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders different variants correctly', () => {
    const { getAllByText } = render(
      <>
        <IconButton
          icon={<TestIcon />}
          onPress={onPressMock}
          variant="primary"
        />
        <IconButton
          icon={<TestIcon />}
          onPress={onPressMock}
          variant="secondary"
        />
        <IconButton
          icon={<TestIcon />}
          onPress={onPressMock}
          variant="outline"
        />
        <IconButton
          icon={<TestIcon />}
          onPress={onPressMock}
          variant="text"
        />
      </>
    );

    expect(getAllByText('Icon')).toHaveLength(4);
  });

  it('renders different sizes correctly', () => {
    const { getAllByText } = render(
      <>
        <IconButton
          icon={<TestIcon />}
          onPress={onPressMock}
          size="sm"
        />
        <IconButton
          icon={<TestIcon />}
          onPress={onPressMock}
          size="md"
        />
        <IconButton
          icon={<TestIcon />}
          onPress={onPressMock}
          size="lg"
        />
      </>
    );

    expect(getAllByText('Icon')).toHaveLength(3);
  });

  it('applies custom styles', () => {
    const { getByTestId } = render(
      <IconButton
        icon={<TestIcon />}
        onPress={onPressMock}
        style={{ backgroundColor: 'red' }}
      />
    );

    const button = getByTestId('icon-button');
    expect(button.props.style).toEqual(expect.objectContaining({ backgroundColor: 'red' }));
  });
}); 