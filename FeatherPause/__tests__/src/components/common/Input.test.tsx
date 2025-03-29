import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from '../../../../src/components/common/Input';

describe('Input Component', () => {
  it('renders correctly with default props', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" />
    );
    
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('displays a label when provided', () => {
    const { getByText } = render(
      <Input label="Username" placeholder="Enter username" />
    );
    
    expect(getByText('Username')).toBeTruthy();
  });

  it('displays an error message when provided', () => {
    const { getByText } = render(
      <Input label="Password" placeholder="Enter password" error="Password is required" />
    );
    
    expect(getByText('Password is required')).toBeTruthy();
  });

  it('handles text input correctly', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" onChangeText={onChangeText} />
    );
    
    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'Hello World');
    
    expect(onChangeText).toHaveBeenCalledWith('Hello World');
  });

  it('toggles password visibility when Show/Hide is pressed', () => {
    const { getByText, getByPlaceholderText } = render(
      <Input placeholder="Enter password" secureTextEntry={true} />
    );
    
    const input = getByPlaceholderText('Enter password');
    expect(input.props.secureTextEntry).toBe(true);
    
    fireEvent.press(getByText('Show'));
    expect(input.props.secureTextEntry).toBe(false);
    
    fireEvent.press(getByText('Hide'));
    expect(input.props.secureTextEntry).toBe(true);
  });

  it('applies custom styles when provided', () => {
    const { getByPlaceholderText, getByText } = render(
      <Input 
        placeholder="Custom Input" 
        label="Custom Label"
        containerStyle={{ padding: 10 }}
        inputStyle={{ fontSize: 16 }}
        labelStyle={{ fontWeight: 'bold' }}
      />
    );
    
    const labelElement = getByText('Custom Label');
    const inputElement = getByPlaceholderText('Custom Input');
    
    expect(labelElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontWeight: 'bold'
        })
      ])
    );
    
    expect(inputElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: 16
        })
      ])
    );
  });
}); 