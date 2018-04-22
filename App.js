import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View} from 'react-native';
import Splash from './src/components/Splash';
import Login from './src/components/Login';
import Calendar from './src/components/calendar/Calendar';
import type Moment from 'moment';
import faker from 'faker';
import moment from 'moment';
import Events from './src/components/events/Events';

//import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail} from 'native-base';
//import Events from './src/static/Events';
import {
  StackNavigator,
} from 'react-navigation';

//import data from './static/Events.json';

export type EventType = {
  date: Moment,
  title: string,
  description: string,
  image: string,
};

const list = [
{
  start: moment("2018-04-20T10:00:00"),
  end: "12:00PM",
  title: "get off your lazy ass and walk!!!!",
  location: "Central Park"
},
{
  start: moment("2018-04-20T11:30:00"),
  end: "12:00PM",
  title: "get off your lazy ass and walk!!!!",
  location: "Champaign"
},
{
  start: moment("2018-04-20T04:00:00"),
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
const filterEvents = (date: string): ?Array<EventType> =>
  FAKE_EVENTS.filter(event => event.date.isSame(date, 'day'));

export default class App extends React.Component {
  state = {
    events: filterEvents(moment()),
  };

  onSelectDate = (date: Moment) => {
    this.setState({ events: filterEvents(date) });
  };

  //CALENDAR
  onSelectDate = (date: Moment) => {
    alert(date.calendar());
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
