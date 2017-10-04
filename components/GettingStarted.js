import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { brightYellow, white } from '../utils/colors';

const RenderInput = props => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.heading}</Text>
      <Text>{props.label}</Text>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        style={{fontSize: 20, paddingBottom: 10, paddingTop: 10}}
        value={props.val}
        onChangeText={text => props.onChange(text)}
      />
    </View>
  )
}

export default class GettingStarted extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  onChangeName(text) {
    this.setState({ name: text });
  }

  onChangeEmail(text) {
    this.setState({ email: text });
  }

  onChangePassword(text) {
    this.setState({ password: text });
  }

  render() {
    const { container, footerStyle, buttonStyle, buttonText } = styles;

    return (
      <View style={container}>
        <View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../utils/images/whistle-logo.png')}
              style={{height: 40, width: 40 }}
            />
          </View>
          
          <RenderInput
            heading='Hi. What is your name?'
            label='Full name'
            val={this.state.name}
            onChange={this.onChangeName.bind(this)}
          />

          <RenderInput
            heading="What's your email?"
            label="We won't send you spam."
            val={this.state.email}
            onChange={this.onChangeEmail.bind(this)}
          />

          <RenderInput
            heading="You'll need a password"
            label="Make sure it's 6 characters or more."
            val={this.state.password}
            onChange={this.onChangePassword.bind(this)}
            secureTextEntry
          />
        </View>
        <View style={footerStyle}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity style={buttonStyle}>
              <Text style={buttonText}>Next</Text>
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
});