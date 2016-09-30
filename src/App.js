import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyA_16eSzslbUOBconO7UyoSoeXZCbKYvzI',
    authDomain: 'reactnativeauthenticatio-33ba9.firebaseapp.com',
    databaseURL: 'https://reactnativeauthenticatio-33ba9.firebaseio.com',
    storageBucket: 'reactnativeauthenticatio-33ba9.appspot.com',
    messagingSenderId: '283407046510',
  });
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
      );
  }
}

export default App;
