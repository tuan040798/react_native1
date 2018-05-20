import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={[style.container]}>
        <View style={[style.header]}>
          <View style={[style.blueColor, style.header, style.row, style.heightTitle, style.centerItem]}>
            <View style={[style.header]}>
              <Image source={require('../icon/left.png')} style={[style.marginBox, style.pictureSize]} />
            </View>
            <View style={[style.content]}>
              <Text style={[style.text18, style.textWhite]}>Cấu hình chấm công công ty</Text>
            </View>
          </View>
          <View style={[style.row, style.header, style.heightTitle]}>
            <View style={[style.centerItem, style.header, style.borderHeader]}>
              <Text style={[style.textBlue]}>HÌNH THỨC</Text>
            </View>
            <View style={[style.centerItem, style.header]}>
              <Text>THỜI GIAN</Text>
            </View>
          </View>
        </View>
        <View style={[style.content]}>
          <View style={style.marginBox}>
            <Text style={[style.text13, style.paddingText]}>Hình thức chấm công</Text>
            <View style={[style.row, style.betweenContent]}>
              <View>
                <Text style={[style.text18, style.textBlack, style.paddingText]}>Chấm công bằng mạng wifi và GPS</Text>
              </View>
              <View>
                <Image source={require('../icon/down.png')} style={[style.marginBox, style.pictureSize]} />
              </View>
            </View>
          </View>
          <View style={[style.marginBox]}>
            <Text style={[style.text13, style.paddingText]}>THIẾT BỊ WIFI</Text>
            <Text style={[style.text18, style.textBlack, style.paddingText]}>TP-Link13901</Text>
            <Text style={[style.text13, style.paddingText]}>00:11:22:33:44:55</Text>
          </View>
          <View style={[style.marginBox, style.borderContent]}>
            <View style={[style.row, style.paddingText]}>
              <Image source={require('../icon/add.png')} style={[style.pictureSize, style.marginBox]} />
              <Text style={[style.text18, style.textBlue, style.paddingText]}>THÊM THIẾT BỊ WIFI</Text>
            </View>
          </View>
          <View style={[style.marginBox]}>
            <View>
              <Text style={[style.paddingText, style.text13]}>ĐỊA ĐIỂM CHẤM CÔNG</Text>
            </View>
            <View style={[style.paddingText]}>
              <Text style={[style.paddingText, style.text13, style.textWeight, style.textBlack]}>Văn Phòng A26</Text>
              <Text style={[style.text13]}>Tố Hữu, Vạn Phúc, Hà Đông, Hà Nội, Vietnam</Text>
            </View>
          </View>
          <View style={[style.marginBox, style.borderContent]}>
            <View style={[style.row, style.paddingText]}>
              <View>
                <Image source={require('../icon/add.png')} style={[style.pictureSize, style.marginBox]} />
              </View>
              <Text style={[style.text18, style.textBlue, style.paddingText]}>THÊM ĐỊA ĐIỂM CHẤM CÔNG</Text>
            </View>
          </View>
          <View style={[style.marginBox, style.borderBottomContent]}>
            <Text style={[style.text13, style.paddingText]}>Chế độ chấm công tính lương</Text>
            <View style={[style.row, style.betweenContent]}>
              <View>
                <Text style={[style.text18, style.textBlack, style.paddingText]}>Ca kíp</Text>
              </View>
              <View>
                <Image source={require('../icon/down.png')} style={[style.marginBox, style.pictureSize]} />
              </View>
            </View>
          </View>
          <View style={[style.marginBox]}>
            <Text style={[style.text13, style.paddingText]}>Số lần chấm công trong ngày</Text>
            <View style={[style.row, style.paddingText]}>
              <View style={[style.header, style.borderBox]}>
                <Text style={[style.text18, style.textBlack, style.textCenter, style.paddingText]}>1 lần</Text>
              </View>
              <View style={[style.header, style.borderBox, style.blueColor]}>
                <Text style={[style.text18, style.textWhite, style.textCenter, style.paddingText]}>2 lần</Text>
              </View>
              <View style={[style.header, style.borderBox]}>
                <Text style={[style.text18, style.textBlack, style.textCenter, style.paddingText]}>3 lần</Text>
              </View>
              <View style={[style.header, style.borderBox]}>
                <Text style={[style.text18, style.textBlack, style.textCenter, style.paddingText]}>4 lần</Text>
              </View>
            </View>
          </View>
          <View style={[style.marginBox]}>
            <Text style={[style.text13, style.paddingText]}>Cách tinh công trong ngày</Text>
            <View style={[style.row]}>
              <View style={[style.header, style.row]}>
                <View>
                  <Image source={require('../icon/circleBlue.png')} style={[style.pictureSize, style.marginBox]} />
                </View>
                <Text style={[style.text18, style.textBlack, style.paddingText]}>Quy tròn</Text>
              </View>
              <View style={[style.header, style.row]}>
                <View>
                  <Image source={require('../icon/circleBlack.png')} style={[style.pictureSize, style.marginBox]} />
                </View>
                <Text style={[style.text18, style.paddingText]}>Chính xác</Text>
              </View>
            </View>
          </View>
          <View style={[style.marginBox, style.borderBottomContent]}>
            <Text style={[style.text13, style.paddingText]}>Sô giờ làm việc tối thiểu để tính công</Text>
            <View style={[style.row, style.betweenContent]}>
              <View>
                <Text style={[style.text18, style.textBlack, style.paddingText]}>8 giờ</Text>
              </View>
              <View>
                <Image source={require('../icon/down.png')} style={[style.marginBox, style.pictureSize]} />
              </View>
            </View>
          </View>
          <View style={[style.marginBox, style.borderBottomContent]}>
            <Text style={[style.text13, style.paddingText]}>Cho phép đi muộn về sớm</Text>
            <View style={[style.row, style.betweenContent]}>
              <View>
                <Text style={[style.text18, style.textBlack, style.paddingText]}>5 phút</Text>
              </View>
              <View>
                <Image source={require('../icon/down.png')} style={[style.marginBox, style.pictureSize]} />
              </View>
            </View>
          </View>
          <View style={[style.marginBox, style.borderBottomContent]}>
            <View style={[style.row, style.betweenContent]}>
              <View>
                <Text style={[style.text18, style.textBlack, style.paddingText]}>Kiểm soát đi muộn về sớm</Text>
              </View>
              <View>
                <Image source={require('../icon/toggleOff.png')} style={[style.marginBox, style.pictureToggle]} />
              </View>
            </View>
          </View>
          <View style={[style.marginBox, style.borderBottomContent]}>
            <View style={[style.row, style.betweenContent]}>
              <View>
                <Text style={[style.text18, style.textBlack, style.paddingText]}>Tự động checkout cuối giờ</Text>
              </View>
              <View>
                <Image source={require('../icon/toggleOn.png')} style={[style.marginBox, style.pictureToggle]} />
              </View>
            </View>
          </View>
          <View style={[style.marginBox, style.borderBottomContent]}>
            <View style={[style.row, style.betweenContent]}>
              <View>
                <Text style={[style.text18, style.textBlack, style.paddingText]}>Kiểm soát thiết bị chấm công</Text>
              </View>
              <View>
                <Image source={require('../icon/toggleOn.png')} style={[style.marginBox, style.pictureToggle]} />
              </View>
            </View>
          </View>
        </View>
        <View style={[style.footer, style.marginBox, style.centerItem]}>
          <View style={[style.boxFooterSize, style.borderFooter, style.centerItem]}>
            <Text style={[style.text14, style.textBlue]}>Lưu thông tin</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1
  },
  content: {
    flex: 3
  },
  footer: {
    flex: 1
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  heightTitle: {
    height: 50
  },
  blueColor: {
    backgroundColor: '#01a1ff'
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  borderHeader: {
    borderBottomWidth: 2,
    borderBottomColor: '#01a1ff'
  },
  marginBox: {
    margin: 10
  },
  paddingText: {
    paddingBottom: 5,
    paddingTop: 5
  },
  text18: {
    fontSize: 18
  },
  text13: {
    fontSize: 13
  },
  betweenContent: {
    justifyContent: 'space-between'
  },
  textBlack: {
    color: 'black'
  },
  textWhite: {
    color: 'white'
  },
  textBlue: {
    color: '#01a1ff'
  },
  textWeight: {
    fontWeight: 'bold'
  },
  pictureSize: {
    height: 15,
    width: 15
  },
  borderContent: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#c1c4c6'
  },
  borderBottomContent: {
    borderBottomWidth: 1,
    borderColor: '#c1c4c6'
  },
  borderBox: {
    borderWidth: 1,
    borderColor: '#c1c4c6'
  },
  textCenter: {
    textAlign: 'center'
  },
  pictureToggle: {
    height: 25,
    width: 25
  },
  boxFooterSize: {
    height: 30,
    width: 180
  },
  borderFooter: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#01a1ff'
  }
});
