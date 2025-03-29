import React from 'react';
import { render } from '@testing-library/react-native';
import { Badge } from '../../../../src/components/common/Badge';

describe('Badge Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Badge label="New" />);
    
    const badgeText = getByTestId('badge-text');
    expect(badgeText.props.children).toBe('New');
  });

  it('renders with correct variant styles', () => {
    const { rerender, getByTestId } = render(<Badge label="Success" variant="success" />);
    
    let badge = getByTestId('badge');
    expect(badge.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: expect.any(String)
        })
      ])
    );

    rerender(<Badge label="Error" variant="error" />);
    badge = getByTestId('badge');
    expect(badge.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: expect.any(String)
        })
      ])
    );

    rerender(<Badge label="Warning" variant="warning" />);
    badge = getByTestId('badge');
    expect(badge.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: expect.any(String)
        })
      ])
    );

    rerender(<Badge label="Info" variant="info" />);
    badge = getByTestId('badge');
    expect(badge.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: expect.any(String)
        })
      ])
    );
  });

  it('renders with different sizes', () => {
    const { rerender, getByTestId } = render(<Badge label="Medium" size="md" />);
    
    let badge = getByTestId('badge');
    let badgeText = getByTestId('badge-text');
    
    // Default medium size shouldn't have the small style
    expect(badge.props.style).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          paddingHorizontal: expect.any(Number),
          paddingVertical: 2
        })
      ])
    );
    
    rerender(<Badge label="Small" size="sm" />);
    badge = getByTestId('badge');
    badgeText = getByTestId('badge-text');
    
    // Small size should have specific styles
    expect(badge.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          paddingHorizontal: expect.any(Number),
          paddingVertical: 2
        })
      ])
    );
    
    expect(badgeText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: expect.any(Number)
        })
      ])
    );
  });

  it('applies custom styles when provided', () => {
    const customStyle = { marginTop: 10, backgroundColor: 'purple' };
    const customTextStyle = { fontWeight: 'bold' as const };
    
    const { getByTestId } = render(
      <Badge 
        label="Custom" 
        style={customStyle}
        textStyle={customTextStyle}
      />
    );
    
    const badge = getByTestId('badge');
    const badgeText = getByTestId('badge-text');
    
    expect(badge.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining(customStyle)
      ])
    );
    
    expect(badgeText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining(customTextStyle)
      ])
    );
  });
}); 