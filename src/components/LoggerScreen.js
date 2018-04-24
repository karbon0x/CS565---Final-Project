import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Calendar from './calendar/Calendar';

export default class DrawerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { text1: 'Calories', text2: 'Total Carbohydrates (g)', text3: 'Total fat (g)', text4: 'Protein (g)', text5: 'Cups of water' };
  }

  onSelectDate = (date: Moment) => {
    this.setState({ text1: 'Calories', text2: 'Total Carbohydrates (g)', text3: 'Total fat (g)', text4: 'Protein (g)', text5: 'Cups of water' });
  };

  render() {
    const { navigation } = this.props
    return (
    <LinearGradient colors={['#EB3349', '#F45C43']} style={styles.linearGradient}>
      <View style={calendarStyles.container}>
        <StatusBar hidden={true} />
          <Calendar showDaysAfterCurrent={30} onSelectDate={this.onSelectDate} />
          <View style={styles.textContainer}>
            <TextInput
              style={styles.textStyle}
              onChangeText={(text) => this.setState({text})}
              placeholder=""
              placeholderTextColor="#fff"
              keyboardType="numeric"
              value={this.state.text1}
            />
            <TextInput
              style={styles.textStyle}
              onChangeText={(text) => this.setState({text})}
              placeholder=""
              placeholderTextColor="#fff"
              keyboardType="numeric"
              value={this.state.text2}
            />
            <TextInput
              style={styles.textStyle}
              onChangeText={(text) => this.setState({text})}
              placeholder=""
              placeholderTextColor="#fff"
              keyboardType="numeric"
              value={this.state.text3}
            />
            <TextInput
              style={styles.textStyle}
              onChangeText={(text) => this.setState({text})}
              placeholder=""
              placeholderTextColor="#fff"
              keyboardType="numeric"
              value={this.state.text4}
            />
            <TextInput
              style={styles.textStyle}
              onChangeText={(text) => this.setState({text})}
              placeholder=""
              placeholderTextColor="#fff"
              keyboardType="numeric"
              value={this.state.text5}
            />
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={{color: '#fff'}}>Save</Text>
            </TouchableOpacity>
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
    margin: 20,
    padding: 20
  },
  textStyle: {
    height: 40,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 30,
    color: '#fff'
  },
  buttonStyle: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 15
  }
})
