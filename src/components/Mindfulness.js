import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight

} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default class TimerView extends React.Component {
	render() {
		return (
      <LinearGradient colors={['#DA4453', '#89216B']} style={styles.linearGradient}>
  			<View style={styles.container}>
          <TouchableHighlight
            style={styles.submit} onPress={() => this.props.navigation.navigate('MeditationView', {time : 1})}>
              <Text style={[styles.submitText]}>1 minute</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.submit} onPress={() => this.props.navigation.navigate('MeditationView', {time : 5})}>
              <Text style={[styles.submitText]}>5 minutes</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.submit} onPress={() => this.props.navigation.navigate('MeditationView', {time : 15})}>
              <Text style={[styles.submitText]}>15 minutes</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.submit} onPress={() => this.props.navigation.navigate('MeditationView', {time : 30})}>
              <Text style={[styles.submitText]}>30 minutes</Text>
          </TouchableHighlight>
  			</View>
      </LinearGradient>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    marginBottom: 20,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 5,
    width: 300,
    borderColor: '#fff'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      letterSpacing: 1,
  },
  linearGradient: {
    flex: 1,
  }
})
