import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

export default function App() {
  const [name, seName] = useState('Danno');

  const [age, setAge] = useState('37')

const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  //passes object in
  // const [anyname, setAnyname] = useState({ name: 'Danno', age: 37});

  // const clickName = () => {
  //   setName('bobby!');
  //   setAnyname({ name: 'Johnny', age: 65})
  // }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>This is a header!!</Text>
      </View>

      <View style={styles.bodyText}>
        <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </View>

      <Text>Enter Name:</Text>
      <TextInput
        style={styles.nameInput}
        multiline
        required
        placeholder='e.g. John Doe'
        onChangeText={(val)=> setName(val)} />

      <Text>Enter Age:</Text>
      <TextInput 
        style={styles.nameInput}
        required
        keyboardType='numeric'
        placeholder='e.g. 18'
        onChangeText={(val)=> setAge(val)}
        />

      <Text>Name: {name} and Age: {age}</Text>
      <Text>(written with a React Hook</Text>

      {/* <View style={styles.buttonContainer}>
        <Button title='update name here' onPress={clickName}/>
      </View> */}

      <FlatList 
        numColumns={1}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  header: {
    marginTop: 50,
    backgroundColor: 'lightgreen',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  bodyText: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  nameInput: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 4,
    margin: 10,
    width: 200,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    padding: 80,
    backgroundColor: 'lightblue',
    fontSize: 18,
    textAlign: "center",
  },
});