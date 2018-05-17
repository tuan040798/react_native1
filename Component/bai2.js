import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={style.container1}>
          <View style={[style.box, style.boxOne]} />
          <View style={[style.box, style.boxTwo]} />
          <View style={[style.box, style.boxThree]} />
        </View>
        <View style={style.container2}>
          <View style={[style.box, style.boxOne]} />
          <View style={[style.box, style.boxTwo]} />
          <View style={[style.box, style.boxThree]} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container1: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  container2: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100
  },
  boxOne: {
    backgroundColor: 'red'
  },
  boxTwo: {
    backgroundColor: 'blue'
  },
  boxThree: {
    backgroundColor: 'yellow'
  }
});
