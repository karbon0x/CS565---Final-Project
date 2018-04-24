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
        <Text style={styles.textStyle2}>
          Streak: 3 days
        </Text>
        <Text></Text>
        <Text
          onPress={() => navigation.navigate('CarouselView')}
          style={styles.uglyDrawerItem}>
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate('CalendarView')}
          style={styles.uglyDrawerItem}>
          Calendar
        </Text>
        <Text
          onPress={() => navigation.navigate('TrackHealthView')}
          style={styles.uglyDrawerItem}>
          Track health
        </Text>
        <Text
          onPress={() => navigation.navigate('LoggerView')}
          style={styles.uglyDrawerItem}>
          Logger
        </Text>
        <Text
          onPress={() => navigation.navigate('JournalView')}
          style={styles.uglyDrawerItem}>
          Journal
        </Text>
        <Text
          onPress={() => navigation.navigate('HealthView')}
          style={styles.uglyDrawerItem}>
          Progress
        </Text>
        <Text
          onPress={() => navigation.navigate('MindfulnessView')}
          style={styles.uglyDrawerItem}>
          Mindfulness
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
    fontWeight: '100',
    color: '#fff',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    textAlign: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textStyle2: {
    height: 40,
    color: '#fff',
    fontSize: 25,
    fontWeight: '200'
  }
})
