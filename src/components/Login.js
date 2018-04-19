import React from 'react';
import {StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginForm from './LoginForm';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';


export default class Login extends React.Component {
  HandlePress = () => {
    this.props.navigation.navigate('CarouselView');
  }

  render() {
    return (
      // <LinearGradient colors={['#5C258D', '#4389A2']} style={styles.linearGradient}>
        <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
        <AnimatedLinearGradient customColors={presetColors.firefox} speed={4000}/>

        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('../images/logo.png')}/>
          <Text style={styles.title}>Door to a happy living</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm onPress={this.HandlePress}/>
        </View>
        </KeyboardAvoidingView>
      // </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.9
  }
});
