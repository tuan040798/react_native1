import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={[style.box, style.box1]} />
          <View style={[style.box, style.box2]} />
          <View style={[style.box, style.box3]} />
        </View>
        <View style={style.row}>
          <View style={[style.box, style.box3]} />
          <View style={[style.box, style.box1]} />
          <View style={[style.box, style.box2]} />
        </View>
        <View style={style.row}>
          <View style={[style.box, style.box1]} />
          <View style={[style.box, style.box3]} />
          <View style={[style.box, style.box2]} />
        </View>
        <View style={style.row}>
          <View style={[style.box, style.box1]} />
          <View style={[style.box]} />
          <View style={[style.box, style.box2]} />
        </View>
        <View style={style.row}>
          <View style={[style.box, style.box1]} />
          <View style={[style.box]} />
        </View>
        <View style={style.box}>
          <View style={[style.box]} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between'
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: 'red'
  },
  box1: {
    backgroundColor: 'yellow'
  },
  box2: {
    backgroundColor: 'blue'
  },
  box3: {
    flex: 2
  }
});
