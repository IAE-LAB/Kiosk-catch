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
import Popup_BasicOption from 'KioskCatch/src/components/Kiosk/Popup_BasicOption';
import Popup_AddOption from 'KioskCatch/src/components/Kiosk/Popup_AddOption';

export default Popup = props => {
  const styles = getStyles(props.visibleOption);
  const [userTempInput, setuserTempInput] = useState({
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
  const [userSizeInput, setuserSizeInput] = useState({
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

  const [userPage, setUserPage] = useState(1);

  return (
    <>
      <Popup_BasicOption
        styles={styles}
        userTempInput={userTempInput}
        setuserTempInput={setuserTempInput}
        userSizeInput={userSizeInput}
        setuserSizeInput={setuserSizeInput}
        animation={props.animation}
        SelectMenu={props.SelectMenu}
        KioskState={props.KioskState}
        SetKioskState={props.SetKioskState}
        OptionSizeRef={props.OptionSizeRef}
        OptionRef={props.OptionRef}
        SetvisibleOption={props.SetvisibleOption}
      />
      {/* <View style={styles.overlay}>
        <View style={styles.optionContainer} ref={props.OptionRef}>
          <View style={styles.optionTitle}>
            <Text style={styles.optionTitleText}>추가 옵션</Text>
          </View>
          <Popup_AddOption />
        </View>
      </View> */}
    </>
  );
};

// CSS
const getStyles = visibleOption =>
  StyleSheet.create({
    overlay: {
      // flex: 1,
      zIndex: visibleOption,
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.36)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionContainer: {
      width: '90%',
      height: '60%',
      zIndex: 1,
      backgroundColor: 'white',
      justifyContent: 'space-between',
    },
    optionTitle: {
      backgroundColor: '#005D2E',
      alignItems: 'center',
      justifyContent: 'center',
      height: '12.5%',
    },
    optionTitleText: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 22,
      color: 'white',
    },
    optionContents: {
      backgroundColor: 'white',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: '87.5%',
    },
    optionTemperature: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '23%',
    },
    temperatureBtn: {
      backgroundColor: '#D3CBC0',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: 5,
      width: '35%',
      height: '100%',
    },
    temperatureBtn_S: {
      backgroundColor: '#654F43',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: 5,
      width: '35%',
      height: '100%',
    },
    optionImage_hot: {
      resizeMode: 'contain',
      width: '30%',
    },
    optionImage_ice: {
      resizeMode: 'contain',
      width: '25%',
    },
    temperature_text: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 20,
      color: 'black',
    },
    temperature_text_w: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 20,
      color: 'white',
    },
    optionSize: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '42%',
    },
    sizeBtn: {
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      flexDirection: 'column',
      alignItems: 'center',
      //justifyContent: 'center',
      borderRadius: 5,
      width: '24.5%',
      //height: '100%',
      marginHorizontal: -25,
    },
    sizeBtn_S: {
      backgroundColor: '#654F43',
      borderColor: 'black',
      borderWidth: 1,
      flexDirection: 'column',
      alignItems: 'center',
      //justifyContent: 'center',
      borderRadius: 5,
      width: '24.5%',
      //height: '100%',
      marginHorizontal: -25,
    },
    optionImage_size_1: {
      resizeMode: 'contain',
      width: '30%',
      height: '70%',
      marginTop: -9,
    },
    optionImage_size_2: {
      resizeMode: 'contain',
      width: '35%',
      height: '70%',
      marginTop: -9,
    },
    optionImage_size_3: {
      resizeMode: 'contain',
      width: '40%',
      height: '70%',
      marginTop: -9,
    },
    size_text_1: {
      fontFamily: 'NanumSquare_acB',
      fontSize: 18,
      color: 'black',
    },
    size_text_2: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 18,
      color: '#C80000',
    },
    optionBtn: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '13%',
    },
    selectBtn_1: {
      backgroundColor: 'white',
      borderColor: '#3D3D4F',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      width: '35%',
      height: '100%',
    },
    selectBtn_2: {
      backgroundColor: '#3D3D4F',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      width: '35%',
      height: '100%',
    },
    cancel_text: {
      color: '#3D3D4F',
    },
    select_text: {
      color: 'white',
    },
    optionQuantity: {
      //backgroundColor: 'red',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '10%',
    },
    munuInfo: {
      //backgroundColor: 'orange',
      marginRight: -20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    menu_text: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 22,
      color: 'black',
    },
    quantityBtn: {
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: '#654F43',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '10%',
      height: '100%',
    },
    quantityInfo: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: '12%',
      height: '100%',
      marginHorizontal: -45,
    },
    quantity_text: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 28,
      color: 'black',
    },
  });
