import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Calendar from './calendar/Calendar';

export default class TrackHealth extends Component {

  onSelectDate = (date: Moment) => {
    //this.setState({ text1: 'Calories', text2: 'Total Carbohydrates (g)', text3: 'Total fat (g)', text4: 'Protein (g)', text5: 'Cups of water' });
  };

  render() {
    const { navigation } = this.props
    return (
    <LinearGradient colors={['#4CB8C4', '#3CD3AD']} style={styles.linearGradient}>
      <View style={calendarStyles.container}>
        <StatusBar hidden={true} />
          <Calendar showDaysAfterCurrent={30} onSelectDate={this.onSelectDate} />
          <View style={[styles.textContainer, {marginTop: 20, marginBottom: 10 }]}>
            <Text style={styles.textStyle1}>Running stats:</Text>
            <Text style={styles.textStyle2}>4.2 miles</Text>
            <Text style={styles.textStyle2}>42:33 min</Text>
            </View>

            <View style={[styles.textContainer, {borderWidth: 1, marginBottom: 10}]}>
            <Text style={styles.textStyle1}>Exercise zones:</Text>
            <Text style={styles.textStyle2}>4 minute Peak</Text>
            <Text style={styles.textStyle2}>24 minute Cardio</Text>
            <Text style={styles.textStyle2}>1 hr 28 min Fat Burn</Text>
            </View>

            <View style={[styles.textContainer, {borderWidth: 1}]}>
            <Text style={styles.textStyle1}>Heart Rate:</Text>
            <Text style={styles.textStyle2}>161 avg bpm</Text>
            <Text style={styles.textStyle1}>Calories burned:</Text>
            <Text style={styles.textStyle2}>540 cals</Text>
          </View>
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
