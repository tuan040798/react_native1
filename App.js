/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

class ShowName extends Component {
  render() {
    return <Text style={styleCode.styleTextTwo}>Hi! My name is {this.props.name}!</Text>;
  }
}

class AnimetionState extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return <Text>{display}</Text>;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styleCode.container}>
        <ShowName name="Tuấn" />
        <ShowName name="Hằng" />
        <AnimetionState text="Hey babe" />
        <AnimetionState text="Hihi" />
        <AnimetionState text="Look at me!" />
        <Text style={styleCode.styleTextOne}> Hello World! </Text>
      </View>
    );
  }
}

const styleCode = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#28B463',
    borderWidth: 2,
    borderColor: 'gray'
  },
  styleTextOne: {
    textAlign: 'center',
    color: 'yellow'
  },
  styleTextTwo: {
    textAlign: 'center',
    color: 'yellow'
  }
});
