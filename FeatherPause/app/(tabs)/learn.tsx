import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Define the guide type
type Guide = {
  id: string;
  title: string;
  description: string;
  imagePlaceholder: string;
};

// Mock data for guides
const mockGuides: Guide[] = [
  {
    id: '1',
    title: 'Birds of Prey',
    description: 'Learn about hawks, eagles, and other raptors',
    imagePlaceholder: '🦅',
  },
  {
    id: '2',
    title: 'Backyard Birds',
    description: 'Common species that visit your feeders',
    imagePlaceholder: '🐦',
  },
  {
    id: '3',
    title: 'Waterfowl Guide',
    description: 'Identify ducks, geese, and swans',
    imagePlaceholder: '🦆',
  },
  {
    id: '4',
    title: 'Birding Basics',
    description: 'Tips and techniques for beginners',
    imagePlaceholder: '🔍',
  },
];

export default function LearnScreen() {
  const colorScheme = useColorScheme();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
          Learn
        </Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: Colors[colorScheme ?? 'light'].text }]}>
              Bird of the Day
            </Text>
          </View>
          
          <TouchableOpacity 
            style={[styles.birdOfDayCard, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
            <View style={styles.birdImagePlaceholder}>
              <Text style={styles.placeholderText}>🦤</Text>
            </View>
            <View style={styles.birdInfo}>
              <Text style={[styles.birdName, { color: Colors[colorScheme ?? 'light'].text }]}>
                Spotted Towhee
              </Text>
              <Text style={[styles.birdDescription, { color: Colors[colorScheme ?? 'light'].text }]}>
                A striking bird with distinctive spotted wings
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: Colors[colorScheme ?? 'light'].text }]}>
              Guides
            </Text>
            <TouchableOpacity>
              <Text style={{ color: Colors[colorScheme ?? 'light'].tint }}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {mockGuides.map((guide) => (
            <TouchableOpacity 
              key={guide.id}
              style={[styles.guideCard, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
              <View style={styles.guidePlaceholder}>
                <Text style={styles.placeholderText}>{guide.imagePlaceholder}</Text>
              </View>
              <View style={styles.guideInfo}>
                <Text style={[styles.guideName, { color: Colors[colorScheme ?? 'light'].text }]}>
                  {guide.title}
                </Text>
                <Text style={[styles.guideDescription, { color: Colors[colorScheme ?? 'light'].text }]}>
                  {guide.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
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
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  birdOfDayCard: {
    marginHorizontal: 20,
    borderRadius: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  birdImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 40,
  },
  birdInfo: {
    flex: 1,
    padding: 16,
  },
  birdName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  birdDescription: {
    fontSize: 14,
    opacity: 0.8,
  },
  guideCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  guidePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  guideInfo: {
    flex: 1,
    padding: 12,
  },
  guideName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  guideDescription: {
    fontSize: 14,
    opacity: 0.8,
  },
}); 