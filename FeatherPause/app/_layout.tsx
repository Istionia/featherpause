import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import React, { useContext } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthContext, AuthProvider } from '@/src/contexts/AuthContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const AppNavigator = () => {
    const { isSignedIn } = useContext(AuthContext);
    return (
      <Stack screenOptions={{ headerShown: false }}>
        {isSignedIn ? <Stack.Screen name="(tabs)" /> : <Stack.Screen name="(auth)" />}
        <Stack.Screen name="+not-found" />
      </Stack>
    );
  };

  return (
    <GluestackUIProvider config={config}>
      <AuthProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <AppNavigator />
          <StatusBar style="auto" />
        </ThemeProvider>
      </AuthProvider>
    </GluestackUIProvider>
  );
}
