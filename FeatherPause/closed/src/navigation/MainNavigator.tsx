import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IdentifyScreen } from '../screens/identify/IdentifyScreen';
import { LogbookScreen } from '../screens/logbook/LogbookScreen';
import { LearnScreen } from '../screens/learn/LearnScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { MainTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Identify" 
        component={IdentifyScreen}
        options={{
          title: 'Identify',
        }}
      />
      <Tab.Screen 
        name="Logbook" 
        component={LogbookScreen}
        options={{
          title: 'Logbook',
        }}
      />
      <Tab.Screen 
        name="Learn" 
        component={LearnScreen}
        options={{
          title: 'Learn',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}; 