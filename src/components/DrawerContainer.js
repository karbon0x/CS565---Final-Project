import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient';

export default class DrawerContainer extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <LinearGradient colors={['#16222A', '#3A6073']} style={styles.linearGradient}>
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('CarouselView')}
          style={styles.uglyDrawerItem}>
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate('login')}
          style={styles.uglyDrawerItem}>
          Login
        </Text>
        <Text
          onPress={() => navigation.navigate('form')}
          style={styles.uglyDrawerItem}>
          Login
        </Text>
      </View>
    </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 5,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
})
