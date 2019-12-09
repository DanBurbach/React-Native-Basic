import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text styles={styles.boxOne}> One </Text>
            <Text styles={styles.boxTwo}> Two </Text>
            <Text styles={styles.boxThree}> Three </Text>
            <Text styles={styles.boxFour}> Four </Text>
            <Text styles={styles.boxFive}> Five </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex takes up whole page at setting of 1
        // flex: 1,
        paddingTop: 40,
        // backgroundColor: '#ddd',
    },
    boxOne: {
        backgroundColor: 'rgb(43,12,8)',
        padding: 10,
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 10,
    },
    boxThree: {
        backgroundColor: 'pink',
        padding: 10,
    },
    boxFour: {
        backgroundColor: 'yellow',
        padding: 10,
    },
    boxFive: {
        backgroundColor: 'violet',
        padding: 10,
    }
});