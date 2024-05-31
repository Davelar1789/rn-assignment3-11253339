// screens/HomeScreen.js
import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoryCard from '../components/CategoryCard';
import OngoingTaskItem from '../components/OngoingTaskItem';

const categories = [
  { title: 'Exercise', tasks: 12, image: require('../assets/exercise.png') },
  { title: 'Study', tasks: 12, image: require('../assets/study.png') },
  { title: 'Code', tasks: 10, image: require('../assets/code.jpeg') },
  { title: 'Cook', tasks: 8, image: require('../assets/cook.jpg') },
  { title: 'Read', tasks: 15, image: require('../assets/read.jpeg') },
  { title: 'Meditate', tasks: 6, image: require('../assets/meditate.jpeg') },
  { title: 'Work', tasks: 20, image: require('../assets/work.jpg') },
  { title: 'Play', tasks: 5, image: require('../assets/play.jpg') },
];

const ongoingTasks = [
  { title: 'Mobile App Development' },
  { title: 'Web Development' },
  { title: 'Push Ups' },
  { title: 'Reading Book' },
  { title: 'Meditation' },
  { title: 'Learning React' },
  { title: 'Cooking Dinner' },
  { title: 'Jogging' },
  { title: 'Playing Guitar' },
  { title: 'Studying Math' },
  { title: 'Learning Spanish' },
  { title: 'Yoga' },
  { title: 'Drawing' },
  { title: 'Writing Blog' },
  { title: 'Gardening' },
];

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.tasksCount}>14 tasks today</Text>
      </View>
      <Image source={require('../assets/profile.png')} style={styles.profileImage} />
    </View>
    <View style={styles.searchFilterContainer}>
      <View style={styles.searchContainer}>
        <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        <TextInput style={styles.search} placeholder="Search" />
      </View>
      <Image source={require('../assets/filter.png')} style={styles.filterIcon} />
    </View>
    <Text style={styles.sectionHeader}>Categories</Text>
    <FlatList
      horizontal
      data={categories}
      renderItem={({ item }) => (
        <CategoryCard title={item.title} tasks={item.tasks} image={item.image} />
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesList}
    />
    <Text style={styles.sectionHeader}>Ongoing Task</Text>
    <FlatList
      data={ongoingTasks}
      renderItem={({ item }) => <OngoingTaskItem title={item.title} />}
      keyExtractor={(item, index) => index.toString()}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f0e8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  tasksCount: {
    fontSize: 16,
    color: '#888',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  search: {
    flex: 1,
  },
  filterIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoriesList: {
    paddingBottom: 10,
  },
});

export default HomeScreen;
