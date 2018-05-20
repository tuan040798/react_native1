import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <View style={[style.boxHeader, style.boxAqua, style.centerItem]}>
            <Text>Top Left</Text>
          </View>
          <View style={[style.boxHeader, style.boxOrange, style.centerItem]}>
            <Text>Top Middle</Text>
          </View>
          <View style={[style.boxHeader, style.boxAqua, style.centerItem]}>
            <Text>Top Right</Text>
          </View>
        </View>
        <View style={style.null} />
        <View style={[style.content]}>
          <View style={[style.centerItem]}>
            <View style={[style.boxAqua, style.boxContent, style.centerItem]}>
              <Text>Center</Text>
            </View>
          </View>
          <View style={[style.leftRight]}>
            <View style={[style.boxOrange, style.boxContent, style.centerItem]}>
              <Text>Left</Text>
            </View>
            <View style={[style.boxOrange, style.boxContent, style.centerItem]}>
              <Text>Right</Text>
            </View>
          </View>
        </View>
        <View style={[style.footer, style.boxAqua, style.centerItem]}>
          <Text>Bottom of Screen</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxHeader: {
    height: 100,
    width: 80
  },
  boxAqua: {
    backgroundColor: 'aqua'
  },
  boxOrange: {
    backgroundColor: 'orange'
  },
  null: {
    flex: 1
  },
  content: {
    flex: 2,
    flexDirection: 'column'
  },
  footer: {
    flex: 0.5
  },
  boxContent: {
    height: 60,
    width: 80
  },
  leftRight: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
