import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onLoginSuccess = () => {
    this.setState({ error: '', loading: false, email: '', password: '' });
  };

  onLoginFail = () => {
    this.setState({ error: 'Authentication Failed', loading: false });
  };

  buttonFeedBack = () => {
    this.setState({ error: '', loading: true });
  };

  invalidForm = () => {
    this.setState({ error: 'No Empty fields allowed' });
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    if (email.length === 0 || password.length === 0) {
      this.invalidForm();
    } else {
      this.buttonFeedBack();
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('inside success');
          this.onLoginSuccess();
        })
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log('inside success');
              this.onLoginSuccess();
            })
            .catch(this.onLoginFail);
        });
    }
  };

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={this.onButtonPress}>Log in</Button>;
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeHolder="user@gmail.com"
            label="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeHolder="password"
            label="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>
        <Text
          style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 20,
            padding: 5
          }}
        >
          {this.state.error}
        </Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

export default LoginForm;
