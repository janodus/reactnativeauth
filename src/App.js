import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyBK__pPVcjpUdJ-qhXMifGsurlEwEozTxE',
      authDomain: 'auth-df592.firebaseapp.com',
      databaseURL: 'https://auth-df592.firebaseio.com',
      storageBucket: 'auth-df592.appspot.com',
      messagingSenderId: '1018081313001'
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
