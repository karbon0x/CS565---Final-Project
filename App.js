import React from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen'
import LoginScreen from './src/components/LoginScreen'
import { SafeAreaView, StyleSheet, Text, View, Image, Button, ImageBackground} from 'react-native';
const img = require('./src/static/images/background.jpg');
  
export default class App extends React.Component {
  render() {
    return <RootStack />;
  } 
}



const RootStack = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: LoginScreen,
    },  
  },
  {
   tabBarComponent: () => null,
  }
);

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
