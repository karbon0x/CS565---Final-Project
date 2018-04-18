import React from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.form}>
        <TextInput
          placeholder="username"
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          onSubmitEditing={() => this.enterPassword.focus()}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          />

        <TextInput
          secureTextEntry
          placeholder="password"
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          returnKeyType="go"
          ref={(i) => this.enterPassword = i}/>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button}>SIGN UP/LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    justifyContent: 'center',
    marginBottom: 30,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    borderRadius: 14,
    color: '#fff',
    paddingHorizontal: 15
  },
  buttonContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 14,
    borderRadius: 14
  },
  button: {
    fontWeight: '100',
    textAlign: 'center',
    color: '#fff'
  }
});
