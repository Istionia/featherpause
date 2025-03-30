import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Define the sighting type
type Sighting = {
  id: string;
  species: string;
  date: string;
  location: string;
};

// Mock data for the logbook
const mockSightings: Sighting[] = [
  { id: '1', species: 'American Robin', date: '2023-06-15', location: 'Central Park' },
  { id: '2', species: 'Northern Cardinal', date: '2023-06-12', location: 'Riverside Park' },
  { id: '3', species: 'Blue Jay', date: '2023-06-10', location: 'Prospect Park' },
  { id: '4', species: 'Red-tailed Hawk', date: '2023-06-05', location: 'Central Park' },
  { id: '5', species: 'European Starling', date: '2023-06-02', location: 'Battery Park' },
];

export default function LogbookScreen() {
  const colorScheme = useColorScheme();
  
  const renderSightingItem = ({ item }: { item: Sighting }) => (
    <TouchableOpacity 
      style={[styles.sightingCard, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
      <Text style={[styles.speciesName, { color: Colors[colorScheme ?? 'light'].text }]}>
        {item.species}
      </Text>
      <Text style={[styles.sightingDetails, { color: Colors[colorScheme ?? 'light'].text }]}>
        {item.date} • {item.location}
      </Text>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
          Logbook
        </Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={{ color: Colors[colorScheme ?? 'light'].tint }}>Filter</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={mockSightings}
        renderItem={renderSightingItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      
      <TouchableOpacity 
        style={[styles.addButton, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  filterButton: {
    padding: 8,
  },
  listContent: {
    padding: 16,
  },
  sightingCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  speciesName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  sightingDetails: {
    fontSize: 14,
    opacity: 0.8,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 30,
  },
}); 