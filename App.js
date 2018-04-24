import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Login from './src/components/Login';
import HomeCarousel from './src/components/HomeCarousel';
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';
import DrawerContainer from './src/components/DrawerContainer';
import Journal from './src/components/Journal';
import Camera from './src/components/Camera';
import CalendarScreen from './src/components/CalendarScreen';
import Meditation from './src/components/Meditation';
import Mindfulness from './src/components/Mindfulness';
import FormContainer from './src/components/FormContainer';
import TrackHealthScreen from './src/components/TrackHealthScreen';
import TrackHealth from './src/components/TrackHealth';
import LoggerScreen from './src/components/LoggerScreen';

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return <PrimaryNav />;
  }
}

const DrawerStack = DrawerNavigator({
  HomeView : { screen: Login },
  CarouselView : { screen: HomeCarousel },
  JournalView : { screen: Journal },
  CameraView : { screen : Camera },
  CalendarView : { screen : CalendarScreen },
  MeditationView : { screen : Meditation },
  MindfulnessView : { screen : Mindfulness },
  FormView : { screen : FormContainer },
  HealthView : { screen : TrackHealthScreen },
  LoggerView : { screen : LoggerScreen },
  TrackHealthView : { screen : TrackHealth }
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
});

const RootStack = StackNavigator({
  DrawerStack: { screen: DrawerStack },
  }, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    title: '',
    headerStyle: { marginTop: 1, backgroundColor: '#16222A' },
    gesturesEnabled: false,
    headerRight: <TouchableOpacity onPress={() => { navigation.navigate('HomeView')}}><Text style={{color: '#fff', marginRight: 10}}>Logout</Text></TouchableOpacity>,
    headerLeft: <TouchableOpacity onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }}>
      <Image style={styles.buttonImage} source={require('./src/images/nav.jpg')} ></Image>
    </TouchableOpacity>
  })
});

const LoginStack = StackNavigator({
  HomeView : { screen: Login },
  // CarouselView : {screen: HomeCarousel }
}, {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: 'none'
    }
  });
  const PrimaryNav = StackNavigator({
    loginStack: { screen: LoginStack },
    drawerStack: { screen: RootStack }
  }, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Welcome',
    initialRouteName: 'loginStack',
  })

  const styles = StyleSheet.create({
    buttonImage: {
      height: 40,
      width: 40,
      marginLeft: 10
    },
  });
