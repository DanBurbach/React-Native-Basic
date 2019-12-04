import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function App() {
  // hook for setting Name
  const [name, setName] = useState('Danno');

  // hook for setting age
  const [age, setAge] = useState('37')

// hook for setting listing of people, defined by id (could be written as key)
  const [people, setPeople] = useState([
      { name: 'shaun', id: '1' },
      { name: 'yoshi', id: '2' },
      { name: 'mario', id: '3' },
      { name: 'luigi', id: '4' },
      { name: 'peach', id: '5' },
      { name: 'toad', id: '6' },
      { name: 'bowser', id: '7' },
    ]);

  // handler to return the id listing of people and then remove them from the list
  const touchNameRemoverHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id !=id);
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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
        <Text>(written with a React Hook)</Text>

        {/* <View style={styles.buttonContainer}>
          <Button title='update name here' onPress={clickName}/>
        </View> */}

        {/* better for performance, only loads when on screen*/}
        <FlatList 
          numColumns={1}
          keyExtractor={(item) => item.id} 
          data={people} 
          renderItem={({ item }) => (
            // onPress handler to remove names when tapped
            <TouchableOpacity onPress={() => touchNameRemoverHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity> 
          )}
        />

        {/* loads entire list all at once */}
        <ScrollView>
          { people.map((item) => (
              <View key={item.id}>
                <Text style={styles.item2}>{item.name}</Text>
              </View>
            ))}
        </ScrollView>

      </ScrollView>
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
    width: 300,
  },
  item: {
    flex: 1,
    marginTop: 10,
    padding: 30,
    backgroundColor: 'lightblue',
    fontSize: 18,
  },
  item2: {
    marginTop: 10,
    padding: 30,
    backgroundColor: 'orange',
    fontSize: 18,
  },
});
