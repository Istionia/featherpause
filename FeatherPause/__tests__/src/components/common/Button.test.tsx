import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../../../../src/components/common/Button';

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Button title="Test Button" onPress={mockOnPress} />
    );
    
    const buttonText = getByTestId('button-text');
    expect(buttonText.props.children).toBe('Test Button');
  });

  it('calls onPress when button is pressed', () => {
    const { getByTestId } = render(
      <Button title="Test Button" onPress={mockOnPress} />
    );
    
    const button = getByTestId('button');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders activity indicator when loading is true', () => {
    const { getByTestId, queryByTestId } = render(
      <Button title="Test Button" onPress={mockOnPress} loading={true} />
    );
    
    expect(getByTestId('activity-indicator')).toBeTruthy();
    expect(queryByTestId('button-text')).toBeNull();
  });

  it('displays different variant styles', () => {
    const { rerender, getByTestId } = render(
      <Button title="Primary" onPress={mockOnPress} variant="primary" />
    );
    
    // Just verify the button renders with different variants
    expect(getByTestId('button')).toBeTruthy();
    
    rerender(<Button title="Secondary" onPress={mockOnPress} variant="secondary" />);
    expect(getByTestId('button')).toBeTruthy();
    
    rerender(<Button title="Outline" onPress={mockOnPress} variant="outline" />);
    expect(getByTestId('button')).toBeTruthy();
    
    rerender(<Button title="Text" onPress={mockOnPress} variant="text" />);
    expect(getByTestId('button')).toBeTruthy();
  });

  it('is disabled when disabled prop is true', () => {
    const { getByTestId } = render(
      <Button title="Disabled Button" onPress={mockOnPress} disabled={true} />
    );
    
    const button = getByTestId('button');
    expect(button.props.accessibilityState.disabled).toBe(true);
    
    fireEvent.press(button);
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('applies different sizes correctly', () => {
    const { rerender, getByTestId } = render(
      <Button title="Small Button" onPress={mockOnPress} size="sm" />
    );
    
    // Just verify the button renders with different sizes
    expect(getByTestId('button')).toBeTruthy();
    expect(getByTestId('button-text')).toBeTruthy();
    
    rerender(<Button title="Large Button" onPress={mockOnPress} size="lg" />);
    expect(getByTestId('button')).toBeTruthy();
    expect(getByTestId('button-text')).toBeTruthy();
  });
}); 