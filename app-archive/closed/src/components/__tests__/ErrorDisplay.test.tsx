import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ErrorDisplay } from '../common/ErrorDisplay';

describe('ErrorDisplay', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <ErrorDisplay message="Test error message" />
    );

    expect(getByText('Test error message')).toBeTruthy();
  });

  it('renders with retry button when onRetry is provided', () => {
    const onRetry = jest.fn();
    const { getByText } = render(
      <ErrorDisplay
        message="Test error message"
        onRetry={onRetry}
      />
    );

    const retryButton = getByText('Try Again');
    expect(retryButton).toBeTruthy();
    fireEvent.press(retryButton);
    expect(onRetry).toHaveBeenCalled();
  });

  it('applies custom styles', () => {
    const { getByTestId } = render(
      <ErrorDisplay
        message="Test error message"
        style={{ backgroundColor: 'red' }}
        textStyle={{ color: 'blue' }}
      />
    );

    const container = getByTestId('error-container');
    expect(container.props.style).toContainEqual({ backgroundColor: 'red' });
    expect(getByTestId('error-message').props.style).toContainEqual({ color: 'blue' });
  });
}); 