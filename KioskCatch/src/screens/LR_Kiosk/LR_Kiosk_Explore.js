import React, {useRef, useState, useEffect} from 'react';
import 'react-native-gesture-handler';

import * as Animatable from 'react-native-animatable';

import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

import {useHeaderHeight} from '@react-navigation/elements';
import KioskStage_2_1 from './Tutorial/KioskStage_2-1';
import StageHeader from 'KioskCatch/src/components/Kiosk/Stage';

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';
import styles from '../../style/LR_Kiosk/LR_Kiosk_Explore';

export default function LR_Kiosk_Explore({navigation, route}) {
  const KioskState = route.params.KioskState;

  const CatagoryRef = useRef();
  const TutorialRef = useRef();
  const headerHeight = useHeaderHeight();
  check = 0;

  return (
    <View style={styles.contents}>
      <Image
        source={require('KioskCatch/assets/img/LR_kiosk/LR_kiosk_bg.jpg')}
        style={styles.bgImage}></Image>
      <Category catagoryRef={CatagoryRef} />
      <Menu />
      <MenuLR />
      <Cart />
      <OrderList />
      <OrderListIcon />
      <FooterBtn />
      <View style={{position: 'absolute'}}>
        <View
          style={{
            height: 100,
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 3,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'NanumSquare_acEB',
              fontSize: 22,
              color: 'black',
            }}>
            카테고리의 오른쪽 버튼을 누르세요
          </Text>
        </View>
      </View>
    </View>
  );

  // );
}

// 카테고리 컴포넌트
const Category = props => {
  state = {
    animation: new Animated.Value(1),
    animation_1: new Animated.Value(0),
  };

  // header animation
  const animation = useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.sequence([
      Animated.timing(state.animation_1, {
        toValue: 1.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(state.animation_1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  return (
    <View style={styles.category} ref={props.catagoryRef}>
      <TouchableOpacity>
        <Icon_FontAwesome
          name="angle-left"
          size={40}
          style={styles.category_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryBtn1}>
        <Text style={styles.category_text1}>커피</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryBtn2}>
        <Text style={styles.category_text2}>음료</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryBtn2}>
        <Text style={styles.category_text2}>베이커리</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LR_Kiosk_explore_category')}>
        <Animated.View
          style={{
            opacity: state.animation,
            transform: [{scale: state.animation_1}],
          }}>
          <Icon_FontAwesome
            name="angle-right"
            size={40}
            style={[styles.category_icon, {color: '#FFC000'}]}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};
const Menu = () => {
  return (
    <View style={styles.menu}>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_americano.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>아메리카노</Text>
            <Text style={styles.menuTxt_highlight}>1,400</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_cafe_latte.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>카페라떼 </Text>
            <Text style={styles.menuTxt_highlight}>2,000</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_espresso_conpa.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>에스프레소</Text>
            <Text style={styles.menuTxt}>콘파냐</Text>
            <Text style={styles.menuTxt_highlight}>2,000</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_caramel_latte.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>카라멜</Text>
            <Text style={styles.menuTxt}>카페라떼 </Text>
            <Text style={styles.menuTxt_highlight}>2,500</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_carameo_moca.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>카라멜모카</Text>
            <Text style={styles.menuTxt_highlight}>2,500</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_espresso.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>에스프레소</Text>
            <Text style={styles.menuTxt_highlight}>1,500</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const MenuLR = () => {
  return (
    <View style={styles.menu_LR}>
      <TouchableOpacity style={styles.LR_btn}>
        <Text style={styles.LR_text}>이전</Text>
      </TouchableOpacity>
      <View style={styles.circle}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      </View>
      <TouchableOpacity
        style={styles.LR_btn}
        onPress={() => navigation.navigate('LR_Kiosk_explore_menu')}>
        <Text style={styles.LR_text}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};
const Cart = () => {
  return (
    <View style={styles.cart}>
      <View style={styles.cartInfo}>
        <Text style={styles.cart_text}>총주문내역</Text>
      </View>
      <View style={styles.cartInfo2}>
        <Text style={styles.cart_text}>0 개</Text>
      </View>
      <View style={styles.cartInfo}>
        <Text style={styles.cart_text}>0</Text>
      </View>
    </View>
  );
};
const OrderList = () => {
  return (
    <View style={styles.orderList}>
      <View style={styles.orderInfo}>
        <Text style={styles.order_text}></Text>
      </View>
      <View style={styles.line}>
        <View style={styles.line1} />
        <View style={styles.line1} />
        <View style={styles.line1} />
      </View>
    </View>
  );
};
const OrderListIcon = () => {
  return (
    <View style={styles.orderList_icon}>
      <Icon_AntDesign name="up-square-o" size={35} style={{color: '#B8B8B8'}} />
      <Icon_AntDesign
        name="down-square-o"
        size={35}
        style={{color: '#B8B8B8'}}
      />
    </View>
  );
};
const FooterBtn = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.backBtn}>
        <Text
          style={{
            fontFamily: 'NanumSquare_acEB',
            fontSize: 22,
            color: '#BABABA',
          }}>
          이전
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelBtn}>
        <Text
          style={{
            fontFamily: 'NanumSquare_acEB',
            fontSize: 22,
            color: '#3D3D4F',
          }}>
          취소하기
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentBtn}>
        <Text
          style={{
            fontFamily: 'NanumSquare_acEB',
            fontSize: 22,
            color: 'white',
          }}>
          결제하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};
