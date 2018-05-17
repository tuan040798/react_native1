import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.header} />
        <ScrollView>
          <View style={style.content}>
            <View style={style.box} />
            <View style={style.box} />
            <View style={style.box} />
            <View style={style.box} />
            <View style={style.box} />
            <View style={style.box} />
            <View style={style.box} />
          </View>
        </ScrollView>
        <View style={style.footer} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    height: 50,
    backgroundColor: 'lightblue',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  content: {
    backgroundColor: 'white',
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center'
  },
  footer: {
    height: 50,
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  box: {
    height: 100,
    width: 100,
    marginBottom: 10,
    backgroundColor: 'gray'
  }
});
