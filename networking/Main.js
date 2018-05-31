import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, RefreshControl } from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <View style={[style.row, style.marginBox, style.borderBottomBox, style.paddingBottomBox]}>
        <View>
          <Image
            source={{ uri: this.props.item.thumbnailUrl }}
            style={[style.pictureSize, style.paddingBox, style.boderRadiusBox]}
          />
        </View>
        <View>
          <Text style={[style.textBlack, style.paddingBox]}>albumId: {this.props.item.albumId}</Text>
          <Text style={[style.textBlack, style.paddingBox]}>{this.props.item.title}</Text>
        </View>
      </View>
    );
  }
}

export default class Main extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    const { dataSend } = this.props.navigation.state.params;
    this.state = {
      itemFromServer: [],
      refreshing: false,
      data: dataSend.result,
      status: dataSend.status
    };
  }
  componentDidMount() {
    this.getDataFromServer();
  }
  getDataFromServer = () => {
    this.setState({ refreshing: true });
    if (this.state.status === true) {
      this.setState({ itemFromServer: this.state.data });
      this.setState({ refreshing: false });
    } else if (this.state.status === false) {
      this.setState({ itemFromServer: [] });
      this.setState({ refreshing: false });
    }
  };
  onRefresh = () => {
    this.getDataFromServer();
  };
  render() {
    return (
      <View style={[style.container]}>
        <FlatList
          data={this.state.itemFromServer}
          renderItem={({ item, index }) => {
            return <ListItem item={item} index={index} />;
          }}
          keyExtractor={(item, index) => item.title}
          refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  marginBox: {
    margin: 10
  },
  paddingBox: {
    padding: 5
  },
  paddingBottomBox: {
    paddingBottom: 15
  },
  pictureSize: {
    height: 80,
    width: 80
  },
  textBlack: {
    color: 'black'
  },
  borderBottomBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
  },
  boderRadiusBox: {
    borderRadius: 10
  }
});
