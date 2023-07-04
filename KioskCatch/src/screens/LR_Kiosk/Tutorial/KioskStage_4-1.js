import React, {useRef, useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default KioskStage_2_2_1 = props => {
  var [Parameter, setParameter] = useState({
    offsetX: 0,
    offsetY: 0,
    offsetWidth: 0,
    offsetHeight: 0,
  });

  var [Opacity, setOpacity] = useState(Ostyles.opTrue);

  useEffect(() => {
    // console.log('props.OptionRef.current' + props.OptionRef.current);
    props.OptionRef.current.measureInWindow((x, y, width, height) => {
      console.log('-----------MenuRef----------------');

      var tempX = x;
      var tempY = y - props.headerHeight;

      setParameter({
        offsetX: tempX,
        offsetY: tempY,
        offsetWidth: width,
        offsetHeight: height,
      });
    });
  }, [
    Parameter.offsetX,
    Parameter.offsetY,
    Parameter.offsetHeight,
    Parameter.offsetWidth,
  ]);

  return (
    <ImageBackground
      source={require('KioskCatch/assets/img/kiosk/blackbackG.png')}
      style={[styles.blackImg, Opacity]}>
      <TouchableOpacity
        style={{width: width, height: height}}
        onPress={() => {
          setOpacity(Ostyles.opFalse);
          props.SetKioskState(['4-1T', '결제 방식 선택']);
        }}>
        <View
          style={{
            position: 'relative',
            top: Parameter.offsetY,
            left: Parameter.offsetX,
          }}>
          <View
            // ref={props.state}
            style={[
              styles.taskBox,
              {
                height: Parameter.offsetHeight,
                width: Parameter.offsetWidth,
              },
            ]}>
            <View style={styles.taskName}>
              <Text
                style={{
                  fontFamily: 'NanumSquare_acEB',
                  fontSize: 25,
                  color: 'white',
                }}>
                결제 방법
              </Text>
            </View>

            <View style={styles.taskBubble}>
              <Icon_Entypo
                name="controller-volume"
                size={40}
                style={styles.taskBubbleTail_icon}
              />
              <View style={styles.taskIofo}>
                <Text style={styles.taskTxt}>
                  원래는 신용카드를 눌러 결제를 진행해요
                </Text>
                <Text style={styles.taskTxt}>
                  이번에는 모바일 쿠폰을 이용하여
                </Text>
                <Text style={styles.taskTxt}>결제를 진행해보아요</Text>
              </View>
            </View>
          </View>
          {/* <MenuKR_Tutorial /> */}
        </View>

        <Text style={[styles.clickTxt]}>설명 확인 후, 화면을 클릭해주세요</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const MenuKR_Tutorial = props => {
  return (
    // <View style={{position: 'absolute', top: 0, bottom: 0}}>
    <View style={[styles.menu_LR]}>
      <View style={styles.LR_btn}>
        <Text style={styles.LR_text}>이전</Text>
      </View>
      <View style={[styles.circle, {opacity: 0}]}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      </View>
      <View style={styles.LR_btn}>
        <Text style={styles.LR_text}>다음</Text>
      </View>
    </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  menu_LR: {
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LR_btn: {
    backgroundColor: '#FFC000',
    borderColor: 'white',
    borderWidth: 2,
    width: '25%',
    height: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 33,
  },
  LR_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 18,
    color: 'black',
  },
  circle: {
    flexDirection: 'row',
    height: '300%',
    width: '23%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle1: {
    height: '10%',
    width: '10%',
    backgroundColor: '#FFC000',
    borderRadius: 10,
    marginRight: 5,
  },
  circle2: {
    height: '10%',
    width: '10%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FFC000',
    borderRadius: 10,
  },
  blackImg: {
    zIndex: 50,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  tutorial_contents: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  taskName: {
    backgroundColor: '#FFC000',
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    top: -35,
  },
  taskBox: {
    width: '100%',
    height: 318,
    borderColor: '#FFC000',
    borderWidth: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  tutorial_btn: {
    backgroundColor: '#FFC000',
    height: 30,
    width: 95,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tutorial_pointer_icon: {
    color: '#FFC000',
    position: 'absolute',
    top: 465,
    left: 220,
    transform: [{rotate: '90deg'}],
  },
  taskBubble: {
    alignItems: 'center',
    top: -230,
  },
  taskBubbleTail_icon: {
    color: 'white',
    top: 95,
    left: 125,
    transform: [{rotate: '-90deg'}],
  },
  taskIofo: {
    backgroundColor: 'white',
    width: 325,
    height: 85,
    alignContent: 'center',
    justifyContent: 'center',
    top: -16,
    borderRadius: 20,
  },
  taskTxt: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: '#FFC000',
    textAlign: 'center',
  },
  clickTxt: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: '#FFC000',
    textAlign: 'center',
    top: 220,
    justifyContent: 'flex-end',
  },
});
const Ostyles = {
  opTrue: {
    opacity: 100,
  },
  opFalse: {
    opacity: 0,
  },
};
