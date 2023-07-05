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
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Feather from 'react-native-vector-icons/Feather';

import {useHeaderHeight} from '@react-navigation/elements';

// import Category from 'KioskCatch/src/components/Simulation/LRKiosk/Category';
// import Menu from 'KioskCatch/src/components/Simulation/LRKiosk/Menu';
// import MenuLR from 'KioskCatch/src/components/Simulation/LRKiosk/MenuLR';

import styles from 'KioskCatch/src/style/LR_Kiosk/LR_Kiosk_Explore';
export default function LR_Kiosk_tutorial_Explore({route}) {
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
        {/* <Category
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
          MenuSelectRef={MenuSelectRef}
          SelectMenu={SelectMenu}
          SetSelectMenu={SetSelectMenu}
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
          MenuLRRef={MenuLRRef}
        /> */}
        <Cart />
        <OrderList SetvisibleOption={SetvisibleOption} />

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
const OrderList = props => {
  return (
    <View style={styles.orderContents}>
      <View style={styles.orderList}>
        <View style={styles.orderInfo}>
          {/* <Text style={styles.order_text}>말차라떼</Text>
              <View style={styles.order_option}>
                <Text style={styles.order_text}>1</Text>
                <TouchableOpacity
                  style={styles.orderBtn}
                  onPress={() =>
                    props.SetvisibleOption({
                      basicOption: 1,
                      order: 0,
                      takeoutOption: 0,
                      payment: 0,
                    })
                  }>
                  <Icon_Entypo
                    name="select-arrows"
                    size={20}
                    style={styles.order_icon}
                  />
                  <Text style={styles.order_text}>수량</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.order_option}>
                <Text style={styles.order_text}>3,200</Text>
                <TouchableOpacity style={styles.orderBtn}>
                    <Icon_Feather
                      name="plus"
                      size={20}
                      style={styles.order_icon}
                    />

                    <Text style={styles.order_text}>옵션</Text>
                  </TouchableOpacity>

                <TouchableOpacity style={styles.orderBtn2}>
                  <Icon_Feather name="x" size={20} style={styles.order_icon} />
                  <Text style={styles.order_text}>삭제</Text>
                </TouchableOpacity>
              </View> */}
        </View>
        <View style={styles.orderInfo}>
          {/* <Text style={styles.order_text}>말차라떼</Text> */}
        </View>
        <View style={styles.orderInfo}>
          {/* <Text style={styles.order_text}>말차라떼</Text> */}
        </View>
      </View>
      <OrderListIcon />
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
