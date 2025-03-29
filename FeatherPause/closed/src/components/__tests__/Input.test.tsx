import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Input } from '../common/Input';

describe('Input', () => {
  const onChangeTextMock = jest.fn();

  beforeEach(() => {
    onChangeTextMock.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByPlaceholderText } = render(
      <Input
        placeholder="Test Input"
        onChangeText={onChangeTextMock}
      />
    );

    expect(getByPlaceholderText('Test Input')).toBeTruthy();
  });

  it('renders with label', () => {
    const { getByText } = render(
      <Input
        label="Test Label"
        placeholder="Test Input"
        onChangeText={onChangeTextMock}
      />
    );

    expect(getByText('Test Label')).toBeTruthy();
  });

  it('renders with error message', () => {
    const { getByText } = render(
      <Input
        placeholder="Test Input"
        onChangeText={onChangeTextMock}
        error="Test Error"
      />
    );

    expect(getByText('Test Error')).toBeTruthy();
  });

  it('handles text input correctly', () => {
    const { getByPlaceholderText } = render(
      <Input
        placeholder="Test Input"
        onChangeText={onChangeTextMock}
      />
    );

    fireEvent.changeText(getByPlaceholderText('Test Input'), 'test text');
    expect(onChangeTextMock).toHaveBeenCalledWith('test text');
  });

  it('toggles password visibility', () => {
    const { getByPlaceholderText, getByText } = render(
      <Input
        placeholder="Test Input"
        onChangeText={onChangeTextMock}
        secureTextEntry
      />
    );

    const input = getByPlaceholderText('Test Input');
    const toggleButton = getByText('Show');

    fireEvent.press(toggleButton);
    expect(getByText('Hide')).toBeTruthy();
  });

  it('renders with custom styles', () => {
    const { getByPlaceholderText } = render(
      <Input
        placeholder="Test Input"
        onChangeText={onChangeTextMock}
        containerStyle={{ backgroundColor: 'red' }}
        inputStyle={{ color: 'blue' }}
      />
    );

    const input = getByPlaceholderText('Test Input');
    expect(input.props.style).toContainEqual({ color: 'blue' });
  });

  it('handles disabled state', () => {
    const { getByPlaceholderText } = render(
      <Input
        placeholder="Test Input"
        onChangeText={onChangeTextMock}
        editable={false}
      />
    );

    const input = getByPlaceholderText('Test Input');
    expect(input.props.editable).toBe(false);
  });
}); 