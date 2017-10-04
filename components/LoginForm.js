import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { brightYellow, white } from '../utils/colors';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    const {
      container,
      titleText,
      descText,
      inputStyle,
      footerStyle,
      buttonStyle,
      buttonText
    } = styles;

    return (
      <View style={container}>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Log in to Whistle.</Text>
          <Text>email, username</Text>
          <TextInput
            style={inputStyle}
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />

          <Text>Password</Text>
          <TextInput
            style={inputStyle}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            secureTextEntry
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity>
            <Text>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={footerStyle}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity style={buttonStyle}>
              <Text style={buttonText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  inputStyle: {
    fontSize: 20, 
    paddingBottom: 10, 
    paddingTop: 10
  },
  footerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  buttonStyle: {
    borderRadius: 20,
    padding: 7,
    backgroundColor: brightYellow,
    width: 80,
    alignItems: 'center'
  },
  buttonText: {
    color: white,
    fontSize: 20,
    fontWeight: 'bold'
  }
})