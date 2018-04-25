import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Calendar from './calendar/Calendar';
import type Moment from 'moment';
import moment from 'moment';

type eventType = {
  date: Moment,
  running: {
    distance: number,
    duration: string
  },
  exercise: {
    peak: number,
    cardio: number,
    fat_burn: string
  },
  heart: {
    bpm: number,
    calories: number
  }
};

const list = [
{
  start: moment("2018-04-25T10:00:00"),
  running: {
    distance: 2.2,
    duration: "32:33"
  },
  exercise: {
    peak: 4,
    cardio: 24,
    fat_burn: "1 hr 07 min"
  },
  heart: {
    bpm: 161,
    calories: 198
  }
},{
  start: moment("2018-04-26T10:00:00"),
  running: {
    distance: 1.9,
    duration: "25:13"
  },
  exercise: {
    peak: 6,
    cardio: 11,
    fat_burn: "39 min"
  },
  heart: {
    bpm: 159,
    calories: 112
  }
},
{
  start: moment("2018-04-24T10:00:00"),
  running: {
    distance: 3.4,
    duration: "40:01"
  },
  exercise: {
    peak: 5,
    cardio: 31,
    fat_burn: "1 hr 11 min"
  },
  heart: {
    bpm: 163,
    calories: 225
  }
}
];

const FAKE_EVENTS: Array<eventType> = (() => {
  return list.map((item, i) => ({
    date: item.start,
    running: item.running,
    exercise: item.exercise,
    heart: item.heart,
  }));
})();

// Filter events by date
const filterEvents = (date: Moment): ?Array<eventType> => {
  return FAKE_EVENTS.filter(event => event.date.isSame(date, 'day'))
};

export default class TrackHealth extends Component {
  state = {
    events: filterEvents(moment()),
    dialogShow: false,
    date:"2018-04-26",
  };

  onSelectDate = (date: Moment) => {
    this.setState({ events: filterEvents(date) });
  };

  renderEvents = () => {
    const { events } = this.state;
    if(events[0]) {
      return (
        <View>
          <View style={[styles.textContainer, {marginTop: 20, marginBottom: 10 }]}>
            <Text style={styles.textStyle1}>Running stats:</Text>
            <Text style={styles.textStyle2}>{events[0].running.distance} miles</Text>
            <Text style={styles.textStyle2}>{events[0].running.duration} min</Text>
          </View>

          <View style={[styles.textContainer, {borderWidth: 1, marginBottom: 10}]}>
            <Text style={styles.textStyle1}>Exercise zones:</Text>
            <Text style={styles.textStyle2}>{events[0].exercise.peak} minute Peak</Text>
            <Text style={styles.textStyle2}>{events[0].exercise.cardio} minute Cardio</Text>
            <Text style={styles.textStyle2}>{events[0].exercise.fat_burn} Fat Burn</Text>
          </View>

          <View style={[styles.textContainer, {borderWidth: 1}]}>
            <Text style={styles.textStyle1}>Heart Rate:</Text>
            <Text style={styles.textStyle2}>{events[0].heart.bpm} avg bpm</Text>
            <Text style={styles.textStyle1}>Calories burned:</Text>
            <Text style={styles.textStyle2}>{events[0].heart.calories} cals</Text>
          </View>
        </View>
      )
    }
  };

  render() {
    const { events } = this.state;
    const { navigation } = this.props;
    return (
    <LinearGradient colors={['#4CB8C4', '#3CD3AD']} style={styles.linearGradient}>
      <View style={calendarStyles.container}>
        <StatusBar hidden={true} />
          <Calendar showDaysAfterCurrent={30} onSelectDate={this.onSelectDate} />
          {this.renderEvents()}
      </View>
    </LinearGradient>
    )
  }
}

// CALENDAR STYLE
const calendarStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10
  },
  textStyle1: {
    height: 40,
    color: '#fff',
    fontSize: 30,
    fontWeight: '300'
  },
  textStyle2: {
    height: 40,
    color: '#fff',
    fontSize: 25,
    fontWeight: '200'
  },

})
