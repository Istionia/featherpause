import React from 'react';
import { render } from '@testing-library/react-native';
import { Badge } from '../common/Badge';

describe('Badge', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <Badge label="Test Badge" />
    );

    expect(getByText('Test Badge')).toBeTruthy();
  });

  it('renders different variants correctly', () => {
    const { getAllByText } = render(
      <>
        <Badge label="Success" variant="success" />
        <Badge label="Error" variant="error" />
        <Badge label="Warning" variant="warning" />
        <Badge label="Info" variant="info" />
      </>
    );

    expect(getAllByText(/Success|Error|Warning|Info/)).toHaveLength(4);
  });

  it('renders different sizes correctly', () => {
    const { getAllByText } = render(
      <>
        <Badge label="Small" size="sm" />
        <Badge label="Medium" size="md" />
      </>
    );

    expect(getAllByText(/Small|Medium/)).toHaveLength(2);
  });

  it('applies custom styles', () => {
    const { getByTestId, getByText } = render(
      <Badge
        label="Test Badge"
        style={{ backgroundColor: 'red' }}
        textStyle={{ color: 'blue' }}
      />
    );

    const badge = getByTestId('badge');
    expect(badge.props.style).toContainEqual({ backgroundColor: 'red' });
    expect(getByText('Test Badge').props.style).toContainEqual({ color: 'blue' });
  });

  it('renders with long text', () => {
    const { getByText } = render(
      <Badge label="This is a very long badge text that should wrap properly" />
    );

    expect(getByText('This is a very long badge text that should wrap properly')).toBeTruthy();
  });
}); 