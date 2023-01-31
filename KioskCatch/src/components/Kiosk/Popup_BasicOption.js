import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Modal,
} from 'react-native';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

export default Popup_BasicOption = props => {
  let styles = props.styles;

  return (
    <View style={styles.overlay}>
      <View style={[styles.optionContainer]} ref={props.OptionRef}>
        {/*제목*/}
        <View style={styles.optionTitle}>
          <Text style={styles.optionTitleText}>옵션을 선택해주세요</Text>
        </View>

        {/*내용*/}
        <Content
          styles={props.styles}
          userTempInput={props.userTempInput}
          setuserTempInput={props.setuserTempInput}
          userSizeInput={props.userSizeInput}
          setuserSizeInput={props.setuserSizeInput}
          animation={props.animation}
          SelectMenu={props.SelectMenu}
          KioskState={props.KioskState}
          SetKioskState={props.SetKioskState}
          OptionSizeRef={props.OptionSizeRef}
          SetvisibleOption={props.SetvisibleOption}
        />
      </View>
    </View>
  );
};

const Content = props => {
  let styles = props.styles;
  let userTempInput = props.userTempInput;
  let userSizeInput = props.userSizeInput;
  let setuserSizeInput = props.setuserSizeInput;
  let setuserTempInput = props.setuserTempInput;
  return (
    <View style={styles.optionContents}>
      <View style={styles.optionQuantity}>
        <View style={styles.munuInfo}>
          <Text style={styles.menu_text}>{props.SelectMenu}</Text>
        </View>
        <TouchableOpacity style={styles.quantityBtn}>
          <Icon_Entypo name="minus" size={30} style={{color: '#654F43'}} />
        </TouchableOpacity>
        <View style={styles.quantityInfo}>
          <Text style={styles.quantity_text}>1</Text>
        </View>
        <TouchableOpacity style={styles.quantityBtn}>
          <Icon_Entypo name="plus" size={30} style={{color: '#654F43'}} />
        </TouchableOpacity>
      </View>

      {/*온도 선택*/}
      <View style={styles.optionTemperature}>
        {/********** HOT **********/}
        {props.KioskState === '3-1-1' ? (
          <Animated.View
            style={[
              userTempInput.hot.temperatureBtn,
              {
                transform: [{scale: props.animation}],
              },
            ]}>
            <TouchableOpacity
              style={[
                userTempInput.hot.temperatureBtn,
                {backgroundColor: '#FFC000', width: '100%'},
              ]}
              onPress={() => {
                SelectHot(userTempInput, setuserTempInput, styles);
                props.SetKioskState(['3-1-2', '옵션변경']);
              }}>
              <Image
                source={userTempInput.hot.img}
                style={styles.optionImage_hot}
              />

              <Text style={userTempInput.hot.temperature_text}>HOT</Text>
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <TouchableOpacity
            style={userTempInput.hot.temperatureBtn}
            onPress={() => SelectHot(userTempInput, setuserTempInput, styles)}>
            <Image
              source={userTempInput.hot.img}
              style={styles.optionImage_hot}
            />
            <Text style={userTempInput.hot.temperature_text}>HOT</Text>
          </TouchableOpacity>
        )}

        {/********** ICE **********/}
        {props.KioskState === '2-3T' ? (
          <Animated.View
            style={[
              userTempInput.ice.temperatureBtn,
              {
                transform: [{scale: props.animation}],
              },
            ]}>
            <TouchableOpacity
              style={[
                userTempInput.ice.temperatureBtn,
                {backgroundColor: '#FFC000', width: '100%'},
              ]}
              onPress={() => {
                SelectIce(userTempInput, setuserTempInput, styles);
                props.SetKioskState(['2-3-1', '옵션 선택']);
              }}>
              <Image
                source={userTempInput.ice.img}
                style={styles.optionImage_ice}
              />
              <Text style={userTempInput.ice.temperature_text}>ICE</Text>
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <TouchableOpacity
            style={userTempInput.ice.temperatureBtn}
            onPress={() => SelectIce(userTempInput, setuserTempInput, styles)}>
            <Image
              source={userTempInput.ice.img}
              style={styles.optionImage_ice}
            />
            <Text style={userTempInput.ice.temperature_text}>ICE</Text>
          </TouchableOpacity>
        )}
      </View>

      {/*사이즈 선택*/}
      <View style={styles.optionSize} ref={props.OptionSizeRef}>
        {/********** Small **********/}
        <TouchableOpacity
          style={userSizeInput.small.sizeBtn}
          onPress={() => {
            SelectSmall(userSizeInput, setuserSizeInput, styles);
          }}>
          <Image
            source={userSizeInput.small.img}
            style={styles.optionImage_size_1}
          />
          <Text style={[styles.size_text_1, userSizeInput.small.text_color]}>
            스몰
          </Text>
          <Text style={[styles.size_text_2, userSizeInput.small.text_color]}>
            2,700
          </Text>
        </TouchableOpacity>
        {/*********** Regular **********/}
        {props.KioskState === '2-3-1T' ? (
          <Animated.View
            style={[
              userSizeInput.regular.sizeBtn,
              {
                transform: [{scale: props.animation}],
              },
            ]}>
            <TouchableOpacity
              style={[
                userSizeInput.regular.sizeBtn,
                {backgroundColor: '#FFC000', width: '100%'},
              ]}
              onPress={() => {
                SelectRegular(userSizeInput, setuserSizeInput, styles);
                props.SetKioskState(['2-3-2T', '옵션 선택']);
              }}>
              <Image
                source={userSizeInput.regular.img}
                style={styles.optionImage_size_2}
              />
              <Text
                style={[styles.size_text_1, userSizeInput.regular.text_color]}>
                레귤러
              </Text>
              <Text
                style={[styles.size_text_2, userSizeInput.regular.text_color]}>
                3,200
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <TouchableOpacity
            style={userSizeInput.regular.sizeBtn}
            onPress={() =>
              SelectRegular(userSizeInput, setuserSizeInput, styles)
            }>
            <Image
              source={userSizeInput.regular.img}
              style={styles.optionImage_size_2}
            />
            <Text
              style={[styles.size_text_1, userSizeInput.regular.text_color]}>
              레귤러
            </Text>
            <Text
              style={[styles.size_text_2, userSizeInput.regular.text_color]}>
              3,200
            </Text>
          </TouchableOpacity>
        )}

        {/*********** Large **********/}
        <TouchableOpacity
          style={userSizeInput.large.sizeBtn}
          onPress={() => SelectLarge(userSizeInput, setuserSizeInput, styles)}>
          <Image
            source={userSizeInput.large.img}
            style={styles.optionImage_size_3}
          />
          <Text style={[styles.size_text_1, userSizeInput.large.text_color]}>
            라지
          </Text>
          <Text style={[styles.size_text_2, userSizeInput.large.text_color]}>
            3,700
          </Text>
        </TouchableOpacity>
      </View>

      {/*취소/선택 버튼*/}
      <View style={styles.optionBtn}>
        <TouchableOpacity
          style={styles.selectBtn_1}
          onPress={() => {
            props.SetvisibleOption(0);
          }}>
          <Text style={[styles.cancel_text, {fontSize: 18}]}>취소하기</Text>
        </TouchableOpacity>
        {props.KioskState === '2-3-2T' || props.KioskState === '3-1-2' ? (
          <Animated.View
            style={[
              styles.selectBtn_2,
              {
                transform: [{scale: props.animation}],
              },
            ]}>
            <TouchableOpacity
              style={[
                styles.selectBtn_2,
                {backgroundColor: '#FFC000', width: '100%'},
              ]}
              onPress={() => {
                props.SetvisibleOption(0);
                props.KioskState === '3-1-2'
                  ? props.SetKioskState(['3-2', '장바구니'])
                  : props.SetKioskState(['3-1', '장바구니']);
              }}>
              <Text style={[styles.select_text, {fontSize: 18}]}>선택완료</Text>
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <TouchableOpacity style={styles.selectBtn_2}>
            <Text style={[styles.select_text, {fontSize: 18}]}>선택완료</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// ICE Select Fuction
const SelectIce = (userTempInput, setuserTempInput, styles) => {
  if (
    JSON.stringify(userTempInput.ice.temperature_text) ===
    JSON.stringify(styles.temperature_text)
  ) {
    setuserTempInput({
      hot: {
        img: require('KioskCatch/assets/img/LR_kiosk/coffee-cup_hot.png'),
        temperature_text: styles.temperature_text,
        temperatureBtn: styles.temperatureBtn,
      },
      ice: {
        img: require('KioskCatch/assets/img/LR_kiosk/iced-coffee_ice_w.png'),
        temperature_text: styles.temperature_text_w,
        temperatureBtn: styles.temperatureBtn_S,
      },
    });
    console.log(userTempInput.ice.temperature_text);
  } else {
    setuserTempInput({
      hot: {
        img: require('KioskCatch/assets/img/LR_kiosk/coffee-cup_hot.png'),
        temperature_text: styles.temperature_text,
        temperatureBtn: styles.temperatureBtn,
      },
      ice: {
        img: require('KioskCatch/assets/img/LR_kiosk/iced-coffee_ice.png'),
        temperature_text: styles.temperature_text,
        temperatureBtn: styles.temperatureBtn,
      },
    });
  }
};

// Hot Select Fuction
const SelectHot = (userTempInput, setuserTempInput, styles) => {
  if (
    JSON.stringify(userTempInput.hot.temperature_text) ===
    JSON.stringify(styles.temperature_text)
  ) {
    console.log('true');
    setuserTempInput({
      hot: {
        img: require('KioskCatch/assets/img/LR_kiosk/coffee-cup_hot_w.png'),
        temperature_text: styles.temperature_text_w,
        temperatureBtn: styles.temperatureBtn_S,
      },
      ice: {
        img: require('KioskCatch/assets/img/LR_kiosk/iced-coffee_ice.png'),
        temperature_text: styles.temperature_text,
        temperatureBtn: styles.temperatureBtn,
      },
    });
  } else {
    setuserTempInput({
      hot: {
        img: require('KioskCatch/assets/img/LR_kiosk/coffee-cup_hot.png'),
        temperature_text: styles.temperature_text,
        temperatureBtn: styles.temperatureBtn,
      },
      ice: {
        img: require('KioskCatch/assets/img/LR_kiosk/iced-coffee_ice.png'),
        temperature_text: styles.temperature_text,
        temperatureBtn: styles.temperatureBtn,
      },
    });
  }
};

// Small Select Fuction
const SelectSmall = (userSizeInput, setuserSizeInput, styles) => {
  if (
    JSON.stringify(userSizeInput.small.sizeBtn) ===
    JSON.stringify(styles.sizeBtn)
  ) {
    setuserSizeInput({
      small: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_s_w.png'),
        sizeBtn: styles.sizeBtn_S,
        text_color: styles.select_text,
      },
      regular: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_m.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
      large: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_l.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
    });
  } else {
    setuserSizeInput({
      small: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_s.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
      regular: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_m.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
      large: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_l.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
    });
  }
};

// Regular Select Fuction
const SelectRegular = (userSizeInput, setuserSizeInput, styles) => {
  if (
    JSON.stringify(userSizeInput.regular.sizeBtn) ===
    JSON.stringify(styles.sizeBtn)
  ) {
    setuserSizeInput({
      small: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_s.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
      regular: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_m_w.png'),
        sizeBtn: styles.sizeBtn_S,
        text_color: styles.select_text,
      },
      large: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_l.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
    });
  } else {
    setuserSizeInput({
      small: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_s.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
      regular: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_m.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
      large: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_l.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
    });
  }
};

// Large Select Fuction
const SelectLarge = (userSizeInput, setuserSizeInput, styles) => {
  if (
    JSON.stringify(userSizeInput.large.sizeBtn) ===
    JSON.stringify(styles.sizeBtn)
  ) {
    setuserSizeInput({
      small: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_s.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
      regular: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_m.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
      large: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_l_w.png'),
        sizeBtn: styles.sizeBtn_S,
        text_color: styles.select_text,
      },
    });
  } else {
    setuserSizeInput({
      small: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_s.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
      regular: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_m.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
      large: {
        img: require('KioskCatch/assets/img/LR_kiosk/cup_size_l.png'),
        sizeBtn: styles.sizeBtn,
        text_color: styles.cancel_text,
      },
    });
  }
};
