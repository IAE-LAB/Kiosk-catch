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
  ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';
import Icon_MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Fontisto from 'react-native-vector-icons/Fontisto';

const KioskState = {
  stage: [
    ['1-1', '시작'],
    ['2-1', '카테고리 확인'],
    ['2-1T', '카테고리 확인'],
    ['2-1-2', '카테고리 확인'],
    ['2-2', '메뉴 선택'],
    ['2-3', '옵션 선택'],
    ['2-4', '옵션 선택'],
    ['2-5', '옵션 선택'],
    ['2-6', '옵션 선택'],
    ['3-1', '장바구니'],
    ['3-2', '장바구니'],
    ['3-3', '주문하기'],
    ['3-4', '식사 장소 선택'],
    ['3-5', '주문 내역 확인'],
    ['4-1', '결제'],
    ['4-2', '결제'],
    ['4-3', '결제 완료'],
    ['4-4', '결제 완료'],
    ['4-5', '멤버십 적립'],
    ['4-6', '주문번호 받기'],
  ],
};

export default function Tutorial_LRkiosk_list({navigation}) {
  return (
    <ScrollView style={styles.container}>
      {/* 키오스크 시작하기 버튼 */}
      <View style={{alignItems: 'center', height: 280, marginTop: -20}}>
        <Image
          source={require('KioskCatch/assets/img/tutorial_list/LR_kiosk_img.png')}
          style={styles.btnImage}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('LR_Kiosk_Start', {
              KioskState: KioskState,
              state: KioskState.stage[0],
            })
          }>
          <Text style={{fontSize: 35, marginRight: 10}}>👋</Text>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.btn_text}>좌우구조</Text>
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
      <TouchableOpacity
        style={styles.stagebtn}
        onPress={() =>
          navigation.navigate('LR_Kiosk_Explore', {
            KioskState: KioskState,
            state: ['2-1', '카테고리 확인'],
            CategoryState: 'coffee',
            PageState: 1,
            visibleOption: {
              basicOption: 0,
              order: 0,
              takeoutOption: 0,
              payment: 0,
              pay: 0,
              final: 0,
            },
          })
        }>
        <Icon_Fontisto name="search" size={22} style={styles.stage_icon} />
        <Text style={styles.stage_text}>1. 메뉴 </Text>
        <Text style={styles.stage_text_highlight}>탐색</Text>
        <Text style={styles.stage_text}>하기</Text>
      </TouchableOpacity>
      {/* 2. 메뉴 선택하기 */}
      <TouchableOpacity
        style={styles.stagebtn}
        onPress={() =>
          navigation.navigate('LR_Kiosk_Explore', {
            KioskState: KioskState,
            state: ['2-2-1', '메뉴 선택'],
            CategoryState: 'coffee',
            PageState: 2,
            visibleOption: {
              basicOption: 0,
              order: 0,
              takeoutOption: 0,
              payment: 0,
              pay: 0,
              final: 0,
            },
          })
        }>
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
      <TouchableOpacity
        style={styles.stagebtn}
        onPress={() =>
          navigation.navigate('LR_Kiosk_Explore', {
            KioskState: KioskState,
            state: ['2-3', '옵션 선택'],
            CategoryState: 'coffee',
            PageState: 2,
            visibleOption: {
              basicOption: 1,
              order: 0,
              takeoutOption: 0,
              payment: 0,
              pay: 0,
              final: 0,
            },
          })
        }>
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
      <TouchableOpacity
        style={styles.stagebtn}
        onPress={() =>
          navigation.navigate('LR_Kiosk_Explore', {
            KioskState: KioskState,
            state: ['3-1', '장바구니'],
            CategoryState: 'coffee',
            PageState: 2,
            visibleOption: {
              basicOption: 0,
              order: 0,
              takeoutOption: 0,
              payment: 0,
              pay: 0,
              final: 0,
            },
          })
        }>
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
      <TouchableOpacity
        style={styles.stagebtn}
        onPress={() =>
          navigation.navigate('LR_Kiosk_Explore', {
            KioskState: KioskState,
            state: ['3-3', '식사 장소 선택'],
            CategoryState: 'coffee',
            PageState: 2,
            visibleOption: {
              basicOption: 0,
              order: 0,
              takeoutOption: 1,
              payment: 0,
              pay: 0,
              final: 0,
            },
          })
        }>
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
      <TouchableOpacity
        style={styles.stagebtn}
        onPress={() =>
          navigation.navigate('LR_Kiosk_Explore', {
            KioskState: KioskState,
            state: ['4-1', '결제 방식 선택'],
            CategoryState: 'coffee',
            PageState: 2,
            visibleOption: {
              basicOption: 0,
              order: 0,
              takeoutOption: 0,
              payment: 1,
              pay: 0,
              final: 0,
            },
          })
        }>
        <Icon_MaterialCommunityIcons
          name="credit-card-outline"
          size={25}
          style={styles.stage_icon}
        />
        <Text style={styles.stage_text}>6. </Text>
        <Text style={styles.stage_text_highlight}>결제</Text>
        <Text style={styles.stage_text}>하기</Text>
      </TouchableOpacity>
    </ScrollView>
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
    color: '#005D2E',
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
    color: '#005D2E',
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
    borderColor: '#005D2E',
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

/*
  키오스크 단계 State

  ** KioskState.stage[][0] -> 과업단계
  ** KioskState.stage[][1] -> 헤더에 나오는 이름

  --------------------------
  # 화면 터치하기
  (시작) 과업(세부과업) : 화면 터치하기(화면 터치하기)  ***** stage_header_(1)시작 단계 *****
      KioskState.stage[0][]
  KioskState.stage[0][0] : 1-1
  KioskState.stage[0][1]: 시작
  
  --------------------------
  # 메뉴선택
  (탐색) 과업(세부과업) : 메뉴 선택(카테고리 확인하기) ***** stage_header_(2)탐색 단계 *****
      KioskState.stage[1][]
  KioskState.stage[1][0] : 2-1
  KioskState.stage[1][1]: 카테고리 확인

  (탐색) 과업(세부과업) : 메뉴 선택(메뉴 선택하기)
      KioskState.stage[2][]
  KioskState.stage[2][0] : 2-2
  KioskState.stage[2][1]: 메뉴 선택 
  --------------------------
  # 옵션선택
  (탐색) 과업(세부과업) : 옵션 선택(온도 선택)
      KioskState.stage[3][]
  KioskState.stage[3][0] : 2-3 
  KioskState.stage[3][1]: 옵션 선택

  (탐색) 과업(세부과업) : 옵션 선택(사이즈 선택)
      KioskState.stage[4][]
  KioskState.stage[4][0] : 2-4
  KioskState.stage[4][1]: 옵션 선택

  (탐색) 과업(세부과업) : 옵션 선택(추가 옵션 선택)
      KioskState.stage[5][]
  KioskState.stage[5][0] : 2-5 
  KioskState.stage[5][1]: 옵션 선택

  (탐색) 과업(세부과업) : 옵션 선택(메뉴 담기)
      KioskState.stage[6][]
  KioskState.stage[6][0] : 2-6 
  KioskState.stage[6][1]: 옵션 선택
  --------------------------
  # 주문
  (탐색) 과업(세부과업) : 장바구니(수량조절(추가)) ***** stage_header_(3)주문 단계 *****
      KioskState.stage[7][]
  KioskState.stage[7][0] : 3-1 
  KioskState.stage[7][1]: 장바구니

  (탐색) 과업(세부과업) : 장바구니(수량조절(삭제))
      KioskState.stage[8][]
  KioskState.stage[8][0] : 3-2 
  KioskState.stage[8][1]: 장바구니

  (탐색) 과업(세부과업) : 주문하기(주문하기버튼 클릭하기)
      KioskState.stage[9][]
  KioskState.stage[9][0] : 3-3 
  KioskState.stage[9][1]: 주문하기

  (탐색) 과업(세부과업) : 식사 장소 선택(매장취식 혹은 포장하기 선택하기)
      KioskState.stage[10][]
  KioskState.stage[10][0] : 3-4
  KioskState.stage[10][1]: 식사 장소 선택

  (탐색) 과업(세부과업) : 주문 내역 확인(주문 내역 확인)
      KioskState.stage[11][]
  KioskState.stage[11][0] : 3-5
  KioskState.stage[11][1]: 주문 내역 확인
  --------------------------
  # 결제
  (탐색) 과업(세부과업) : 결제하기(결제하기 버튼 누르기) ***** stage_header_(4)결제 단계 *****
      KioskState.stage[12][]
  KioskState.stage[12][0] : 4-1
  KioskState.stage[12][1]: 결제

  (탐색) 과업(세부과업) : 결제 방식 선택(신용카드 선택하기)
      KioskState.stage[13][]
  KioskState.stage[13][0] : 4-2
  KioskState.stage[13][1]: 결제

  (탐색) 과업(세부과업) : 결제(신용카드 넣기)
      KioskState.stage[14][]
  KioskState.stage[14][0] : 4-3
  KioskState.stage[14][1]: 결제

  (탐색) 과업(세부과업) : 결제 완료(-)
      KioskState.stage[15][]
  KioskState.stage[15][0] : 4-4
  KioskState.stage[15][1]: 결제 완료

  (탐색) 과업(세부과업) : 멤버십 적립(멤버십 적립 번호 혹은 넘어가기)
      KioskState.stage[16][]
  KioskState.stage[16][0] : 4-5
  KioskState.stage[16][1]: 멤버십 적립

  (탐색) 과업(세부과업) : 주문번호 받기(주문번호 받기) ***** stage_header_(5)결제 완료 단계 *****
      KioskState.stage[17][]
  KioskState.stage[17][0] : 4-6
  KioskState.stage[17][1]: 주문번호 받기

*/
