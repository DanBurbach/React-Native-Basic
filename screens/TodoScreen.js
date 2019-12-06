import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/ToDoHeader';
import TodoItem from '../components/TodoItem';


export default function TodoScreen() {
    const [todo, setTodo] = useState([
        { text: 'find work', key: '1' },
        { text: 'do laundry', key: '2'},
        { text: 'play Civ V and BFV', key: '3'}
    ]);

    const pressHandler = (key) => {
      setTodo((prevTodos) => {
        return prevTodos.filter(todos => todos.key != key);
      })
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                {/* todo form here*/}
                <View style={styles.list}>
                    <FlatList
                        data={todo}
                        renderItem={({ item }) => (
                            <TodoItem item={item} pressHandler={pressHandler}/>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});