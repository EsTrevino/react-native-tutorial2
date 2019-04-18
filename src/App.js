import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import { firebaseKeys } from './utils/keys';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseKeys);
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
