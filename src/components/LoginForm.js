import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' }

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({ error: 'Authentication Failed.' });
      });
    });
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
          placeholder="user@example.com"
          label="Email"
          value={this.state.email}
          //whatevertext is an argument
          onChangeText={whatevertext => this.setState({ email: whatevertext })}
          />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
          placeholder="password"
          label="password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
};

export default LoginForm;
