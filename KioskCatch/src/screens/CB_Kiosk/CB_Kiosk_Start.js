import React, {useRef, useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

import StageHeader from 'KioskCatch/src/components/Kiosk/Stage';

export default function CB_Kiosk_Start({navigation, route}) {
  return (
    <View style={styles.contents}>
      <ImageBackground
        source={require('KioskCatch/assets/img/CB_Kiosk/CB_kiosk_bg.png')}
        style={styles.bgImage}>
        <View style={styles.black_layer}></View>

        <TouchableOpacity
          style={styles.background}
          onPress={() => navigation.navigate('CB_Kiosk_Explore')}>
          <View style={styles.btn}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Text style={styles.btn_text}>"</Text>
              <Text style={styles.btn_text_highlight}>주문</Text>
              <Text style={styles.btn_text}>을 하시려면 </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.btn_text}>화면을 </Text>
              <Text style={styles.btn_text_highlight}>터치</Text>
              <Text style={styles.btn_text}>해주세요"</Text>
            </View>
          </View>
        </TouchableOpacity>
        <StageHeader
          state={route.params.state}
          navigation={navigation}
          style={{zIndex: 1}}
        />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  contents: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  black_layer: {
    zIndex: 1,
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
  },
  background: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    zIndex: 1,
    position: 'relative',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  btn_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 30,
    color: 'white',
  },
  btn_text_highlight: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 30,
    color: '#E02649',
  },
});
