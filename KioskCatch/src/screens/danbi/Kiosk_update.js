import 'react-native-gesture-handler';
import {
  useNavigation,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

function Kiosk_update({navigation}) {
  console.log('navigation ' + navigation);
  return (
    <ImageBackground
      source={require('KioskCatch/assets/img/main/background.png')}
      style={styles.bgImage}>
      <View style={[styles.container]}>
        <Image
          source={require('KioskCatch/assets/img/main/main_logo.png')}
          style={styles.logoImage}
        />
        <Image
          source={require('KioskCatch/assets/img/main/title.png')}
          style={styles.title}
        />
        <View style={styles.btn}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.btn_text_1}>추후 업데이트 예정입니다</Text>
            <Text style={styles.btn_text_2}>'뒤로가기' 버튼을 눌러주세요</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => navigation.navigate('Home')}>
          <Icon_Entypo name="home" size={23} style={styles.home_icon} />
          <Text style={styles.btn_text_3}>홈으로 돌아가기</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
export default Kiosk_update;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // elevation : '3'
  },
  logoImage: {
    width: '100%',
    height: '30%',
    // flex: 5,
    alignItems: 'baseline',
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: -20,
    // justifyContent: 'center',
    // elevation:'1'
  },
  btnImage: {
    width: '30%',
    height: '85%',
    resizeMode: 'contain',
    marginRight: 30,
  },
  btnImage2: {
    width: '30%',
    height: '85%',
    resizeMode: 'contain',
    marginRight: 30,
  },
  title: {
    width: '100%',
    height: '14%',
    resizeMode: 'contain',
    marginBottom: 50,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#FFA800',
    alignItems: 'center',
    justifyContent: 'center',
    height: '16%',
    width: '90%',
    borderRadius: 17,
    //elevation: 10,
  },
  btn_text_1: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 30,
    color: 'black',
  },
  btn_text_2: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  homeBtn: {
    flexDirection: 'row',
    backgroundColor: '#FFA800',
    //borderWidth: 4,
    //borderColor: '#FFA800',
    alignItems: 'center',
    justifyContent: 'center',
    height: '6%',
    width: '45%',
    borderRadius: 100,
    elevation: 10,
    marginTop: 140,
  },
  home_icon: {
    color: 'white',
    marginRight: 5,
  },
  btn_text_3: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: 'white',
  },
});
