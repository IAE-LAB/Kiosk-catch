import React, {useRef, useState, useEffect} from 'react';
import 'react-native-gesture-handler';

import * as Animatable from 'react-native-animatable';

import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Feather from 'react-native-vector-icons/Feather';

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
  const OptionRef = useRef();
  const OptionSizeRef = useRef();
  const MenuLRRef = useRef();
  const headerHeight = useHeaderHeight();
  const MenuRef = useRef();
  const MenuSelectRef = useRef();
  const MenuListRef = useRef();
  check = 0;

  navigation.setOptions({title: KioskState[1]});
  console.log(route.params.state);

  const animation = new Animated.Value(1);

  const [CategoryState, setCategoryState] = useState('coffee');
  const [PageState, setPageState] = useState(1);

  var [visibleOption, SetvisibleOption] = useState(0);
  var [SelectMenu, SetSelectMenu] = useState('');

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
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <Popup
        visibleOption={visibleOption}
        SetvisibleOption={SetvisibleOption}
        OptionRef={OptionRef}
        animation={animation}
        KioskState={KioskState[0]}
        SetKioskState={SetKioskState}
        OptionSizeRef={OptionSizeRef}
        SelectMenu={SelectMenu}
      />
      {/* 튜토리얼 화면 */}
      <TutorialHandler
        navigation={navigation}
        CatagoryRef={CatagoryRef}
        headerHeight={headerHeight}
        route={route}
        KioskState={KioskState[0]}
        SetKioskState={SetKioskState}
        MenuRef={MenuRef}
        OptionRef={OptionRef}
        style={{zIndex: 100}}
        MenuSelectRef={MenuSelectRef}
        MenuLRRef={MenuLRRef}
        OptionSizeRef={OptionSizeRef}
        MenuListRef={MenuListRef}
      />
      <TaskText KioskState={KioskState[0]} />
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
        />
        <Cart KioskState={KioskState[0]} SetKioskState={SetKioskState} />
        <OrderList
          KioskState={KioskState[0]}
          SetKioskState={SetKioskState}
          MenuListRef={MenuListRef}
          animation={animation}
          SetvisibleOption={SetvisibleOption}
        />

        <FooterBtn
          KioskState={KioskState[0]}
          SetKioskState={SetKioskState}
          animation={animation}
        />
      </View>
    </View>
  );
}

const Cart = props => {
  return (
    <View style={styles.cart}>
      {props.KioskState === '3-1' ? (
        <>
          <View style={styles.cartInfo}>
            <Text style={styles.cart_text}>주문내역</Text>
          </View>
          <View style={styles.cartInfo2}>
            <Text style={styles.cart_text}>1 개</Text>
          </View>
          <View style={styles.cartInfo}>
            <Text style={styles.cart_text}>3,200원</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.cartInfo}>
            <Text style={styles.cart_text}>주문내역</Text>
          </View>
          <View style={styles.cartInfo2}>
            <Text style={styles.cart_text}>0 개</Text>
          </View>
          <View style={styles.cartInfo}>
            <Text style={styles.cart_text}>0</Text>
          </View>
        </>
      )}
    </View>
  );
};
const OrderList = props => {
  return (
    <View style={styles.orderContents}>
      <View style={styles.orderList} ref={props.MenuListRef}>
        <View style={styles.orderInfo}>
          {props.KioskState === '3-1' ||
          props.KioskState === '3-1T' ||
          props.KioskState === '3-1-1' ||
          props.KioskState === '3-1-2' ||
          props.KioskState === '3-2' ? (
            <>
              <Text style={styles.order_text}>말차라떼</Text>
              <View style={styles.order_option}>
                <Text style={styles.order_text}>1</Text>
                <TouchableOpacity
                  style={styles.orderBtn}
                  onPress={() => props.SetvisibleOption(1)}>
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
                {props.KioskState === '3-1T' ? (
                  <Animated.View
                    style={[
                      styles.orderBtn,
                      {
                        transform: [{scale: props.animation}],
                        backgroundColor: '#FFC000',
                      },
                    ]}>
                    <TouchableOpacity
                      style={styles.orderBtn}
                      onPress={() => {
                        props.SetvisibleOption(1);
                        props.SetKioskState(['3-1-1', '옵션변경']);
                      }}>
                      <Icon_Feather
                        name="plus"
                        size={20}
                        style={styles.order_icon}
                      />
                      <Text style={styles.order_text}>옵션</Text>
                    </TouchableOpacity>
                  </Animated.View>
                ) : (
                  <TouchableOpacity
                    style={styles.orderBtn}
                    onPress={() => {
                      props.SetvisibleOption(1);
                      props.SetKioskState(['3-1-1', '옵션변경']);
                    }}>
                    <Icon_Feather
                      name="plus"
                      size={20}
                      style={styles.order_icon}
                    />

                    <Text style={styles.order_text}>옵션</Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity style={styles.orderBtn2}>
                  <Icon_Feather name="x" size={20} style={styles.order_icon} />
                  <Text style={styles.order_text}>삭제</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
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
      {props.KioskState == '3-2' ? (
        <Animated.View
          style={[
            styles.paymentBtn,
            {
              transform: [{scale: props.animation}],
            },
          ]}>
          <TouchableOpacity
            style={[
              styles.paymentBtn,
              {backgroundColor: '#FFC000', width: '100%', height: '100%'},
            ]}>
            <Text
              style={{
                fontFamily: 'NanumSquare_acEB',
                fontSize: 22,
                color: 'white',
              }}>
              결제하기
            </Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
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
      )}
    </View>
  );
};
