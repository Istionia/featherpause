import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { theme } from '../../theme';

interface ListItemProps {
  title: string;
  subtitle?: string;
  leftImage?: ImageSourcePropType;
  rightElement?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  disabled?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  leftImage,
  rightElement,
  onPress,
  style,
  titleStyle,
  subtitleStyle,
  disabled = false,
}) => {
  const content = (
    <>
      {leftImage && (
        <Image
          testID="list-item-image"
          source={leftImage}
          style={styles.image}
        />
      )}
      <View style={styles.content}>
        <Text
          testID="list-item-title"
          style={[
            styles.title,
            titleStyle,
            disabled && styles.disabledText,
          ]}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            testID="list-item-subtitle"
            style={[
              styles.subtitle,
              subtitleStyle,
              disabled && styles.disabledText,
            ]}
          >
            {subtitle}
          </Text>
        )}
      </View>
      {rightElement && (
        <View style={styles.rightElement}>
          {rightElement}
        </View>
      )}
    </>
  );

  const containerStyle = [
    styles.container,
    style,
    disabled && styles.disabled,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        testID="list-item"
        style={containerStyle}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return (
    <View
      testID="list-item"
      style={containerStyle}
    >
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.light,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: theme.spacing.md,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.primary,
    fontFamily: theme.typography.fontFamily.medium,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xs,
    fontFamily: theme.typography.fontFamily.regular,
  },
  rightElement: {
    marginLeft: theme.spacing.md,
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: theme.colors.text.secondary,
  },
}); 