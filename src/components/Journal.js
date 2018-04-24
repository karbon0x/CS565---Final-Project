import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default class Journal extends React.Component {
  genText = () => {
    const quotes = [
      "Good stuff lad! Keep at it!",
      "Look forward to your next cheat day!",
      "Patience! You'll get there!",
      "Remember, rest days are important!"
    ];
    return quotes[Math.floor(Math.random()*quotes.length)];
  }

  render() {
    return (
      <LinearGradient colors={['#134E5E', '#71B280']} style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.row}>
              <View style={styles.box}>
                <Text style={styles.textStyle}>Step count for today: {"\n"}{"\n"}<Text style={styles.innerText}>5637</Text></Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.textStyle}>Weight gained: {"\n"}{"\n"}<Text style={styles.innerText}>15lbs</Text></Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.textStyle}>Current weight: {"\n"}{"\n"}<Text style={styles.innerText}>147lbs</Text></Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.textStyle}>Progress pictures:</Text>
            <View style={styles.row}>
              <View style={styles.box}>
                <Image source={require('../images/prog1.png')} style={styles.image}/>
              </View>
              <View style={styles.box}>
                <Image source={require('../images/prog2.png')} style={styles.image}/>
              </View>
              <View style={styles.box}>
                <Image source={require('../images/prog3.png')} style={styles.image}/>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.textStyle2}>{this.genText()}</Text>
            <Text style={[styles.textStyle, {marginTop: 10, paddingTop: 10}]}> Add more pictures:</Text>

            <View style={styles.row}>
              <View style={styles.box}>
              </View>
              <View style={[styles.box, {marginLeft: 10, paddingLeft: 10}]}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('CameraView')} }>
                  <Image style={styles.buttonImage} source={require('../images/camera.png')} ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
              </View>
            </View>

          </View>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '100',
    letterSpacing: 1,
    fontSize: 25
  },
  innerText: {
    fontWeight: '300',
    fontSize: 28
  },
  image: {
    height: 130,
    width: 130,
    marginLeft: 5,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  buttonImage: {
    height: 100,
    width: 100,
  },
  textStyle2: {
    height: 40,
    color: '#fff',
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center'
  }
})
