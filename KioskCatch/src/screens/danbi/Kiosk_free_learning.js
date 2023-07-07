import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';

function Kiosk_free_learning({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.text_btn}>
        <Text style={styles.text}>자유 학습은 미션 없이 자유롭게</Text>
        <Text style={styles.text}>사용할 수 있어요!</Text>
      </View>
      
      <View style={styles.h1_container}>
        <Text style={styles.h1}>😊 키오스크 유형 선택하기</Text>
      </View>

      {/* 좌우 구조 키오스크 버튼 */}
      <TouchableOpacity
        style={styles.btn1}
        // onPress={() => navigation.navigate('Tutorial_LRkiosk_list')}
        >
        <Image
          source={require('KioskCatch/assets/img/tutorial_1/kiosk_icon_1.png')}
          style={styles.btnImage}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={[styles.btn_text, {color: '#005D2E'}]}>좌우 구조</Text>
          <Text style={styles.btn_text_2}>체험하기</Text>
        </View>
      </TouchableOpacity>

      {/* 통합 구조 키오스크 버튼 */}
      <TouchableOpacity
        style={styles.btn2}
        // onPress={() => navigation.navigate('Tutorial_CBkiosk_list')}
        >
        <Image
          source={require('KioskCatch/assets/img/tutorial_1/kiosk_icon_2.png')}
          style={styles.btnImage}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={[styles.btn_text, {color: '#E02649'}]}>통합 구조</Text>
          <Text style={styles.btn_text_2}>체험하기</Text>
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
  text_btn: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#C6C6C6',
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: '12%',
    width: '100%',
    borderRadius: 17,
    elevation: 10,
  },
  text: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 20,
    color: 'black',
    marginBottom: 2,
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
  btn1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#005D2E',
    alignItems: 'center',
    // justifyContent: 'center',
    height: '34%',
    width: '100%',
    borderRadius: 17,
    marginBottom: 30,
    elevation: 10,
  },
  btn2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#E02649',
    alignItems: 'center',
    // justifyContent: 'center',
    height: '34%',
    width: '100%',
    borderRadius: 17,
    marginBottom: 30,
    elevation: 10,
  },
  btnImage: {
    width: '47%',
    height: '100%',
    resizeMode: 'cover',
    marginLeft: -10.8,
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

export default Kiosk_free_learning;
