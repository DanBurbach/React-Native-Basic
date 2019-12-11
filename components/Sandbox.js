import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
  return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
            <Text style={styles.boxFive}>Five</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex takes up whole page at setting of 1
        flex: 1,
        backgroundColor: '#ddd',
        // everything inside the flex container becomes a flex item, default column
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',

    },
    boxOne: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 10,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 10,
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10,
    },
    boxFour: {
        flex: 1,
        backgroundColor: 'yellow',
        padding: 10,
    },
    boxFive: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    }
});