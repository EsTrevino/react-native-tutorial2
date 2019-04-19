import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import { firebaseKeys } from './utils/keys';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = {
    loggedIn: null
  };

  componentDidMount() {
    firebase.initializeApp(firebaseKeys);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  logOut = () => {
    firebase.auth().signOut();
  };

  renderContent = () => {
    if (this.state.loggedIn) {
      return <Button onPress={this.logOut}>Log Out</Button>;
    } else if (this.state.loggedIn === null) {
      return <Spinner />;
    } else {
      return <LoginForm />;
    }
  };

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
