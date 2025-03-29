import React from 'react';
import { render } from '@testing-library/react-native';
import { Container } from '../common/Container';
import { Text } from 'react-native';

describe('Container', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Container>
        <Text>Test Content</Text>
      </Container>
    );

    expect(getByTestId('container')).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <Text>Test Content</Text>
      </Container>
    );

    expect(getByText('Test Content')).toBeTruthy();
  });

  it('applies custom styles', () => {
    const { getByTestId } = render(
      <Container style={{ backgroundColor: 'red' }}>
        <Text>Test Content</Text>
      </Container>
    );

    const container = getByTestId('container');
    expect(container.props.style).toEqual(expect.objectContaining({ backgroundColor: 'red' }));
  });

  it('renders with safeArea disabled', () => {
    const { getByTestId } = render(
      <Container safeArea={false}>
        <Text>Test Content</Text>
      </Container>
    );

    const container = getByTestId('container');
    expect(container.type).toBe('View');
  });

  it('renders with different statusBar styles', () => {
    const { getAllByTestId } = render(
      <>
        <Container statusBarStyle="light-content">
          <Text>Test Content</Text>
        </Container>
        <Container statusBarStyle="dark-content">
          <Text>Test Content</Text>
        </Container>
      </>
    );

    expect(getAllByTestId('container')).toHaveLength(2);
  });
}); 