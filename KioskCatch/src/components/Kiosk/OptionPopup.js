import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Modal,
TouchableOpacity, Image, } from 'react-native';

export default Popup = props => {
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

  return (
    <View style={styles.overlay}>
      <View style={styles.optionContainer}>
        {/*제목*/}
        <View style={styles.optionTitle}>
          <Text style={styles.optionTitleText}>
            원하시는 항목을 선택해주세요
          </Text>
        </View>

        {/*내용*/}
        <View style={styles.optionContents}>
          {/*온도 선택*/}
          <View style={styles.optionTemperature}>
            {/********** HOT **********/}
            <TouchableOpacity
                    onPress={handleClick}
                   
              style={[userTempInput.hot.temperatureBtn1, {backgroundColor : active ? "#654F43" : "#D3CBC0"}]}
                    
              onPress={() => SelectHot(userTempInput, setuserTempInput)}>
              <Image
                source={userTempInput.hot.img}
                style={styles.optionImage_hot}
              />
              <Text 
                        onClick={handleClick}
                        style={[userTempInput.hot.temperature_text, {color : active ? "white" : "black"}]}>HOT</Text>
            </TouchableOpacity>
            {/********** ICE **********/}
            <TouchableOpacity
              
                    onPress={handleClick}
                    style={userTempInput.ice.temperatureBtn2}
                    
              onPress={() => SelectIce(userTempInput, setuserTempInput)}>
              <Image
                source={userTempInput.ice.img}
                style={styles.optionImage_ice}
              />
              <Text style={userTempInput.ice.temperature_text}>ICE</Text>
            </TouchableOpacity>
          </View>

          {/*사이즈 선택*/}
          <View style={styles.optionSize}>
            {/********** Small **********/}
            <TouchableOpacity
              //style={styles.sizeBtn}
                    onPress={handleClick}
                    style={[userSizeInput.small.sizeBtn}
              onPress={() => SelectSmall(userSizeInput, setuserSizeInput)]}
                    >
              <Image
                source={userSizeInput.small.img}
                style={styles.optionImage_size_1}
              />
              <Text
                style={[styles.size_text_1, userSizeInput.small.text_color]}>
                스몰
              </Text>
              <Text
                style={[styles.size_text_2, userSizeInput.small.text_color]}>
                5,700
              </Text>
            </TouchableOpacity>
            {/*********** Regular **********/}
            <TouchableOpacity
              style={userSizeInput.regular.sizeBtn}
              onPress={() => SelectRegular(userSizeInput, setuserSizeInput)}>
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
                6,200
              </Text>
            </TouchableOpacity>
            {/*********** Large **********/}
            <TouchableOpacity
              style={userSizeInput.large.sizeBtn}
              onPress={() => SelectLarge(userSizeInput, setuserSizeInput)}>
              <Image
                source={userSizeInput.large.img}
                style={styles.optionImage_size_3}
              />
              <Text
                style={[styles.size_text_1, userSizeInput.large.text_color]}>
                라지
              </Text>
              <Text
                style={[styles.size_text_2, userSizeInput.large.text_color]}>
                6,700
              </Text>
            </TouchableOpacity>
          </View>

          {/*취소/선택 버튼*/}
          <View style={styles.optionBtn}>
            <TouchableOpacity
              style={styles.selectBtn_1}
              onPress={() => {
                props.SetvisibleOption(false);
              }}>
              <Text style={styles.cancel_text}>취소하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectBtn_2}>
              <Text style={styles.select_text}>선택완료</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

// ICE Select Fuction
const SelectIce = (userTempInput, setuserTempInput) => {
  if (userTempInput.ice.temperature_text === styles.temperature_text) {
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
const SelectHot = (userTempInput, setuserTempInput) => {
  if (userTempInput.ice.temperature_text === styles.temperature_text) {
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
const SelectSmall = (userSizeInput, setuserSizeInput) => {
  if (userSizeInput.small.sizeBtn === styles.sizeBtn) {
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
const SelectRegular = (userSizeInput, setuserSizeInput) => {
  if (userSizeInput.regular.sizeBtn === styles.sizeBtn) {
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
const SelectLarge = (userSizeInput, setuserSizeInput) => {
  if (userSizeInput.large.sizeBtn === styles.sizeBtn) {
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

// CSS
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.36)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContainer: {
    width: '90%',
    height: '45%',
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
});
