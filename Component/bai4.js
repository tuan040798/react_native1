import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.left}>
          <View style={[style.boxSquare, style.boxSquare2]} />
        </View>
        <View style={style.middle}>
          <View style={[style.boxSquare, style.boxSquare1]}>
            <View style={[style.boxSmall, style.boxSmall1]} />
          </View>
          <View style={[style.boxSquare5]} />
          <View style={[style.boxSquare, style.boxSquare3]}>
            <View style={[style.boxSmall, style.boxSmall2]} />
          </View>
        </View>
        <View style={style.right}>
          <View style={[style.boxSquare, style.boxSquare4]}>
            <View style={[style.boxSmall, style.boxSmall3]} />
          </View>
          <View style={[style.boxSmall, style.boxSquare6]} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  left: {
    flex: 1,
    justifyContent: 'center'
  },
  middle: {
    flex: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  boxSquare: {
    height: 100,
    width: 100
  },
  boxSquare1: {
    backgroundColor: 'black'
  },
  boxSquare2: {
    backgroundColor: 'yellow'
  },
  boxSquare3: {
    backgroundColor: 'green'
  },
  boxSquare4: {
    backgroundColor: 'blue'
  },
  boxSquare5: {
    height: 100,
    backgroundColor: 'gray',
    alignSelf: 'stretch'
  },
  boxSquare6: {
    backgroundColor: 'purple',
    position: 'absolute',
    bottom: 5,
    right: 5
  },
  boxSmall: {
    height: 20,
    width: 20
  },
  boxSmall1: {
    position: 'relative',
    backgroundColor: 'red',
    top: 5,
    left: 5
  },
  boxSmall2: {
    position: 'absolute',
    backgroundColor: 'yellow',
    top: 10,
    right: 10
  },
  boxSmall3: {
    position: 'relative',
    backgroundColor: 'black'
  }
});
