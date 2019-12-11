import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null,
            loaded: true,
            error: null
        }
    }
    coreURL = 'https://jsonplaceholder.typicode.com';

    getData = (ev) => {
        this.setState({loaded:false, error: null});
        let url = this.coreURL + '/comments';
        let h = new Headers();
        h.append('Authorization', 'Writer asdfjklqwerty');
        h.append('X-Client', 'Danno');
        
        let req = new Request(url, {
            headers: h,
            method: 'GET'
        });
        
        fetch(req)
        .then(response=>response.json())
        .then(this.showData)
        .catch(this.badStuff)
    }

    showData = (data) => {
        this.setState({ loaded: true, data });
    }

    badData = () => {
        this.setState({ loaded: true, error: err.message });
    }

    render() {
        return (
            <View>
                <View style={styles.container}>{ !this.state.loaded && (<Text>Loading...</Text>)}
                </View>
                <Button
                    color= 'orange'
                    style={styles.button}
                    onPress={this.getData} 
                    title='Grab API Data' />
                <ScrollView>
                    { this.state.error !== null && (
                        <Text style={styles.errors}>{this.state.error}</Text>
                    )}
                    { this.state.data && this.state.data.length > 0 && (
                        this.state.data.map( comment => (
                            <Text key={comment.id} style={styles.txt}>
                            { comment.name }    
                            </Text>
                        ))
                    )}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: 'orange',
        backgroundColor: 'orange',
    },
    error: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    }
})