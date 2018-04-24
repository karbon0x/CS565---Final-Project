import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity} from 'react-native';
import Calendar from './calendar/Calendar';
import type Moment from 'moment';
import moment from 'moment';
import Events from './events/Events';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker'

import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
  } from 'react-native-popup-dialog';
  const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });

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
  title: "Workout session",
  location: "ARC"
},
{
  start: moment("2018-04-21T11:30:00"),
  end: "12:00PM",
  title: "Eat protein bar",
  location: "Home"
},
{
  start: moment("2018-04-21T04:00:00"),
  end: "12:00PM",
  title: "walk around to clear mind",
  location: "Japan House"
},
{
  start: moment("2018-04-21T06:00:00"),
  end: "12:00PM",
  title: "take a study break",
  location: "Grainger"
},
{
  start: moment("2018-04-21T08:00:00"),
  end: "12:00PM",
  title: "do yoga",
  location: "home"
},
{
  start: moment("2018-04-21T09:00:00"),
  end: "12:00PM",
  title: "eat dinner",
  location: "home"
},
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
    dialogShow: false,
    date:"2018-04-25",
  };
  showSlideAnimationDialog = () => {
    this.slideAnimationDialog.show();
  }
  onSelectDate = (date: Moment) => {
    this.setState({ events: filterEvents(date) });
  };
//
//   //<Input
//     onChangeText={(text) => {this.setState({text}); }}
//     value={this.state.text}
// />

  render() {
    const {events} = this.state;
    return (
      <View style={calendarStyles.container}>
        <StatusBar hidden={true} />
        <Calendar showDaysAfterCurrent={30} onSelectDate={this.onSelectDate} />
        <Events events={events}/>
        <ActionButton buttonColor="#8CA6DB">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => this.showSlideAnimationDialog()}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <PopupDialog
          dialogTitle={<DialogTitle title="New Event" />}
          ref={(popupDialog) => {
            this.slideAnimationDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}
        >
          <View style={styles.dialogContentView}>
          <Form>
            <Item fixedLabel>
              <Label>Task name</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Location</Label>
              <Input />
                </Item>
                <Item fixedLabel last>
<DatePicker
style={{width: 200}}
mode="date"
placeholder="select date"
format="YYYY-MM-DD"
minDate="2010-05-01"
maxDate="2030-06-01"
confirmBtnText="Confirm"
cancelBtnText="Cancel"
customStyles={{
dateIcon: {
position: 'absolute',
left: 0,
top: 4,
marginLeft: 0
},
dateInput: {
marginLeft: 36
}
}}
onDateChange={(date) => {this.setState({date: date})}}
/>
<DatePicker
style={{width: 200}}
mode="time"
placeholder="select time"
minDate="2010-05-01"
maxDate="2030-06-01"
confirmBtnText="Confirm"
cancelBtnText="Cancel"
customStyles={{
dateIcon: {
position: 'absolute',
left: 0,
top: 4,
marginLeft: 0
},
dateInput: {
marginLeft: 36
}
}}
onDateChange={(date) => {this.setState({date: date})}}
/>
</Item>
              </Form>
              </View>
            <View style={styles.dialogButton}>
              <TouchableOpacity style = {styles.Button}
            onPress={this.showSlideAnimationDialog}>
                  <Text style={styles.ButtonText}>Add event</Text>

            </TouchableOpacity>


          </View>
        </PopupDialog>
      </View>

    );
  }

}

// CALENDAR STYLE
const calendarStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3CA55C',
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
  dialogContentView: {
    flex: 1,
      backgroundColor: '#ffffff',
  },
  dialogButton: {

    flex: 1,
    alignItems: 'center',
    justifyContent:'center',

      backgroundColor: '#ffffff',


  },
  Button: {
    alignItems: 'center',

    backgroundColor: 'rgb(210, 55, 410)',
    padding: 10,
    width: 100,

  },
  ButtonText: {
    color: 'white'

  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
});
