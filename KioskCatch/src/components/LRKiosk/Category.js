import React, {useRef, useState, useEffect} from 'react';
import 'react-native-gesture-handler';

import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';

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

// 카테고리 컴포넌트
export default Category = props => {
  const [userInput, setUserInput] = useState({
    state1: {
      category: styles.categoryBtn_Select,
      category_text: styles.category_text_select,
    },
    state2: {
      category: styles.categoryBtn,
      category_text: styles.category_text,
    },
    state3: {
      category: styles.categoryBtn,
      category_text: styles.category_text,
    },
  });

  var [CaText, SetCaText] = useState(['커피', '음료', '차']);

  const CategoryList = CaText.map((val, index) =>
    CatagoryText(
      val,
      index,
      userInput,
      setUserInput,
      props.setCategoryState,
      props.setPageState,
    ),
  );

  // console.log(props.state);
  return (
    <View style={styles.category} ref={props.catagoryRef}>
      <TouchableOpacity
        onPress={() =>
          PrevBtn(
            props.KioskState,
            props.SetKioskState,
            props.setCategoryState,
            props.setPageState,
            SetCaText,
          )
        }>
        {props.KioskState === '2-1-2' ? (
          <Animated.View
            style={{
              transform: [{scale: props.animation}],
            }}>
            <Icon_FontAwesome
              name="angle-left"
              size={40}
              style={[styles.category_icon, {color: '#FFC000'}]}
            />
          </Animated.View>
        ) : (
          <Icon_FontAwesome
            name="angle-left"
            size={40}
            style={styles.category_icon}
          />
        )}
      </TouchableOpacity>
      {CategoryList}
      <TouchableOpacity
        onPress={() =>
          NextBtn(
            props.KioskState,
            props.SetKioskState,
            props.setCategoryState,
            props.setPageState,
            SetCaText,
          )
        }>
        {props.KioskState === '2-1' || props.KioskState === '2-1T' ? (
          <Animated.View
            style={{
              transform: [{scale: props.animation}],
            }}>
            <Icon_FontAwesome
              name="angle-right"
              size={40}
              style={[styles.category_icon, {color: '#FFC000'}]}
            />
          </Animated.View>
        ) : (
          <Icon_FontAwesome
            name="angle-right"
            size={40}
            style={[styles.category_icon]}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const PrevBtn = (
  KioskState,
  SetKioskState,
  setCategoryState,
  setPageState,
  SetCaText,
) => {
  if (KioskState === '2-1-2') SetKioskState(['2-2', '메뉴 선택']);
  SetCaText(['커피', '음료', '차']);
  setCategoryState('coffee');
  setPageState(1);
};

const NextBtn = (
  KioskState,
  SetKioskState,
  setCategoryState,
  setPageState,
  SetCaText,
) => {
  if (KioskState === '2-1T') SetKioskState(['2-1-2', '카테고리 확인']);
  SetCaText(['빵', '과자', '빙수']);
  setCategoryState('bread');
  setPageState(1);
};

const CatagoryText = (
  val,
  index,
  userInput,
  setUserInput,
  setCategoryState,
  setPageState,
) => {
  var selectStyle;
  var selectTextStyle;

  if (index === 0) {
    selectStyle = userInput.state1.category;
    selectTextStyle = userInput.state1.category_text;
  } else if (index === 1) {
    selectStyle = userInput.state2.category;
    selectTextStyle = userInput.state2.category_text;
  } else {
    selectStyle = userInput.state3.category;
    selectTextStyle = userInput.state3.category_text;
  }

  return (
    <TouchableOpacity
      style={selectStyle}
      onPress={() =>
        ChangeHandler(val, index, setUserInput, setCategoryState, setPageState)
      }>
      <Text style={selectTextStyle}>{val}</Text>
    </TouchableOpacity>
  );
};

const ChangeHandler = (
  val,
  index,
  setUserInput,
  setCategoryState,
  setPageState,
) => {
  if (index === 0) {
    state1ChangeHandler(setUserInput, setCategoryState, setPageState);
    if (val === '커피') setCategoryState('coffee');
    else setCategoryState('bread');
  } else if (index === 1) {
    state2ChangeHandler(setUserInput, setCategoryState, setPageState);
    if (val === '음료') setCategoryState('beverage');
    else setCategoryState('snack');
  } else {
    state3ChangeHandler(setUserInput, setCategoryState, setPageState);
    if (val === '차') setCategoryState('tea');
    else setCategoryState('ice');
  }
  setPageState(1);
};

const state1ChangeHandler = (setUserInput, setCategoryState, setPageState) => {
  setUserInput({
    state1: {
      category: styles.categoryBtn_Select,
      category_text: styles.category_text_select,
    },
    state2: {
      category: styles.categoryBtn,
      category_text: styles.category_text,
    },
    state3: {
      category: styles.categoryBtn,
      category_text: styles.category_text,
    },
  });
};

const state2ChangeHandler = (setUserInput, setCategoryState, setPageState) => {
  setUserInput({
    state1: {
      category: styles.categoryBtn,
      category_text: styles.category_text,
    },
    state2: {
      category: styles.categoryBtn_Select,
      category_text: styles.category_text_select,
    },
    state3: {
      category: styles.categoryBtn,
      category_text: styles.category_text,
    },
  });
};

const state3ChangeHandler = (setUserInput, setCategoryState, setPageState) => {
  setUserInput({
    state1: {
      category: styles.categoryBtn,
      category_text: styles.category_text,
    },
    state2: {
      category: styles.categoryBtn,
      category_text: styles.category_text,
    },
    state3: {
      category: styles.categoryBtn_Select,
      category_text: styles.category_text_select,
    },
  });
};
