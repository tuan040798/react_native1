import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

let { width } = Dimensions.get('window');

export default class Like extends Component {
  render() {
    const imageStatus = {
      img1: require('./picture/statusGirl.jpg'),
      img2: require('./picture/statusGirl1.png'),
      img3: require('./picture/statusGirl2.jpg')
    };
    return (
      <View style={[style.container]}>
        <View style={[style.content]}>
          <View style={[style.row]}>
            <View style={[style.paddingBox]}>
              <Image source={require('./picture/avatarGirl.jpg')} style={[style.avatarSize]} />
            </View>
            <View style={[style.paddingBox, { paddingLeft: 1, paddingTop: 15 }]}>
              <Text>Tuấn Poppy</Text>
              <Text>July 4,2018</Text>
            </View>
          </View>
          <View>
            <View style={[style.centerItem]}>
              <Image source={imageStatus[this.props.imageSource]} style={[style.pictureSize]} />
            </View>
            <View style={[style.row, style.marginLeftBox]}>
              <View>
                <Image source={require('./icon/comments.png')} style={{ margin: 5 }} />
                <Text style={[style.marginLeftBox]}>{this.props.like}</Text>
              </View>
              <View>
                <Image source={require('./icon/heart.png')} style={{ margin: 5 }} />
              </View>
              <View>
                <Image source={require('./icon/send.png')} style={{ margin: 5 }} />
              </View>
            </View>
            <View style={[style.boxCommentSize]}>
              <Text>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>Tuấn Poppy: </Text>hex color red value is 199,
                green value is 214 and the blue value of its RGB is 233. Cylindrical-coordinate representations (also
                known as HSL) of color #c7d6e9 hue: 0.59 , saturation: 0.44 and the lightness value of c7d6e9 is 0.85.
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginTop: 5,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row'
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarSize: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  pictureSize: {
    width: width,
    height: 200
  },
  paddingBox: {
    padding: 10
  },
  marginLeftBox: {
    marginLeft: 5
  },
  boxCommentSize: {
    marginLeft: 10,
    marginRight: 10
  },
  borderImage: {
    borderRadius: 10
  }
});
