import React, {useRef, useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from '../../style/LR_Kiosk/LR_Kiosk_Explore';

export default function LR_Kiosk_Explore({navigation}) {
  const boxRef = useRef();
  useEffect(() => {
    getBoxMeasure();
  }, []);

  offsetX = 0;
  offsetY = 0;

  const getBoxMeasure = () => {
    console.log('boxRef ' + boxRef.current);
    // boxRef.current.measure((x, y, width, height, pageX, pageY) => {
    //   console.log('measure == ');
    //   console.log('x : ', x);
    //   console.log('y : ', y);
    //   console.log('width : ', width);
    //   console.log('height : ', height);
    //   console.log('pageX : ', pageX);
    //   console.log('pageY : ', pageY);
    // });

    boxRef.current.measureInWindow((x, y, width, height) => {
      // console.log('measureInWindow ==');
      // console.log('x : ', x);
      // console.log('y : ', y);
      // console.log('width : ', width);
      // console.log('height : ', height);
      offsetX = x;
      offsetY = y;
    });
  };

  return (
    <View style={styles.contents}>
      <Image
        source={require('KioskCatch/assets/img/LR_kiosk/LR_kiosk_bg.jpg')}
        style={styles.bgImage}></Image>
      <Category state={boxRef} />
      <Menu />
      <MenuBtn />
      <Cart />
      <FooterBtn />
      {/* 튜토리얼 화면 */}
      <TutorialScreen offsetX={offsetX} offsetY={offsetY} />
    </View>
  );
}

const TutorialScreen = props => {
  console.log(props);
  return (
    <ImageBackground
      source={require('KioskCatch/assets/img/kiosk/blackbackG.png')}
      style={styles.blackImg}>
      <TouchableOpacity
        style={styles.tutorial_contents}
        onPress={() => navigation.navigate('LR_Kiosk_Explore')}>
        <View
          style={{borderWidth: 1, borderColor: 'black', top: props.offsetY}}>
          <View style={[styles.taskBox]}>
            <View>
              <Icon_FontAwesome
                name="angle-right"
                size={40}
                style={styles.tutorial_category_icon}
              />
            </View>
          </View>
          <View style={styles.taskName}>
            <Text
              style={{
                fontFamily: 'NanumSquare_acEB',
                fontSize: 25,
                color: 'white',
              }}>
              카테고리
            </Text>
          </View>
          <Icon_MaterialCommunityIcons
            name="cursor-pointer"
            size={50}
            style={styles.tutorial_pointer_icon}
          />
          <View style={styles.taskBubble}>
            <Icon_Entypo
              name="controller-volume"
              size={40}
              style={styles.taskBubbleTail_icon}
            />
            <View style={styles.taskIofo}>
              <Text style={styles.taskTxt}>오른쪽 버튼을 눌러 추가적으로</Text>
              <Text style={styles.taskTxt}>
                더 많은 카테고리를 확인할 수 있어요
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.clickTxt}>설명 확인 후, 화면을 클릭해주세요</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const Category = props => {
  console.log('props.state ' + props.state);
  return (
    <View style={styles.category} ref={props.state}>
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
        <Icon_FontAwesome
          name="angle-right"
          size={40}
          style={styles.category_icon}
        />
      </TouchableOpacity>
    </View>
  );
};
const Menu = () => {
  return (
    <View>
      <View style={styles.menu}>
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
      <View style={styles.menu}>
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
      <View style={styles.menu}>
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
const MenuBtn = () => {
  return (
    <View style={styles.menu_LR}>
      <TouchableOpacity style={styles.LR_btn}>
        <Text style={styles.LR_text}>이전</Text>
      </TouchableOpacity>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
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
    <View>
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
      <View style={styles.orderList}>
        <View style={styles.orderInfo}>
          <Text style={styles.order_text}></Text>
        </View>
        <View style={styles.line1} />
        <View style={styles.line2} />
        <View style={styles.line3} />
        <TouchableOpacity>
          <Icon_AntDesign
            name="up-square-o"
            size={35}
            style={{
              position: 'absolute',
              top: -20,
              left: 353,
              color: '#B8B8B8',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon_AntDesign
            name="down-square-o"
            size={35}
            style={{position: 'absolute', top: 20, left: 353, color: '#B8B8B8'}}
          />
        </TouchableOpacity>
      </View>
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

{
}
