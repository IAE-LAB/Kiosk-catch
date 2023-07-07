import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';

function Kiosk_practical({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.h1_container}>
        <Text style={styles.h1}>🤗 실전처럼 이용하기</Text>
      </View>
      <TouchableOpacity
        style={styles.btn1}
        onPress={() => navigation.navigate('Kiosk_difficulty_high')}
        >
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.btn_text}>난이도 : </Text>
            <Text style={styles.btn_text_1}>상</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn2}
        onPress={() => navigation.navigate('Kiosk_difficulty_medium')}
        >
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.btn_text}>난이도 : </Text>
            <Text style={styles.btn_text_2}>중</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn3}
        onPress={() => navigation.navigate('Kiosk_difficulty_low')}
        >
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.btn_text}>난이도 : </Text>
            <Text style={styles.btn_text_3}>하</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.h1_container_2}>
        <Text style={styles.h1}>🤗 키오스크 이용하기</Text>
      </View>
      <TouchableOpacity
        style={styles.btn4}
        // onPress={() => navigation.navigate('Kiosk_useFreely')}
        onPress={() => navigation.navigate('Kiosk_free_learning')}
        >
        <Image
          source={require('KioskCatch/assets/img/main/simulation_icon_yellow.png')}
          style={styles.btnImage}
        /> 
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.btn_text_4}>키오스크</Text>
          <Text style={styles.btn_text_4}>자유롭게</Text>
          <Text style={styles.btn_text_4}>이용하기</Text>
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
    marginBottom: 20,
  },
  h1: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 25,
    color: 'black',
    marginBottom: 2,
  },
  btn1: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EE0000',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '100%',
    borderRadius: 17,
    marginBottom: 20,
    elevation: 10,
  },
  btn2: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#00A150',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '100%',
    borderRadius: 17,
    marginBottom: 20,
    elevation: 10,
  },
  btn3: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#00A3FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '100%',
    borderRadius: 17,
    marginBottom: 20,
    elevation: 10,
  },
  h1_container_2: {
    flexDirection: 'row',
    borderBottomColor: '#FFC000',
    borderBottomWidth: 2,
    marginBottom: 20,
    marginTop: 30,
  },
  btn4: {
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#FFA800',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
    width: '100%',
    borderRadius: 17,
    marginBottom: 20,
    elevation: 10,
    flexDirection: 'row',
  },
  btnImage: {
    width: '30%',
    //height: '80%',
    resizeMode: 'contain',
    marginRight: 30,
  },
  btn_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 23,
    color: 'black',
  },
  btn_text_1: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 23,
    color: '#EE0000',
  },
  btn_text_2: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 23,
    color: '#00A150',
  },
  btn_text_3: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 23,
    color: '#00A3FF',
  },
  btn_text_4: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 30,
    color: 'black',
  },
});

export default Kiosk_practical;
