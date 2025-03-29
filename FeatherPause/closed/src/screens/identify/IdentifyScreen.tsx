import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const IdentifyScreen = () => {
  return (
    <View style={styles.container} testID="identify-screen">
      <Text style={styles.text} testID="identify-screen-text">
        Identify Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
}); 