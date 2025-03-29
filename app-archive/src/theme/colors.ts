export const colors = {
  primary: {
    teal: '#2F5D62',
    terracotta: '#D36B00',
    lavender: '#E6E6FA',
  },
  text: {
    primary: '#2F5D62',
    secondary: '#666666',
    light: '#FFFFFF',
    error: '#FF3B30',
    success: '#34C759',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    dark: '#2F5D62',
  },
  border: {
    light: '#E5E5E5',
    medium: '#CCCCCC',
    dark: '#2F5D62',
  },
  status: {
    endangered: '#FF3B30',
    vulnerable: '#FF9500',
    leastConcern: '#34C759',
  },
} as const;

export type Colors = typeof colors; 