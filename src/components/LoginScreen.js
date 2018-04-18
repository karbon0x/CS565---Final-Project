import React from 'react';
import { TabNavigator } from 'react-navigation';

import { SafeAreaView, StyleSheet, Text, View, Image, Button, ImageBackground} from 'react-native';
const img = require('../../src/static/images/background.jpg');

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <Text> Login Screen </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    opacity: 0.5,
    height: null,
    resizeMode: 'cover'
},
  container: {
    flex: 1,
  },
});
