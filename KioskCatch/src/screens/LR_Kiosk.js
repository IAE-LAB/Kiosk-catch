import React from 'react';
import 'react-native-gesture-handler';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function LR_Kiosk({navigation}) {
  return (
    <View style={styles.contents}>
      <ImageBackground
        source={require('KioskCatch/assets/img/LR_kiosk/LR_kiosk_bg.jpg')}
        style={styles.bgImage}>
        <View style={styles.stagebtn}>
          <TouchableOpacity style={styles.stageStart}>
            <Text style={styles.stage_text}>시작</Text>
            <Icon_MaterialCommunityIcons
              name="adjust"
              size={40}
              style={{color: '#FFC000', alignItems: 'center'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.stageExploratory}>
            <Text style={styles.stage_text}>탐색</Text>
            <Icon_MaterialCommunityIcons
              name="adjust"
              size={40}
              style={{color: '#9CA3AF', alignItems: 'center'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.stageOrder}>
            <Text style={styles.stage_text}>주문</Text>
            <Icon_MaterialCommunityIcons
              name="adjust"
              size={40}
              style={{color: '#9CA3AF', alignItems: 'center'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.stagePayment}>
            <Text style={styles.stage_text}>결제</Text>
            <Icon_MaterialCommunityIcons
              name="adjust"
              size={40}
              style={{color: '#9CA3AF', alignItems: 'center'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.hairline1} />
        <View style={styles.hairline2} />
        <View style={styles.hairline3} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('LR_Kiosk_explore_tutorial_1')}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.btn_text}>"</Text>
            <Text style={styles.btn_text_highlight}>주문</Text>
            <Text style={styles.btn_text}>을 하시려면 </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.btn_text}>화면을 </Text>
            <Text style={styles.btn_text_highlight}>터치</Text>
            <Text style={styles.btn_text}>해주세요"</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  // stagebtn: {
  //   backgroundColor: 'white',
  //   height: 80,
  //   borderBottomLeftRadius: 20,
  //   borderBottomRightRadius: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // stageStart: {
  //   padding: 20,
  //   alignItems: 'center',
  // },
  // stageExploratory: {
  //   padding: 20,
  //   alignItems: 'center',
  // },
  // stageOrder: {
  //   padding: 20,
  //   alignItems: 'center',
  // },
  // stagePayment: {
  //   padding: 20,
  //   alignItems: 'center',
  // },
  // stage_text: {
  //   fontFamily: 'NanumSquare_acEB',
  //   fontSize: 22,
  //   color: 'black',
  //   alignItems: 'center',
  // },
  // hairline1: {
  //   position : 'absolute',
  //   top: 52,
  //   left: 56,
  //   backgroundColor: '#D1D5DB',
  //   height: 3,
  //   width: 72,
  // },
  // hairline2: {
  //   position : 'absolute',
  //   top: 52,
  //   left: 160,
  //   backgroundColor: '#D1D5DB',
  //   height: 3,
  //   width: 72,
  // },
  // hairline3: {
  //   position : 'absolute',
  //   top: 52,
  //   left: 265,
  //   backgroundColor: '#D1D5DB',
  //   height: 3,
  //   width: 72,
  // },
  bgImage: {
    //flex: 1,
    // width: '100%',
    // height: '100%',
  },
  btn: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 30,
    color: 'black',
  },
  btn_text_highlight: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 30,
    color: '#005D2E',
  },
});
