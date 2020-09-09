import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyBs-GFi7S6sbUUOw67rzBU-Bj6tICKX3BA',
      authDomain: 'udemy-manager-106a4.firebaseapp.com',
      databaseURL: 'https://udemy-manager-106a4.firebaseio.com',
      projectId: 'udemy-manager-106a4',
      storageBucket: 'udemy-manager-106a4.appspot.com',
      messagingSenderId: '582253020395',
      appId: '1:582253020395:web:2c899becc557c63c612aae',
      measurementId: 'G-31KLRCWR90',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
