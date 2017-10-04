import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  brightYellow,
  white
} from '../utils/colors';

export default Landing = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../utils/images/whistle-logo.png')}
        style={{width: 50, height: 50}}
      />
      <View style={styles.content}>
        <Text style={styles.contentText}>See what's happening in the world right now.</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(
              'GettingStarted'
            )
          }}
          style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.footerText}>Have an account already? </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(
              'LoginForm'
            )
          }}>
          <Text style={[{color: brightYellow}, styles.footerText]}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 2
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentText: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  buttonStyle: {
    borderRadius: 20,
    width: 350,
    backgroundColor: brightYellow,
    marginTop: 20,
    padding: 7,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: white
  },
  footerText: {
    fontSize: 15
  }
})