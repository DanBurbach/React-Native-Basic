import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default function ToDoAdd({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new todo...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='coral' onPress={() => submitHandler(text)} title='add todo' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});