import React, { Component } from 'react';
import { View, Text, StyleSheet, YellowBox, Image, Platform } from 'react-native';
import { TabNavigator, createBottomTabNavigator } from 'react-navigation';

import AddMediaTab from './AppTab/AddMediaTab';
import HomeTab from './AppTab/HomeTab';
import LikeTab from './AppTab/LikeTab';
import ProfileTab from './AppTab/ProfileTab';
import SearchTab from './AppTab/SearchTab';

export default class Main extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    return <AppStackNavigate />;
  }
}

const AppStackNavigate = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    SearchTab: {
      screen: SearchTab
    },
    AddMediaTab: {
      screen: AddMediaTab
    },
    LikeTab: {
      screen: LikeTab
    },
    ProfileTab: {
      screen: ProfileTab
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: 'white'
          }
        })
      },
      activeTinColor: '#000',
      inactiveTinColor: '#d1ceee',
      showLabel: false,
      showIcon: true
    }
  }
);

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  pictureHeaderStyle: {
    padding: 5
  }
});
