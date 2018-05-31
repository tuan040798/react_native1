import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class AddMedia extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Image source={require('../icon/plus.png')} style={{ tintColor: tintColor }} />
  };
  render() {
    return (
      <View style={[style.container, style.centerItem]}>
        <Text>AddMedia Tab</Text>
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
