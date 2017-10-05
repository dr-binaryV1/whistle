import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import { initFirebase } from './utils/api';

import {
  brightYellow,
  white
 } from './utils/colors';
 import LoginForm from './components/LoginForm';
 import GettingStarted from './components/GettingStarted';
 import Landing from './components/Landing';

function WhistleStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    const navOptions = {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: brightYellow
      }
    }

    const MainNavigator = StackNavigator({
      Home: {
        screen: Landing,
        navigationOptions: { ...navOptions, title: 'Whistle' }
      },
      GettingStarted: {
        screen: GettingStarted,
        navigationOptions: { ...navOptions, title: 'Getting Started' }
      },
      LoginForm: {
        screen: LoginForm,
        navigationOptions: { ...navOptions, title: 'Log in' }
      }
    })

    return (
      <View style={{flex: 1}}>
        <WhistleStatusBar backgroundColor={brightYellow} barStyle='light-content' />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
