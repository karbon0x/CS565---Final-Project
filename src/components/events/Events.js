 import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Event from './Event';
import type { EventType } from '../../App';
import LinearGradient from 'react-native-linear-gradient';

export default class Events extends Component {

  props: {
    events: ?Array<EventType>,
  };

  render() {
    const { events } = this.props;
    return (
      <LinearGradient colors={['#3CA55C', '#B5AC49']} style={styles.linearGradient}>
      <View style={styles.container}>
        <ScrollView>
          {events && events.map((event, index) =>
            <Event event={event} key={index} />)}
        </ScrollView>
      </View>
    </LinearGradient>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1
  }
});
