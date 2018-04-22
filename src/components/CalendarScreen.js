import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View} from 'react-native';
import Calendar from './calendar/Calendar';
import type Moment from 'moment';
import moment from 'moment';
import Events from './events/Events';

export type EventType = {
  date: Moment,
  title: string,
  description: string,
  image: string,
};

const list = [
{
  start: moment("2018-04-21T10:00:00"),
  end: "12:00PM",
  title: "get off your lazy ass and walk!!!!",
  location: "Central Park"
},
{
  start: moment("2018-04-21T11:30:00"),
  end: "12:00PM",
  title: "get off your lazy ass and walk!!!!",
  location: "Champaign"
},
{
  start: moment("2018-04-21T04:00:00"),
  end: "12:00PM",
  title: "walk around to clear mind",
  location: "Japan House"
}
];

const FAKE_EVENTS: Array<EventType> = (() => {
  return list.map((item, i) => ({
    date: item.start,
    title: item.title,
    description: item.location,
    image: 'https://i.imgur.com/pBcQQMp.jpg'
  }));
})();

// Filter events by date
const filterEvents = (date: Moment): ?Array<EventType> => FAKE_EVENTS.filter(event => event.date.isSame(date, 'day'));

export default class CalendarScreen extends React.Component {
  state = {
    events: filterEvents(moment()),
  };

  onSelectDate = (date: Moment) => {
    this.setState({ events: filterEvents(date) });
  };

  render() {
    const {events} = this.state;
    return (
      <View style={calendarStyles.container}>
        <StatusBar hidden={true} />
        <Calendar showDaysAfterCurrent={30} onSelectDate={this.onSelectDate} />
        <Events events={events}/>
      </View>
    );
  }

}

// CALENDAR STYLE
const calendarStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F53B1',
    paddingTop: 20,
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
