import React, {useState, useEffect} from 'react';
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

import Tts from 'react-native-tts';
export default Popup_BasicOption = props => {
  let styles = props.styles;

  return (
    <View style={styles.overlay1}>
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
          SelectMenu={props.SelectMenu}
          SetvisibleOption={props.SetvisibleOption}
          Option={props.Option}
          SetOption={props.SetOption}
          optionTrigger={props.optionTrigger}
          SetoptionTrigger={props.SetoptionTrigger}
          SelectMenuInfo={props.SelectMenuInfo}
          SetSelectMenuInfo={props.SetSelectMenuInfo}
          cartItems={props.cartItems}
          setCartItems={props.setCartItems}
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

  let [size, SetSize] = useState('');
  let [temp, Settemp] = useState('');

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.optionContents}>
      <View style={styles.optionQuantity}>
        <View style={styles.munuInfo}>
          <Text style={styles.menu_text}>
            {props.SelectMenuInfo && props.SelectMenuInfo.name}
          </Text>
        </View>
        <TouchableOpacity style={styles.quantityBtn} onPress={handleDecrease}>
          <Icon_Entypo name="minus" size={30} style={{color: '#654F43'}} />
        </TouchableOpacity>
        <View style={styles.quantityInfo}>
          <Text style={styles.quantity_text}>{quantity}</Text>
        </View>
        <TouchableOpacity style={styles.quantityBtn} onPress={handleIncrease}>
          <Icon_Entypo name="plus" size={30} style={{color: '#654F43'}} />
        </TouchableOpacity>
      </View>

      {/*온도 선택*/}
      <View style={styles.optionTemperature}>
        {/********** HOT **********/}
        <TouchableOpacity
          style={userTempInput.hot.temperatureBtn}
          onPress={() => {
            SelectHot(userTempInput, setuserTempInput, styles);
            Settemp('hot');
          }}>
          <Image
            source={userTempInput.hot.img}
            style={styles.optionImage_hot}
          />
          <Text style={userTempInput.hot.temperature_text}>HOT</Text>
        </TouchableOpacity>

        {/********** ICE **********/}
        <TouchableOpacity
          style={userTempInput.ice.temperatureBtn}
          onPress={() => {
            SelectIce(userTempInput, setuserTempInput, styles);
            Settemp('ice');
          }}>
          <Image
            source={userTempInput.ice.img}
            style={styles.optionImage_ice}
          />
          <Text style={userTempInput.ice.temperature_text}>ICE</Text>
        </TouchableOpacity>
      </View>

      {/*사이즈 선택*/}
      <View style={styles.optionSize} ref={props.OptionSizeRef}>
        {/********** Small **********/}
        <TouchableOpacity
          style={userSizeInput.small.sizeBtn}
          onPress={() => {
            SelectSmall(userSizeInput, setuserSizeInput, styles);
            SetSize('small');
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
        <TouchableOpacity
          style={userSizeInput.regular.sizeBtn}
          onPress={() => {
            SelectRegular(userSizeInput, setuserSizeInput, styles);
            SetSize('regular');
          }}>
          <Image
            source={userSizeInput.regular.img}
            style={styles.optionImage_size_2}
          />
          <Text style={[styles.size_text_1, userSizeInput.regular.text_color]}>
            레귤러
          </Text>
          <Text style={[styles.size_text_2, userSizeInput.regular.text_color]}>
            3,200
          </Text>
        </TouchableOpacity>

        {/*********** Large **********/}
        <TouchableOpacity
          style={userSizeInput.large.sizeBtn}
          onPress={() => {
            SelectLarge(userSizeInput, setuserSizeInput, styles);
            SetSize('large');
          }}>
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
            props.SetvisibleOption({
              basicOption: 0,
              order: 0,
              takeoutOption: 0,
              payment: 0,
            });
            SetReset(props, styles, SetSize, Settemp, setQuantity);
          }}>
          <Text style={[styles.cancel_text, {fontSize: 18}]}>취소하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selectBtn_2}
          onPress={() => {
            if (size === '' || temp === '') {
              // Show an alert message to the user
              Tts.stop();
              Tts.speak('옵션을 선택하여주세요.');
              alert('옵션을 선택하여주세요.');
              return; // Exit the function
            }
            SetOption(props, size, temp, quantity, styles, SetSize, Settemp);
            props.SetvisibleOption({
              basicOption: 0,
              order: 0,
              takeoutOption: 0,
              payment: 0,
            });
            SetReset(props, styles, SetSize, Settemp, setQuantity);
          }}>
          <Text style={[styles.select_text, {fontSize: 18}]}>선택완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const addToCart = (props, size, temp, quantity, check) => {
  const {name, price} = props.SelectMenuInfo;
  // Check if the menu item already exists in the cart
  if (props.cartItems.has(name)) {
    const existingItem = props.cartItems.get(name);
    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity + 1,
      size: size,
      temp: temp,
    };
    // Update the quantity of the existing item in the cart
    props.setCartItems(new Map(props.cartItems.set(name, updatedItem)));
  } else {
    // Add a new item to the cart
    const newItem = {
      name,
      price,
      quantity: quantity,
      size: size,
      temp: temp,
    };
    props.setCartItems(new Map(props.cartItems.set(name, newItem)));
    console.log(props.CartItems);
  }
};

const SetOption = (props, _size, _temp, quantity, styles) => {
  props.SetOption({size: _size, temp: _temp});
  addToCart(props, _size, _temp, quantity);
  props.SetoptionTrigger(true);
};

const SetReset = (props, styles, SetSize, Settemp, setQuantity) => {
  SetSize('');
  Settemp('');
  setQuantity(1);
  props.setuserTempInput({
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

  props.setuserSizeInput({
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
