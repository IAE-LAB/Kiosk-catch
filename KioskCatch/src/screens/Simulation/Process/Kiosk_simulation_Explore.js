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
  var [SelectMenu, SetSelectMenu] = useState('');

  return (
    <View style={{flex: 1, width: '100%', height: '100%'}}>
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
          SelectMenu={SelectMenu}
          SetSelectMenu={SetSelectMenu}
        />

        <MenuLR
          navigation={navigation}
          CategoryState={CategoryState}
          PageState={PageState}
          setPageState={setPageState}
        />
        <Cart />
        <OrderList cartItems={cartItems} setCartItems={setCartItems} />

        <FooterBtn SetvisibleOption={SetvisibleOption} />
      </View>
    </View>
  );
}

const Cart = props => {
  return (
    <View style={styles.cart}>
      <View style={styles.cartInfo}>
        <Text style={styles.cart_text}>주문내역</Text>
      </View>
      <View style={styles.cartInfo2}>
        <Text style={styles.cart_text}>0 개</Text>
      </View>
      <View style={styles.cartInfo}>
        <Text style={styles.cart_text}>0 원</Text>
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
