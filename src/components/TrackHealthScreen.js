import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, Image } from 'react-native';
import { ArtyCharty } from 'arty-charty';
import { ArtyChartyPie } from 'arty-charty';
import LinearGradient from 'react-native-linear-gradient';

//const list = [ ];

export default class TrackHealthScreen extends React.Component {

  render() {
      return (
      <LinearGradient colors={['#DE6262', '#FFB88C']} style={styles.linearGradient}>
        <View style={[styles.container, {flex:1, justifyContent: 'center', alignItems: 'center'}]}>
          <Text style={{fontWeight: '100', fontSize: 20}}>Your daily macros</Text>
          <View style={styles.box}>
          <ArtyChartyPie
          data={{
          data: [
            {value: .6, color: '#f1c40f'},
            {value: 5, color: '#2980b9'},
            {value: 3, color: '#27ae60'}]
          }}/>
          </View>
          <Text style={{fontWeight: 'bold'}}>
            <Image source={require("../images/g.png")} style={{padding:10}}/> Protein <Text></Text>
            <Image source={require("../images/y.png")} style={{padding:10}}/> Fat <Text></Text>
            <Image source={require("../images/b.png")} style={{padding:10}}/> Carbohydrates <Text></Text>
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
    margin: 30,
    padding: 30
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
