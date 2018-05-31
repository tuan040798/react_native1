import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import CardComponent from '../CardComponent';

export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Image source={require('../icon/home.png')} style={{ tintColor: tintColor }} />
  };
  render() {
    return (
      <View style={[style.container]}>
        <View style={[style.betweenItem, style.row]}>
          <View style={[style.paddingBox]}>
            <Image source={require('../icon/photo-camera.png')} />
          </View>
          <View>
            <Text style={[style.paddingBox, style.textBlack]}>Instagram</Text>
          </View>
          <View style={[style.paddingBox]}>
            <Image source={require('../icon/magnifying-glass.png')} />
          </View>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <View style={[style.betweenItem, style.row]}>
            <View style={[style.paddingText]}>
              <Text style={[style.textBlack]}>Stories</Text>
            </View>
            <View style={[style.paddingText, style.row]}>
              <Image source={require('../icon/play-button.png')} />
              <Text style={[style.textBlack]}>Watch All</Text>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              paddingStart: 5,
              paddingEnd: 5,
              paddingBottom: 10
            }}
          >
            <View>
              <Image source={require('../picture/avatarGirl10.jpg')} style={[style.avatarSize]} />
            </View>
            <View>
              <Image source={require('../picture/avatarGirl1.jpg')} style={[style.avatarSize]} />
            </View>
            <View>
              <Image source={require('../picture/avatarGirl2.jpg')} style={[style.avatarSize]} />
            </View>
            <View>
              <Image source={require('../picture/avatarGirl3.jpg')} style={[style.avatarSize]} />
            </View>
            <View>
              <Image source={require('../picture/avatarGirl4.jpg')} style={[style.avatarSize]} />
            </View>
            <View>
              <Image source={require('../picture/avatarGirl5.jpg')} style={[style.avatarSize]} />
            </View>
            <View>
              <Image source={require('../picture/avatarGirl6.jpg')} style={[style.avatarSize]} />
            </View>
            <View>
              <Image source={require('../picture/avatarGirl7.jpg')} style={[style.avatarSize]} />
            </View>
            <View>
              <Image source={require('../picture/avatarGirl8.jpg')} style={[style.avatarSize]} />
            </View>
            <View>
              <Image source={require('../picture/avatarGirl9.jpg')} style={[style.avatarSize]} />
            </View>
            <View>
              <Image source={require('../picture/avatarGirl.jpg')} style={[style.avatarSize]} />
            </View>
          </ScrollView>
          <View />
        </View>
        <ScrollView>
          <CardComponent imageSource="img1" like="100" />
          <CardComponent imageSource="img2" like="1000" />
          <CardComponent imageSource="img3" like="10000" />
        </ScrollView>
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
  },
  betweenItem: {
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  paddingText: {
    padding: 5
  },
  textBlack: {
    color: 'black'
  },
  avatarSize: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: 'pink',
    borderWidth: 2,
    marginHorizontal: 5
  },
  paddingBox: {
    padding: 10
  }
});
