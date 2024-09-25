import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({ tasks, toggleTask }) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleTask(item.id)}>
      <View style={styles.taskContainer}>
        <Text style={[styles.taskText, item.completed && styles.completed]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 15,
    backgroundColor: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskText: {
    fontSize: 18,
    color: '#f5f2f2'
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
});

export default TaskList;
