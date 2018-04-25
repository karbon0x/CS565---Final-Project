import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Linking
} from "react-native";
import moment from "moment";
import LinearGradient from 'react-native-linear-gradient';

export default class Meditation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: this.props.navigation.state.params.time * 60,
            flag: true,
            date: moment().format("LL")
        };
    }

    getMinutes = () => ('0' + Math.floor(parseInt(this.state.seconds)/60)).slice(-2);

    getSeconds = () => ('0' + parseInt(this.state.seconds)%60).slice(-2);

    ticker = () => {
      let _this = this;
      if(_this.state.flag === true) {
        this.increment = setInterval(() => {
          _this.setState({
            seconds: _this.state.seconds - 1,
            flag: !(_this.state.flag)
          })
        }, 1000);
      } else {
        clearInterval(this.increment);
        this.setState({ flag: !this.state.flag });
      }
    }

    render() {
        return (
          <LinearGradient colors={['#e65c00', '#F9D423']} style={styles.linearGradient}>
            <View style={styles.container}>
        <StatusBar style={{ backgroundColor: 'transparent' }} />
        <View style={styles.circle} >
          <TouchableOpacity onPress={this.ticker}>
            <Text style={styles.timeText}>
              00:{this.getMinutes()}:{this.getSeconds()}
            </Text>
          </TouchableOpacity>
        </View>
                <Text style={styles.dateText}>
                    {this.state.date}
                </Text>
        <Text style={styles.headspaceText1}>
        You have meditated for 57 minutes this week.
          </Text>
        <Text style={styles.headspaceText}>
            Keep going!
          </Text>
      <Text style={styles.headspaceText1}>
        For more information, checkout:
      </Text>
      <TouchableOpacity style={styles.headspaceText}
        onPress={() => Linking.openURL('https://my.headspace.com/')}>
        <Text style={styles.headspaceText}>
          Headspace app
        </Text>
      </TouchableOpacity>
    </View>
  </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
    color: 'white',
    paddingTop: 85,
    paddingLeft: 15,
        fontSize: 50,
    },
  dateText: {
        color: 'white',
    fontSize: 20,
    paddingTop:10,
    textAlign: 'center'
  },
  headspaceText: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center'
  },
  headspaceText1: {
    paddingTop: 40,
    marginTop: 10,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 1,
  },
  circle: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    borderWidth: 5,
    borderColor: 'white',

},
linearGradient: {
  flex: 1,
}
})
