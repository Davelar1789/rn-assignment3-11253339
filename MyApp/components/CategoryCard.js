// components/CategoryCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryCard = ({ title, tasks, image }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.tasks}>{tasks} Tasks</Text>
    <Image source={image} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15, // Increased padding for better spacing
    width: 180, // Increased width
    height: 200, // Increased height
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  tasks: {
    fontSize: 14,
    color: '#888',
    textAlign: 'left',
  },
});

export default CategoryCard;
