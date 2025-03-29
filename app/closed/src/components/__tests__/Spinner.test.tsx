import React from 'react';
import { render } from '@testing-library/react-native';
import { Spinner } from '../common/Spinner';

describe('Spinner', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Spinner />
    );

    expect(getByTestId('spinner')).toBeTruthy();
  });

  it('renders different sizes correctly', () => {
    const { getAllByTestId } = render(
      <>
        <Spinner size="small" />
        <Spinner size="large" />
      </>
    );

    expect(getAllByTestId('spinner')).toHaveLength(2);
  });

  it('applies custom styles', () => {
    const { getByTestId } = render(
      <Spinner style={{ backgroundColor: 'red' }} />
    );

    const container = getByTestId('spinner-container');
    expect(container.props.style).toContainEqual({ backgroundColor: 'red' });
  });

  it('renders with custom color', () => {
    const { getByTestId } = render(
      <Spinner color="blue" />
    );

    const spinner = getByTestId('spinner');
    expect(spinner.props.color).toBe('blue');
  });
}); 