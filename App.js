import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/components/Splash';
import Login from './src/components/Login';

export default class App extends React.Component {
  render() {
    return (
      // <Splash/>
      <Login/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
