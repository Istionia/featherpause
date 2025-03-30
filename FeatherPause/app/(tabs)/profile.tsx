import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { AuthContext } from '../_layout';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type MenuOption = {
  id: string;
  title: string;
  icon: string;
  screenPath?: string;
  action?: () => void;
};

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const { signOut } = useContext(AuthContext);
  
  const menuOptions: MenuOption[] = [
    { 
      id: 'account', 
      title: 'Account Settings', 
      icon: '👤',
    },
    { 
      id: 'subscription', 
      title: 'Subscription', 
      icon: '⭐️',
    },
    { 
      id: 'notifications', 
      title: 'Notifications', 
      icon: '🔔',
    },
    { 
      id: 'privacy', 
      title: 'Privacy & Data', 
      icon: '🔒',
    },
    { 
      id: 'about', 
      title: 'About FeatherPause', 
      icon: 'ℹ️',
    },
    { 
      id: 'logout', 
      title: 'Log Out', 
      icon: '🚪',
      action: signOut,
    },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
          Profile
        </Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileSection}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <Text style={[styles.profileName, { color: Colors[colorScheme ?? 'light'].text }]}>
            Jane Doe
          </Text>
          <Text style={[styles.profileEmail, { color: Colors[colorScheme ?? 'light'].text }]}>
            jane@example.com
          </Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: Colors[colorScheme ?? 'light'].tint }]}>
                42
              </Text>
              <Text style={[styles.statLabel, { color: Colors[colorScheme ?? 'light'].text }]}>
                Sightings
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: Colors[colorScheme ?? 'light'].tint }]}>
                28
              </Text>
              <Text style={[styles.statLabel, { color: Colors[colorScheme ?? 'light'].text }]}>
                Species
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: Colors[colorScheme ?? 'light'].tint }]}>
                5
              </Text>
              <Text style={[styles.statLabel, { color: Colors[colorScheme ?? 'light'].text }]}>
                Locations
              </Text>
            </View>
          </View>
        </View>
        
        <View style={styles.menuSection}>
          {menuOptions.map((option) => (
            <TouchableOpacity 
              key={option.id}
              style={[styles.menuOption, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}
              onPress={option.action}>
              <View style={styles.menuIconContainer}>
                <Text style={styles.menuIcon}>{option.icon}</Text>
              </View>
              <Text style={[styles.menuText, { color: Colors[colorScheme ?? 'light'].text }]}>
                {option.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.versionContainer}>
          <Text style={[styles.versionText, { color: Colors[colorScheme ?? 'light'].text }]}>
            FeatherPause v1.0.0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2F5D62',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    marginBottom: 20,
    opacity: 0.8,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
  },
  menuSection: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  menuIconContainer: {
    width: 30,
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    fontSize: 22,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
  versionContainer: {
    padding: 20,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 14,
    opacity: 0.6,
  },
}); 