import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';

export default class Splash extends React.Component {
  render() {
    return (
        <View style={styles.splash}>
          <AnimatedLinearGradient customColors={presetColors.firefox} speed={4000}/>
          <Text style={styles.title}>inSync</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  splash: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  }
});
