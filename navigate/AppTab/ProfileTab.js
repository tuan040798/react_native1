import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Button from 'react-native-button';
import CardComponent from '../CardComponent';

const images = [
  require('../picture/imgHistory1.jpg'),
  require('../picture/imgHistory2.jpg'),
  require('../picture/imgHistory3.jpg'),
  require('../picture/imgHistory4.jpg'),
  require('../picture/imgHistory5.jpg'),
  require('../picture/imgHistory6.jpg'),
  require('../picture/imgHistory7.jpg'),
  require('../picture/imgHistory8.jpg'),
  require('../picture/imgHistory9.jpg')
];

const { width, height } = Dimensions.get('window');

export default class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Image source={require('../icon/avatar.png')} style={{ tintColor: tintColor }} />
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  segmentClicked = index => {
    this.setState({
      activeIndex: index
    });
  };

  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            index % 3 != 0 ? { paddingLeft: 2 } : { paddingLeft: 0 },
            { marginBottom: 2 }
          ]}
        >
          <Image source={image} style={{ flex: 1, width: undefined, height: undefined }} />
        </View>
      );
    });
  };

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return <View style={[style.row, { flexWrap: 'wrap' }]}>{this.renderSectionOne()}</View>;
    }
    if (this.state.activeIndex == 1) {
      return (
        <View style={{ flex: 1 }}>
          <CardComponent imageSource="img1" like="100" />
          <CardComponent imageSource="img2" like="1000" />
          <CardComponent imageSource="img3" like="10000" />
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView style={[style.container, style.WhiteColor]}>
        <View style={[style.row, style.betweenItem, { backgroundColor: '#f2f0eb' }]}>
          <View style={[style.paddingBox]}>
            <Image source={require('../icon/add-user-button.png')} />
          </View>
          <View style={[style.paddingBox]}>
            <Text>TuanDev</Text>
          </View>
          <View style={[style.paddingBox]}>
            <Image source={require('../icon/counterclockwise.png')} />
          </View>
        </View>
        <View style={[style.marginComponent]}>
          <View style={[style.row, { paddingTop: 10 }]}>
            <View style={[style.flexOne]}>
              <Image source={require('../picture/avatarGirl10.jpg')} style={[style.avatarSize]} />
            </View>
            <View style={[style.flexfour, { marginRight: 10 }]}>
              <View style={[style.row, style.betweenItem, style.paddingBox, style.flexOne]}>
                <View style={[style.centerItem, style.paddingLeftRightBox]}>
                  <Text style={[style.text15, style.textBlack]}>20</Text>
                  <Text style={[style.text12]}>posts</Text>
                </View>
                <View style={[style.centerItem, style.paddingLeftRightBox]}>
                  <Text style={[style.text15, style.textBlack]}>206</Text>
                  <Text style={[style.text12]}>followers</Text>
                </View>
                <View style={[style.centerItem, style.paddingLeftRightBox]}>
                  <Text style={[style.text15, style.textBlack]}>167</Text>
                  <Text style={[style.text12]}>following</Text>
                </View>
              </View>
              <View style={[style.flexOne, style.centerItem, style.row]}>
                <View style={[style.centerItem, style.flexfour, style.borderBox, { marginRight: 5 }]}>
                  <Text style={[style.textBlack, { margin: 2 }]}>Edit Profile</Text>
                </View>
                <View style={[style.flexOne, style.centerItem, style.borderBox]}>
                  <Image source={require('../icon/settings.png')} style={{ margin: 2 }} />
                </View>
              </View>
            </View>
          </View>
          <View style={[style.paddingBox]}>
            <Text style={[style.text15, style.textBlack, style.paddingText, { fontWeight: 'bold' }]}>Tuấn Poppy</Text>
            <Text style={[style.text15, style.paddingText]}>Dev | Computer Science | FullStack Developer</Text>
            <Text style={[style.text15, style.paddingText, { color: '#2f91ff' }]}>
              https://www.facebook.com/tuanit.dev
            </Text>
          </View>
        </View>
        <View style={[style.row, style.aroundItem, style.borderBoxButton, style.marginBoxBottom]}>
          <View style={[style.marginComponent]}>
            <Button onPress={() => this.segmentClicked(0)} active={this.state.activeIndex == 0}>
              <Image
                source={
                  this.state.activeIndex == 0
                    ? require('../icon/show-apps-button.png')
                    : require('../icon/show-apps-button_black.png')
                }
              />
            </Button>
          </View>
          <View style={[style.marginComponent]}>
            <Button onPress={() => this.segmentClicked(1)} active={this.state.activeIndex == 1}>
              <Image
                source={this.state.activeIndex == 1 ? require('../icon/list.png') : require('../icon/list_black.png')}
              />
            </Button>
          </View>
          <View style={[style.marginComponent]}>
            <Button onPress={() => this.segmentClicked(2)} active={this.state.activeIndex == 2}>
              <Image
                source={
                  this.state.activeIndex == 2
                    ? require('../icon/multiple-users-silhouette.png')
                    : require('../icon/multiple-users-silhouette_black.png')
                }
              />
            </Button>
          </View>
          <View style={[style.marginComponent]}>
            <Button onPress={() => this.segmentClicked(3)} active={this.state.activeIndex == 3}>
              <Image
                source={
                  this.state.activeIndex == 3 ? require('../icon/bookmark.png') : require('../icon/bookmark_black.png')
                }
              />
            </Button>
          </View>
        </View>
        {this.renderSection()}
      </ScrollView>
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
  row: {
    flexDirection: 'row'
  },
  paddingBox: {
    padding: 10
  },
  betweenItem: {
    justifyContent: 'space-between'
  },
  WhiteColor: {
    backgroundColor: 'white'
  },
  avatarSize: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginHorizontal: 5
  },
  text12: {
    fontSize: 12
  },
  text15: {
    fontSize: 15
  },
  textBlack: {
    color: 'black'
  },
  flexOne: {
    flex: 1
  },
  flexfour: {
    flex: 4
  },
  borderBox: {
    borderWidth: 2,
    borderColor: '#8b95a3',
    borderRadius: 5
  },
  paddingLeftRightBox: {
    paddingLeft: 10,
    paddingRight: 10
  },
  marginComponent: {
    marginTop: 5
  },
  paddingText: {
    padding: 2
  },
  aroundItem: {
    justifyContent: 'space-around'
  },
  borderBoxButton: {
    borderTopWidth: 1,
    borderTopColor: '#eae5e5'
  },
  marginBoxBottom: {
    marginBottom: 10
  }
});
