import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={[style.container]}>
        <View style={style.marginTopLeft} />
        <View style={style.content}>
          <View style={[style.row]}>
            <View style={[style.one]} />
            <View style={[style.one, style.rebBox, style.centerItem]}>
              <Text>Red</Text>
            </View>
          </View>
          <View style={[style.row]}>
            <View style={[style.two]} />
            <View style={[style.two, style.orangeBox, style.centerItem]}>
              <Text>Orange</Text>
            </View>
          </View>
          <View style={[style.row]}>
            <View style={[style.four]} />
            <View style={[style.two, style.yellowBox, style.centerItem]}>
              <Text>Yellow</Text>
            </View>
          </View>
          <View style={[style.row]}>
            <View style={[style.six]} />
            <View style={[style.two, style.greenBox, style.centerItem]}>
              <Text>Green</Text>
            </View>
          </View>
          <View style={[style.row]}>
            <View style={[style.five]} />
            <View style={[style.one, style.blueBox, style.centerItem]}>
              <Text>Blue</Text>
            </View>
          </View>
          <View style={[style.row]}>
            <View style={[style.three]} />
            <View style={[style.two, style.indigoBox, style.centerItem]}>
              <Text>Indigo</Text>
            </View>
          </View>
          <View style={[style.row]}>
            <View style={[style.one]} />
            <View style={[style.two, style.violetBox, style.centerItem]}>
              <Text>Violet</Text>
            </View>
          </View>
        </View>
        <View style={style.marginTopLeft} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  marginTopLeft: {
    flex: 3 / 10
  },
  content: {
    flex: 4 / 10,
    flexDirection: 'column'
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flex: 1 / 7,
    flexDirection: 'row',
    backgroundColor: 'black'
  },
  one: {
    flex: 1 / 10
  },
  two: {
    flex: 2 / 10
  },
  three: {
    flex: 3 / 10
  },
  four: {
    flex: 4 / 10
  },
  five: {
    flex: 5 / 10
  },
  six: {
    flex: 6 / 10
  },
  rebBox: {
    backgroundColor: 'red'
  },
  orangeBox: {
    backgroundColor: 'orange'
  },
  yellowBox: {
    backgroundColor: 'yellow'
  },
  greenBox: {
    backgroundColor: 'green'
  },
  blueBox: {
    backgroundColor: 'blue'
  },
  indigoBox: {
    backgroundColor: 'indigo'
  },
  violetBox: {
    backgroundColor: 'violet'
  }
});
