import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, Image } from 'react-native';
import { ArtyCharty } from 'arty-charty';
import { ArtyChartyPie } from 'arty-charty';
import LinearGradient from 'react-native-linear-gradient';

//const list = [ ];

export default class TrackHealthScreen extends React.Component {

  render() {
      return (
      <LinearGradient colors={['#DECBA4', '#3E5151']} style={styles.linearGradient}>
        <View style={[styles.container, {flex:1, justifyContent: 'center', alignItems: 'center'}]}>
          <Text style={{fontWeight: '300', fontSize: 20, marginBottom: 30}}>Your daily macros</Text>
          <View style={styles.box}>
          <ArtyChartyPie
          data={{
          data: [
            {value: .6, color: '#f1c40f'},
            {value: 5, color: '#2980b9'},
            {value: 3, color: '#27ae60'}]
          }}/>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', marginTop: 30}}>
            <Text>Total: </Text><Text style={{color: '#27ae60', fontWeight: 'bold'}}>36% </Text><Text>Protein </Text><Text style={{color:'#f1c40f', fontWeight: 'bold'}}>3% </Text><Text>Fat </Text><Text style={{color:'#2980b9', fontWeight: 'bold'}}>61% </Text><Text>Carbs</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text>Goal: </Text><Text style={{color: '#27ae60', fontWeight: 'bold'}}>15% </Text><Text>Protein </Text><Text style={{color:'#f1c40f', fontWeight: 'bold'}}>30% </Text><Text>Fat </Text><Text style={{color:'#2980b9', fontWeight: 'bold'}}>55% </Text><Text>Carbs</Text>
          </View>
          <Text style={{marginTop: 20, justifyContent: 'center', textAlign: 'center', borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 10}}>
            Don't worry about access carb intake, try to avoid rice/potatoes/bread tomorrow
          </Text>
          <Text style={{marginTop: 10, justifyContent: 'center', textAlign: 'center', borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 10}}>
            shown results can have an error of ~0.5%
          </Text>
        </View>
      </LinearGradient>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
    padding: 20
  },
  box: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1
  }
});
