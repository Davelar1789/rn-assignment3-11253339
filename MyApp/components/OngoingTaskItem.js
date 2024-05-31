// components/OngoingTaskItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OngoingTaskItem = ({ title }) => (
  <View style={styles.outerContainer}>
    <View style={styles.innerContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 10,
    padding: 2,
    backgroundColor: '#f0e2d3', // Margin color
    borderRadius: 15, // Adjust border radius if needed
  },
  innerContainer: {
    padding: 40,
    backgroundColor: '#fbf9f7', // Inside color
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
  },
});

export default OngoingTaskItem;
