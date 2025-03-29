import { theme } from '../../../src/theme';

describe('Theme', () => {
  it('has required color definitions', () => {
    // Check primary brand colors
    expect(theme.colors.primary.teal).toBe('#2F5D62');
    expect(theme.colors.primary.terracotta).toBe('#D36B00');
    expect(theme.colors.primary.lavender).toBe('#E6E6FA');
    
    // Check that there are text colors defined
    expect(theme.colors.text).toBeDefined();
    expect(theme.colors.text.primary).toBeDefined();
    expect(theme.colors.text.secondary).toBeDefined();
    expect(theme.colors.text.light).toBeDefined();
    
    // Check background colors
    expect(theme.colors.background).toBeDefined();
    expect(theme.colors.background.primary).toBeDefined();
    
    // Check border colors
    expect(theme.colors.border).toBeDefined();
  });
  
  it('has required typography definitions', () => {
    // Check font families
    expect(theme.typography.fontFamily).toBeDefined();
    expect(theme.typography.fontFamily.regular).toBeDefined();
    expect(theme.typography.fontFamily.medium).toBeDefined();
    expect(theme.typography.fontFamily.bold).toBeDefined();
    
    // Check font sizes
    expect(theme.typography.fontSize).toBeDefined();
    expect(theme.typography.fontSize.xs).toBeDefined();
    expect(theme.typography.fontSize.sm).toBeDefined();
    expect(theme.typography.fontSize.md).toBeDefined();
    expect(theme.typography.fontSize.lg).toBeDefined();
    expect(theme.typography.fontSize.xl).toBeDefined();
  });
  
  it('has required spacing definitions', () => {
    expect(theme.spacing).toBeDefined();
    expect(theme.spacing.xs).toBeDefined();
    expect(theme.spacing.sm).toBeDefined();
    expect(theme.spacing.md).toBeDefined();
    expect(theme.spacing.lg).toBeDefined();
    expect(theme.spacing.xl).toBeDefined();
  });
  
  it('has conservation status colors', () => {
    expect(theme.colors.status).toBeDefined();
    expect(theme.colors.status.leastConcern).toBeDefined();
    expect(theme.colors.status.vulnerable).toBeDefined();
    expect(theme.colors.status.endangered).toBeDefined();
  });
}); 