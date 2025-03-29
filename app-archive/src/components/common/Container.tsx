import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
} from 'react-native';
import { theme } from '../../theme';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  safeArea?: boolean;
  statusBarStyle?: StatusBarStyle;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  style,
  safeArea = true,
  statusBarStyle = 'dark-content',
}) => {
  const ContainerComponent = safeArea ? SafeAreaView : View;

  return (
    <>
      <StatusBar barStyle={statusBarStyle} />
      <ContainerComponent 
        testID="container"
        style={[styles.container, style]}
      >
        {children}
      </ContainerComponent>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    padding: theme.spacing.md,
  },
}); 