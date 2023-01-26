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
import styles from '../../style/LR_Kiosk/LR_Kiosk_Explore';


export default Menu = props => {
    console.log(props.CategoryState +"   "+props.PageState);
    return(
        <View style={styles.menu}>
            {props.CategoryState === 'coffee' ? 
                (
                    <>
                        {props.PageState === 1 ? <CoffeeComponent1 />: null}
                        {props.PageState === 2 ? <CoffeeComponent2 />: null}
                        {props.PageState === 3 ? <CoffeeComponent3 />: null}
                    </>
                )
            : null}
            {props.CategoryState === 'beverage' ? 
                <>
                    {props.PageState === 1 ? <BeverageComponent1 />: null}
                </>
                : null}
            {props.CategoryState === 'tea' ? 
                <>
                    {props.PageState === 1 ? <TeaComponent1 />: null}
                </>
                : null}
        </View>
    );
}


const CoffeeComponent1 = (props) => {
   
    return(
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require("KioskCatch/assets/img/digital_cafe_menu/digital_americano.jpg")}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>아메리카노</Text>
            <Text style={styles.menuTxt_highlight}>1,400 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
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
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_carameo_moca.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>카라멜모카</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
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
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_espresso_conpa.jpg')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>에스프레소</Text>
            <Text style={styles.menuTxt}>콘파냐</Text>
            <Text style={styles.menuTxt_highlight}>2,000 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
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
}

const CoffeeComponent2 = (props) => {
   
    return(
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require("KioskCatch/assets/img/digital_cafe_menu/digital_capuch.jpg")}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>카푸치노</Text>
            <Text style={styles.menuTxt_highlight}>2,000 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
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
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/cold.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>콜드브루</Text>
            <Text style={styles.menuTxt_highlight}>2,500 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
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
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require('KioskCatch/assets/img/digital_cafe_menu/green_latte.png')}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>말차라떼</Text>
            <Text style={styles.menuTxt_highlight}>3,200 원</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
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
}

const CoffeeComponent3 = (props) => {
   
    return(
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require("KioskCatch/assets/img/digital_cafe_menu/Vienna.png")}
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
}

const BeverageComponent1 = (props) => {
   
    return(
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require("KioskCatch/assets/img/digital_cafe_menu/digital_straw.png")}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>딸기 주스  </Text>
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
        <View style={[styles.menuBtn,{opacity:0}]}>
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
}

const TeaComponent1 = (props) => {
   
    return(
    <View>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image
            source={require("KioskCatch/assets/img/digital_cafe_menu/ginger.png")}
            style={styles.menuImage}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.menuTxt}>진저티      </Text>
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
        <View style={[styles.menuBtn,{opacity:0}]}>
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
      <View style={styles.menuRow}>
      </View>
    </View>
    );
}