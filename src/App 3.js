import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase'
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyBs-GFi7S6sbUUOw67rzBU-Bj6tICKX3BA',
      authDomain: 'udemy-manager-106a4.firebaseapp.com',
      databaseURL: 'https://udemy-manager-106a4.firebaseio.com',
      projectId: 'udemy-manager-106a4',
      storageBucket: 'udemy-manager-106a4.appspot.com',
      messagingSenderId: '582253020395',
      appId: '1:582253020395:web:2c899becc557c63c612aae',
      measurementId: 'G-31KLRCWR90'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;