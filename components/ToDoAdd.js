import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default function ToDoAdd({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const buttonPressHandler = () => {
    submitHandler(text);
    setText('');
  }

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Add a new todo for the list...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='orange' onPress={buttonPressHandler} title='Add Todo' />
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