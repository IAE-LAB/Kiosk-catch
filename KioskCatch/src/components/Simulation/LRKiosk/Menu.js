import React, {useRef, useState, useEffect} from 'react';
import 'react-native-gesture-handler';

import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import menu_text from 'KioskCatch/assets/json/menu.js';

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';
import styles from 'KioskCatch/src/style/LR_Kiosk/LR_Kiosk_Explore';

export default Menu = props => {
  return (
    <View style={[styles.menu]}>
      {props.CategoryState === 'coffee' ? (
        <>
          {props.PageState === 1 ? <CoffeeComponent1 props={props} /> : null}
          {props.PageState === 2 ? <CoffeeComponent2 props={props} /> : null}
          {props.PageState === 3 ? <CoffeeComponent3 props={props} /> : null}
        </>
      ) : null}
      {props.CategoryState === 'beverage' ? (
        <>
          {props.PageState === 1 ? <BeverageComponent1 props={props} /> : null}
        </>
      ) : null}
      {props.CategoryState === 'tea' ? (
        <>{props.PageState === 1 ? <TeaComponent1 props={props} /> : null}</>
      ) : null}
      {props.CategoryState === 'bread' ? (
        <>
          {props.PageState === 1 ? <BreadComponent1 props={props} /> : null}
          {props.PageState === 2 ? <BreadComponent2 props={props} /> : null}
          {props.PageState === 3 ? <BreadComponent3 props={props} /> : null}
        </>
      ) : null}
      {props.CategoryState === 'snack' ? (
        <>{props.PageState === 1 ? <SnackComponent1 props={props} /> : null}</>
      ) : null}
      {props.CategoryState === 'ice' ? (
        <>{props.PageState === 1 ? <IceComponent1 props={props} /> : null}</>
      ) : null}
    </View>
  );
};

const addToCart = (menu, props) => {
  const {name, price} = menu;

  // Check if the menu item already exists in the cart
  if (props.cartItems.has(name)) {
    const existingItem = props.cartItems.get(name);
    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    };

    // Update the quantity of the existing item in the cart
    props.setCartItems(new Map(props.cartItems.set(name, updatedItem)));
  } else {
    // Add a new item to the cart
    const newItem = {
      name,
      price,
      quantity: 1,
    };
    props.setCartItems(new Map(props.cartItems.set(name, newItem)));
  }
  console.log(props.cartItems);
};

// 커피
const CoffeeComponent1 = props => {
  return (
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '아메리카노', price: 1400}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_americano.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>아메리카노</Text>
            <Text style={styles.menuTxt_highlight}>1,400 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '카페라떼', price: 2000}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_cafe_latte.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>카페라떼 </Text>
            <Text style={styles.menuTxt_highlight}>2,000 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '카라멜모카', price: 2500}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_carameo_moca.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>카라멜모카</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '에스프레소', price: 1500}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_espresso.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>에스프레소</Text>
            <Text style={styles.menuTxt_highlight}>1,500 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '에스프레소 콘파냐', price: 2000}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_espresso_conpa.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>에스프레소</Text>
            <Text style={styles.menuTxt}>콘파냐</Text>
            <Text style={styles.menuTxt_highlight}>2,000 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '카라멜 카페라떼', price: 2500}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_caramel_latte.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>카라멜</Text>
            <Text style={styles.menuTxt}>카페라떼</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CoffeeComponent2 = props => {
  return (
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '카푸치노', price: 2000}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_capuch.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>카푸치노</Text>
            <Text style={styles.menuTxt_highlight}>2,000 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '아포카토', price: 3000}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_apo.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>아포카토 </Text>
            <Text style={styles.menuTxt_highlight}>3,000 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '콜드브루', price: 2500}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/cold.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>콜드브루</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '콜드브루 라떼', price: 2800}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/cold_latte.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>콜드브루</Text>
            <Text style={styles.menuTxt}>라떼</Text>
            <Text style={styles.menuTxt_highlight}>2,800 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '말차라떼', price: 3200}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/green_latte.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>말차라떼</Text>
            <Text style={styles.menuTxt_highlight}>3,200 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            addToCart({name: '연유라떼', price: 3000}, props.props)
          }>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/spani_latte.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>연유라떼</Text>
            <Text style={styles.menuTxt_highlight}>3,000 원</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CoffeeComponent3 = props => {
  return (
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/Vienna.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>비엔나커피</Text>
            <Text style={styles.menuTxt_highlight}>3,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/tiramisu.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>티라미수 </Text>
            <Text style={styles.menuTxt}>라떼 </Text>
            <Text style={styles.menuTxt_highlight}>3,000 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}></View>
      <View style={styles.menuRow}></View>
    </View>
  );
};

// 음료
const BeverageComponent1 = props => {
  return (
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_straw.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>딸기 주스 </Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_straw.banana.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>딸기바나</Text>
            <Text style={styles.menuTxt}>나 주스</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_orange.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>오렌지주스</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_straw_sm.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>딸기</Text>
            <Text style={styles.menuTxt}>스무디</Text>
            <Text style={styles.menuTxt_highlight}>4,000 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_man_sm.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>망고</Text>
            <Text style={styles.menuTxt}>스무디</Text>
            <Text style={styles.menuTxt_highlight}>4,000 원</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.menuBtn, {opacity: 0}]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_caramel_latte.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>없음</Text>
            <Text style={styles.menuTxt}>없음</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// 차
const TeaComponent1 = props => {
  return (
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/ginger.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>진저티 </Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/chamomile.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>캐모마일티</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/mint.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>패퍼민트티</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.menuBtn, {opacity: 0}]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_straw_sm.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>없음</Text>
            <Text style={styles.menuTxt}>없음</Text>
            <Text style={styles.menuTxt_highlight}>4,000 원</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuRow}></View>
    </View>
  );
};

// 빵
const BreadComponent1 = props => {
  return (
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={[styles.menuBtn]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_plain.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>플레인</Text>
            <Text style={styles.menuTxt}>머핀</Text>
            <Text style={styles.menuTxt_highlight}>3,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_choco.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>초코머핀 </Text>
            <Text style={styles.menuTxt_highlight}>3,500 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_cheese.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>치즈케이크</Text>
            <Text style={styles.menuTxt_highlight}>3,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_tirami.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>티라미수</Text>
            <Text style={styles.menuTxt}>케이크</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/bagle.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>플레인</Text>
            <Text style={styles.menuTxt}>베이글</Text>
            <Text style={styles.menuTxt_highlight}>1,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuBtn]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/bagle_cran.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>크렌베리</Text>
            <Text style={styles.menuTxt}>베이글</Text>
            <Text style={styles.menuTxt_highlight}>1,700 원</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BreadComponent2 = props => {
  return (
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={[styles.menuBtn]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_honey.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>허니브레드</Text>
            <Text style={styles.menuTxt_highlight}>4,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/croissant.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>크루아상 </Text>
            <Text style={styles.menuTxt_highlight}>2,200 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/salt.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>소금빵</Text>
            <Text style={styles.menuTxt_highlight}>2,300 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/tuna.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>참치</Text>
            <Text style={styles.menuTxt}>샌드위치</Text>
            <Text style={styles.menuTxt_highlight}>4,500 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/egg_san.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>계란</Text>
            <Text style={styles.menuTxt}>샌드위치</Text>
            <Text style={styles.menuTxt_highlight}>1,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuBtn]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/cheese_san.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>햄치즈</Text>
            <Text style={styles.menuTxt}>샌드위치</Text>
            <Text style={styles.menuTxt_highlight}>1,700 원</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BreadComponent3 = props => {
  return (
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={[styles.menuBtn]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/potato.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>춘천</Text>
            <Text style={styles.menuTxt}>감자빵</Text>
            <Text style={styles.menuTxt_highlight}>1,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuBtn, {opacity: 0}]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/croissant.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>크루아상 </Text>
            <Text style={styles.menuTxt_highlight}>2,200 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}></View>
      <View style={styles.menuRow}></View>
    </View>
  );
};

// 과자
const SnackComponent1 = props => {
  return (
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={[styles.menuBtn]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_fianan.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>휘낭시에</Text>
            <Text style={styles.menuTxt_highlight}>1,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_maca.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>크림마카롱 </Text>
            <Text style={styles.menuTxt_highlight}>3,500 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_maca_berry.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>딸기마카롱</Text>
            <Text style={styles.menuTxt_highlight}>3,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_maca_choco.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>초코마카롱</Text>
            <Text style={styles.menuTxt_highlight}>3,500 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}></View>
    </View>
  );
};

// 빙수
const IceComponent1 = props => {
  return (
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={[styles.menuBtn]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/redbean_bingsu.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>팥빙수</Text>
            <Text style={styles.menuTxt_highlight}>5,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/fruite_bigsu.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>과일빙수</Text>
            <Text style={styles.menuTxt_highlight}>6,500 원</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/choco_bingsu.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>초코빙수</Text>
            <Text style={styles.menuTxt_highlight}>3,500 원</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.menuBtn, {opacity: 0}]}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/choco_bingsu.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>초코마카롱</Text>
            <Text style={styles.menuTxt_highlight}>6,500 원</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuRow}></View>
    </View>
  );
};
