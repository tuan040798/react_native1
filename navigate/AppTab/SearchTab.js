import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Search extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../icon/magnifying-glass.png')} style={{ tintColor: tintColor }} />
    )
  };
  render() {
    return (
      <View style={[style.container, style.centerItem]}>
        <Text>Search Tab</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
