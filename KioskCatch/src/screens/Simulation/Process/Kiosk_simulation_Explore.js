import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';
import 'react-native-gesture-handler';

import * as Animatable from 'react-native-animatable';

import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';

import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useHeaderHeight} from '@react-navigation/elements';

import PopupHandler from 'KioskCatch/src/components/Simulation/LRKiosk/Popup/PopupHandler';

import Category from 'KioskCatch/src/components/Simulation/LRKiosk/Category';
import Menu from 'KioskCatch/src/components/Simulation/LRKiosk/Menu';
import MenuLR from 'KioskCatch/src/components/Simulation/LRKiosk/MenuLR';
import OrderList from 'KioskCatch/src/components/Simulation/LRKiosk/OrderList';

import styles from 'KioskCatch/src/style/LR_Kiosk/LR_Kiosk_Explore';

export default function LR_Kiosk_tutorial_Explore({navigation, route}) {
  // 담은 아이템
  const [cartItems, setCartItems] = useState(new Map());

  const [CategoryState, setCategoryState] = useState(
    route.params.CategoryState,
  );
  const [PageState, setPageState] = useState(route.params.PageState);
  var [visibleOption, SetvisibleOption] = useState(route.params.visibleOption);
  var [SelectMenuInfo, SetSelectMenuInfo] = useState({name: '', price: 0});
  var [Option, SetOption] = useState({size: '', temp: ''});
  var [optionTrigger, SetoptionTrigger] = useState(false);
  var [check, SetCheck] = useState(false);

  return (
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <PopupHandler
        visibleOption={visibleOption}
        SetvisibleOption={SetvisibleOption}
        SelectMenuInfo={SelectMenuInfo}
        SetSelectMenuInfo={SetSelectMenuInfo}
        navigation={navigation}
        Option={Option}
        SetOption={SetOption}
        optionTrigger={optionTrigger}
        SetoptionTrigger={SetoptionTrigger}
        cartItems={cartItems}
        setCartItems={setCartItems}
        check={check}
        SetCheck={SetCheck}
      />
      <View style={styles.contents}>
        <Image
          source={require('KioskCatch/assets/img/LR_kiosk/LR_kiosk_bg.jpg')}
          style={styles.bgImage}></Image>
        <Category
          navigation={navigation}
          CategoryState={CategoryState}
          setCategoryState={setCategoryState}
          setPageState={setPageState}
        />
        <Menu
          cartItems={cartItems}
          setCartItems={setCartItems}
          CategoryState={CategoryState}
          PageState={PageState}
          visibleOption={visibleOption}
          SetvisibleOption={SetvisibleOption}
          SelectMenuInfo={SelectMenuInfo}
          SetSelectMenuInfo={SetSelectMenuInfo}
          optionTrigger={optionTrigger}
          SetoptionTrigger={SetoptionTrigger}
          check={check}
          SetCheck={SetCheck}
        />

        <MenuLR
          navigation={navigation}
          CategoryState={CategoryState}
          PageState={PageState}
          setPageState={setPageState}
        />
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
        <OrderList cartItems={cartItems} setCartItems={setCartItems} />

        <FooterBtn SetvisibleOption={SetvisibleOption} />
      </View>
    </View>
  );
}

const Cart = props => {
  const totalQuantity = Array.from(props.cartItems.values()).reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalAmount = Array.from(props.cartItems.values())
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toLocaleString();

  return (
    <View style={styles.cart}>
      <View style={styles.cartInfo}>
        <Text style={styles.cart_text}>주문내역</Text>
      </View>
      <View style={styles.cartInfo2}>
        <Text style={styles.cart_text}>{totalQuantity} 개</Text>
      </View>
      <View style={styles.cartInfo}>
        <Text style={styles.cart_text}>{totalAmount} 원</Text>
      </View>
    </View>
  );
};

const FooterBtn = props => {
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
