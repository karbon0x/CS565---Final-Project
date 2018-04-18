import React from 'react';
import { TabNavigator } from 'react-navigation';

import { SafeAreaView, StyleSheet, Text, View, Image, Button, ImageBackground} from 'react-native';
const img = require('./src/static/images/background.jpg');
  
export default class App extends React.Component {
  render() {
    return <RootStack />;
  } 
}

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}> 
        <ImageBackground  source={require('./src/static/images/background.jpg')} style={styles.backgroundImage}>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />     
        </ImageBackground>
   
    </SafeAreaView>
    );
  }
}
class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <Text> Login Screen </Text>
    </View>
    );
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
