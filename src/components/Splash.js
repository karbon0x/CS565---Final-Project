import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.splash}>
        <Text>'Hello world'</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splash: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
