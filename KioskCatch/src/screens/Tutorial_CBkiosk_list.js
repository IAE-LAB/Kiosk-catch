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
import 'react-native-gesture-handler';
import Icon_MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Fontisto from 'react-native-vector-icons/Fontisto';

export default function Tutorial_CBkiosk_list({navigation}) {
  return (
    <View style={styles.container}>
      {/* 키오스크 시작하기 버튼 */}
      <View style={{alignItems: 'center', height: 280, marginTop: -20}}>
        <Image
          source={require('KioskCatch/assets/img/tutorial_list/C_kiosk_img.png')}
          style={styles.btnImage}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('CB_Kiosk')}>
          <Text style={{fontSize: 35, marginRight: 10}}>👋</Text>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.btn_text}>통합구조</Text>
            <Text style={styles.btn_text}>키오스크 시작하기</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.horizonLine}></View>
      <View style={styles.h1_container}>
        {/* 단계별 배워보기 */}
        <Text style={styles.h1}>☺️ 단계별 배워보기</Text>
      </View>
      {/* 1. 메뉴 탐색하기 */}
      <TouchableOpacity style={styles.stagebtn}>
        <Icon_Fontisto name="search" size={22} style={styles.stage_icon} />
        <Text style={styles.stage_text}>1. 메뉴 </Text>
        <Text style={styles.stage_text_highlight}>탐색</Text>
        <Text style={styles.stage_text}>하기</Text>
      </TouchableOpacity>
      {/* 2. 메뉴 선택하기 */}
      <TouchableOpacity style={styles.stagebtn}>
        <Icon_MaterialIcons
          name="restaurant-menu"
          style={styles.stage_icon}
          size={25}
        />
        <Text style={styles.stage_text}>2. 메뉴 </Text>
        <Text style={styles.stage_text_highlight}>선택</Text>
        <Text style={styles.stage_text}>하기</Text>
      </TouchableOpacity>
      {/* 3. 옵션 선택하기 */}
      <TouchableOpacity style={styles.stagebtn}>
        <Icon_MaterialCommunityIcons
          name="checkbox-marked-outline"
          size={25}
          style={styles.stage_icon}
        />
        <Text style={styles.stage_text}>3. </Text>
        <Text style={styles.stage_text_highlight}>옵션 </Text>
        <Text style={styles.stage_text}>선택하기</Text>
      </TouchableOpacity>
      {/* 4. 장바구니 */}
      <TouchableOpacity style={styles.stagebtn}>
        <Icon_MaterialCommunityIcons
          name="cart"
          size={25}
          style={styles.stage_icon}
        />
        <Text style={styles.stage_text}>4. </Text>
        <Text style={styles.stage_text_highlight}>장바구니 </Text>
        <Text style={styles.stage_text}>확인하기</Text>
      </TouchableOpacity>
      {/* 5. 주문하기 */}
      <TouchableOpacity style={styles.stagebtn}>
        <Icon_MaterialCommunityIcons
          name="basket-check"
          size={25}
          style={styles.stage_icon}
        />
        <Text style={styles.stage_text}>5. </Text>
        <Text style={styles.stage_text_highlight}>주문</Text>
        <Text style={styles.stage_text}>하기</Text>
      </TouchableOpacity>
      {/* 6. 결제하기 */}
      <TouchableOpacity style={styles.stagebtn}>
        <Icon_MaterialCommunityIcons
          name="credit-card-outline"
          size={25}
          style={styles.stage_icon}
        />
        <Text style={styles.stage_text}>6. </Text>
        <Text style={styles.stage_text_highlight}>결제</Text>
        <Text style={styles.stage_text}>하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  stagebtn: {
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: '#C6C6C6',
    width: '100%',
    height: 44,
    alignItems: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  stage_icon: {
    color: '#FFC000',
    marginRight: 10,
  },
  stage_text: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 20,
    color: 'black',
  },
  stage_text_highlight: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: '#FFC000',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 25,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: '#FFC000',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: 311,
    borderRadius: 17,
    marginTop: -110,
    elevation: 7,
    flexDirection: 'row',
  },
  btn_container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
  },
  btnImage: {
    width: '70%',
    height: '100%',
    resizeMode: 'contain',
    elevation: 10,
  },
  btn_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 25,
    color: 'black',
  },
  horizonLine: {
    margin: 10,
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#E6E6E6',
    marginTop: -1,
  },
  h1_container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  h1: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 25,
    color: 'black',
    marginBottom: 2,
  },
});
