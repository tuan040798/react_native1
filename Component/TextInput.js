import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeText: 'Your email!',
      typePasssword: ''
    };
  }
  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 40,
            margin: 20,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1
          }}
          keyboardType="email-address"
          placeholder="Enter your email"
          placeholderTextColor="gray"
          onChangeText={text => {
            this.setState(previousState => {
              return {
                typeText: text
              };
            });
          }}
        />
        <Text style={{ margin: 20 }}>{this.state.typeText}</Text>

        <TextInput
          style={{
            height: 40,
            margin: 20,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1
          }}
          keyboardType="default"
          placeholder="Enter your password"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={text => {
            this.setState(previousState => {
              return {
                typePasssword: text
              };
            });
          }}
        />
      </View>
    );
  }
}
