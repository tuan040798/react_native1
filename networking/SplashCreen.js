import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, YellowBox } from 'react-native';
import Main from './Main';
import { getJsonFromWeb } from './api';

const apiJsonWeb = 'https://jsonplaceholder.typicode.com/photos';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    getJsonFromWeb()
      .then(result => {
        this.props.navigation.navigate('Main', { dataSend: { result: result, status: true } });
      })
      .catch(err => {
        console.log(`Error: ${err}`);
        this.props.navigation.navigate('Main', { dataSend: { result: {}, status: false } });
      });
  }

  render() {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    return (
      <View style={{ flex: 1, backgroundColor: '#27ae60', alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>Poppy App</Text>
        </View>
      </View>
    );
  }
}
