import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
let box_height = height / 3;
let box_width = width / 3;

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={[style.box, style.viewOne]} />
        <View style={[style.box, style.viewTwo]} />
        <View style={[style.box, style.viewThree]} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  box: {
    width: 300,
    height: box_height
  },
  viewOne: {
    backgroundColor: 'aqua'
  },
  viewTwo: {
    backgroundColor: 'gold'
  },
  viewThree: {
    backgroundColor: 'mediumpurple'
  }
});
