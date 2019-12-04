import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/header';

export default function TodoScreen() {
    const [todo, setTodo] = useState([
        { text: 'find work', key: '1' },
        { text: 'do laundry', key: '2'},
        { text: 'play Civ V and BFV', key: '3'}
    ]);

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                {/* add your todo form */}
                <View style={styles.list}>
                    <FlatList
                        data={todo}
                        renderItem={({ item }) => (
                            <Text>{item.text}</Text>
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