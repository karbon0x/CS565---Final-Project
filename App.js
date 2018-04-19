import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import Carousel from './src/components/Carousel';
import { TabNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = TabNavigator({
  HomeView: { screen: Login },
  CarouselView: { screen: Carousel },
},
  {
   tabBarComponent: () => null,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
