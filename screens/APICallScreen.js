import React from 'react';
import { StyleSheet, Button, ScrollView, FlatList, Alert, Button } from 'react-native';

export default class FlexboxScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            data: null,
            loadedPage: true,
            error: null
        }
    }

    coreURL = 'https://jsonplaceholder.typicode.com';

    getData = (ev) => {
        let url = this.coreUrl + '/comments';
        let headers = new Headers();

        let req = new Request(url, {
            method: 'GET'
        });

        fetch(req)
        .then(response=>response.json())
        .then(this.showData)
        .catch(this.badData)
    }

    showData = (data) => {
        this.setState({ loaded: true, data });
    }

    badData = () => {
        this.setState({ loaded: true, error: err.message });
    }

    render() {
        return (
            <ScrollView>
                <Button 
                    color='orange' 
                    onPress={this.getData} 
                    title='Grab API Data' />
            </ScrollView>
        );
    }
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
    }
})