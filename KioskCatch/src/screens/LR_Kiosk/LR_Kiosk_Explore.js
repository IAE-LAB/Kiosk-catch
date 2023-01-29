import React, {useRef, useState, useEffect} from 'react';
import 'react-native-gesture-handler';

import * as Animatable from 'react-native-animatable';

import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

import {useHeaderHeight} from '@react-navigation/elements';

import TaskText from 'KioskCatch/src/components/Kiosk/TaskText';

import Category from 'KioskCatch/src/components/LRKiosk/Category';
import Menu from 'KioskCatch/src/components/LRKiosk/Menu';
import MenuLR from 'KioskCatch/src/components/LRKiosk/MenuLR';

import TutorialHandler from 'KioskCatch/src/components/LRKiosk/TutorialHandler';

import Popup from 'KioskCatch/src/components/Kiosk/Popup';

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
  // KioskState = route.params.KioskState;

  var [KioskState, SetKioskState] = useState(route.params.state);
  const CatagoryRef = useRef();
  const TutorialRef = useRef();
  const headerHeight = useHeaderHeight();
  const MenuRef = useRef();
  const NextBtnRef = useRef();
  check = 0;

  navigation.setOptions({title: KioskState[1]});
  console.log(route.params.state);

  const animation = new Animated.Value(1);

  const [CategoryState, setCategoryState] = useState('coffee');
  const [PageState, setPageState] = useState(1);

  var [visibleOption, SetvisibleOption] = useState(false);

  Animated.loop(
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  return (
    <View style={styles.contents}>
      <Image
        source={require('KioskCatch/assets/img/LR_kiosk/LR_kiosk_bg.jpg')}
        style={styles.bgImage}></Image>
      <Category
        catagoryRef={CatagoryRef}
        navigation={navigation}
        KioskState={KioskState[0]}
        SetKioskState={SetKioskState}
        animation={animation}
        CategoryState={CategoryState}
        setCategoryState={setCategoryState}
        setPageState={setPageState}
      />
      <Menu
        CategoryState={CategoryState}
        PageState={PageState}
        MenuRef={MenuRef}
        animation={animation}
        KioskState={KioskState[0]}
        SetKioskState={SetKioskState}
        visibleOption={visibleOption}
        SetvisibleOption={SetvisibleOption}
      />
      <MenuLR
        state={route.params.state}
        animation={animation}
        navigation={navigation}
        KioskState={KioskState[0]}
        SetKioskState={SetKioskState}
        CategoryState={CategoryState}
        PageState={PageState}
        setPageState={setPageState}
        NextBtnRef={NextBtnRef}
      />
      <Cart />
      <OrderList />
      <OrderListIcon />
      <FooterBtn />
      {/* 튜토리얼 화면 */}
      <TutorialHandler
        navigation={navigation}
        CatagoryRef={CatagoryRef}
        headerHeight={headerHeight}
        route={route}
        KioskState={KioskState[0]}
        SetKioskState={SetKioskState}
        MenuRef={MenuRef}
        NextBtnRef={NextBtnRef}
      />
      <TaskText KioskState={KioskState[0]} />
      {visibleOption && (
        <Popup
          visibleOption={visibleOption}
          SetvisibleOption={SetvisibleOption}
        />
      )}
    </View>
  );
}

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
