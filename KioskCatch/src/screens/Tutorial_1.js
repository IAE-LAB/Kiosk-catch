import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';

function Tutorial_1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.h1_container}>
        <Text style={styles.h1}>🤗 키오스크 배워보기</Text>
      </View>
      {/* 일반적인 좌우구조 키오스크 배우기 버튼 */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Tutorial_LRkiosk_list')}>
        <Image
          source={require('KioskCatch/assets/img/tutorial_1/kiosk_icon_1.png')}
          style={styles.btnImage}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.btn_text}>일반적인</Text>
          <Text style={[styles.btn_text, {color: '#005D2E'}]}>좌우 구조</Text>
          <Text style={styles.btn_text_2}>키오스크</Text>
          <Text style={styles.btn_text_2}>배워보기</Text>
        </View>
      </TouchableOpacity>
      {/* 통합구조 키오스크 배우기 버튼 */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Tutorial_CBkiosk_list')}>
        <Image
          source={require('KioskCatch/assets/img/tutorial_1/kiosk_icon_2.png')}
          style={styles.btnImage}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={[styles.btn_text, {color: '#E02649'}]}>통합 구조</Text>
          <Text style={styles.btn_text_2}>키오스크</Text>
          <Text style={styles.btn_text_2}>배워보기</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25,
  },
  h1_container: {
    flexDirection: 'row',
    borderBottomColor: '#FFC000',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  h1: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 25,
    color: 'black',
    marginBottom: 2,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    alignItems: 'center',
    // height: 211,
    height: '34%',
    width: '100%',
    borderRadius: 17,
    marginBottom: 30,
    elevation: 10,
  },
  btnImage: {
    marginTop: 2,
    width: '48%',
    height: '112%',
    resizeMode: 'contain',
    marginLeft: -12,
  },
  btn_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 30,
    color: 'black',
  },
  btn_text_2: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 30,
    color: 'black',
  },
});

export default Tutorial_1;
