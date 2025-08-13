import React from 'react';
import { Text, Box } from '@gluestack-ui/themed';

// Define available icons for the FeatherPause app
export const FEATHER_ICONS = {
  // Navigation
  camera: '📸',
  microphone: '🎤',
  book: '📖',
  learn: '🎓',
  profile: '👤',
  settings: '⚙️',
  
  // Birds and Nature
  bird: '🐦',
  feather: '🪶',
  tree: '🌳',
  leaf: '🍃',
  binoculars: '🔍',
  
  // Actions
  search: '🔍',
  filter: '🔽',
  sort: '📊',
  edit: '✏️',
  delete: '🗑️',
  save: '💾',
  share: '📤',
  location: '📍',
  
  // Status
  success: '✅',
  warning: '⚠️',
  error: '❌',
  info: 'ℹ️',
  loading: '⏳',
  
  // Conservation
  protected: '🛡️',
  endangered: '🚨',
  rare: '💎',
  common: '✨',
  
  // UI Elements
  chevronRight: '▶️',
  chevronLeft: '◀️',
  chevronUp: '🔼',
  chevronDown: '🔽',
  close: '✕',
  check: '✓',
  plus: '+',
  minus: '-',
  
  // Media
  play: '▶️',
  pause: '⏸️',
  stop: '⏹️',
  volume: '🔊',
  image: '🖼️',
  
  // Time and Date
  calendar: '📅',
  clock: '🕐',
  
  // Authentication
  eye: '👁️',
  eyeOff: '🙈',
  lock: '🔒',
  unlock: '🔓',
  user: '👤',
  email: '📧',
} as const;

export type FeatherIconName = keyof typeof FEATHER_ICONS;

interface FeatherIconProps {
  name: FeatherIconName;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: string;
  [key: string]: any;
}

const getIconSize = (size: string) => {
  switch (size) {
    case 'xs':
      return '$xs';
    case 'sm':
      return '$sm';
    case 'md':
      return '$md';
    case 'lg':
      return '$lg';
    case 'xl':
      return '$xl';
    case '2xl':
      return '$2xl';
    default:
      return '$md';
  }
};

export const FeatherIcon: React.FC<FeatherIconProps> = ({
  name,
  size = 'md',
  color = '$textLight700',
  ...props
}) => {
  const icon = FEATHER_ICONS[name];
  const iconSize = getIconSize(size);

  if (!icon) {
    console.warn(`FeatherIcon: Icon "${name}" not found`);
    return (
      <Text fontSize={iconSize} color={color} {...props}>
        ?
      </Text>
    );
  }

  return (
    <Text fontSize={iconSize} color={color} {...props}>
      {icon}
    </Text>
  );
};

// Icon button component
interface FeatherIconButtonProps {
  icon: FeatherIconName;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline' | 'solid';
  colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  onPress?: () => void;
  isDisabled?: boolean;
  [key: string]: any;
}

export const FeatherIconButton: React.FC<FeatherIconButtonProps> = ({
  icon,
  size = 'md',
  variant = 'ghost',
  colorScheme = 'primary',
  onPress,
  isDisabled = false,
  ...props
}) => {
  const getButtonStyles = () => {
    const colorMap = {
      primary: '$primary500',
      secondary: '$secondary500',
      success: '$success500',
      warning: '$warning500',
      error: '$error500',
    };

    const baseColor = colorMap[colorScheme];

    switch (variant) {
      case 'solid':
        return {
          bg: baseColor,
          borderColor: baseColor,
          iconColor: 'white',
        };
      case 'outline':
        return {
          bg: 'transparent',
          borderColor: baseColor,
          borderWidth: 1,
          iconColor: baseColor,
        };
      case 'ghost':
      default:
        return {
          bg: 'transparent',
          borderColor: 'transparent',
          iconColor: baseColor,
        };
    }
  };

  const styles = getButtonStyles();
  const buttonSize = size === 'xs' ? 32 : size === 'sm' ? 40 : size === 'md' ? 48 : 56;

  return (
    <Box
      width={buttonSize}
      height={buttonSize}
      borderRadius="$md"
      justifyContent="center"
      alignItems="center"
      onTouchEnd={!isDisabled ? onPress : undefined}
      opacity={isDisabled ? 0.5 : 1}
      {...styles}
      {...props}
    >
      <FeatherIcon
        name={icon}
        size={size}
        color={styles.iconColor}
      />
    </Box>
  );
};

export default FeatherIcon;
