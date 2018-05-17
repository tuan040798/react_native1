import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'blue', margin: 10 }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'cyan', margin: 10 }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'red', margin: 10 }} />
      </View>
    );
  }
}
