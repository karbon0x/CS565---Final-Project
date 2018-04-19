import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';

export default class Carousel extends React.Component {
  render() {
    return (
      <View style={styles.carousel}>
        <Text>Hi!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
});
