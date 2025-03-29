import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Button } from '../common/Button';

describe('Button', () => {
  const onPressMock = jest.fn();

  beforeEach(() => {
    onPressMock.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(
      <Button
        title="Test Button"
        onPress={onPressMock}
      />
    );

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(
      <Button
        title="Test Button"
        onPress={onPressMock}
      />
    );

    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders loading state correctly', () => {
    const { getByTestId } = render(
      <Button
        title="Test Button"
        onPress={onPressMock}
        loading
      />
    );

    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('disables button when disabled prop is true', () => {
    const { getByText } = render(
      <Button
        title="Test Button"
        onPress={onPressMock}
        disabled
      />
    );

    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders different variants correctly', () => {
    const { getByText } = render(
      <>
        <Button
          title="Primary"
          onPress={onPressMock}
          variant="primary"
        />
        <Button
          title="Secondary"
          onPress={onPressMock}
          variant="secondary"
        />
        <Button
          title="Outline"
          onPress={onPressMock}
          variant="outline"
        />
        <Button
          title="Text"
          onPress={onPressMock}
          variant="text"
        />
      </>
    );

    expect(getByText('Primary')).toBeTruthy();
    expect(getByText('Secondary')).toBeTruthy();
    expect(getByText('Outline')).toBeTruthy();
    expect(getByText('Text')).toBeTruthy();
  });

  it('renders different sizes correctly', () => {
    const { getByText } = render(
      <>
        <Button
          title="Small"
          onPress={onPressMock}
          size="sm"
        />
        <Button
          title="Medium"
          onPress={onPressMock}
          size="md"
        />
        <Button
          title="Large"
          onPress={onPressMock}
          size="lg"
        />
      </>
    );

    expect(getByText('Small')).toBeTruthy();
    expect(getByText('Medium')).toBeTruthy();
    expect(getByText('Large')).toBeTruthy();
  });
}); 