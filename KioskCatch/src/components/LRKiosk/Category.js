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


  console.log(props.state);
  return (
    <View style={styles.category} ref={props.catagoryRef}>
      <TouchableOpacity>
        <Icon_FontAwesome
          name="angle-left"
          size={40}
          style={styles.category_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={userInput.state1.category}
        onPress={() => state1ChangeHandler(setUserInput,props.setCategoryState,props.setPageState)}>
        <Text style={userInput.state1.category_text}>커피</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={userInput.state2.category}
        onPress={() => state2ChangeHandler(setUserInput,props.setCategoryState,props.setPageState)}>
        <Text style={userInput.state2.category_text}>음료</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={userInput.state3.category}
        onPress={() => state3ChangeHandler(setUserInput,props.setCategoryState,props.setPageState)}>
        <Text style={userInput.state3.category_text}>차</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('LR_Kiosk_explore_category', {
            KioskState: props.KioskState,
            state: ['2-1-2', '카테고리 확인'],
          })
        }>
        {props.state[0] === '2-1' ? (
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

const state1ChangeHandler = (setUserInput, setCategoryState,setPageState) => {
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
  setCategoryState("coffee");
  setPageState(1);
};

const state2ChangeHandler = (setUserInput, setCategoryState,setPageState) => {
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
  setCategoryState("beverage");
  setPageState(1);
};

const state3ChangeHandler = (setUserInput, setCategoryState,setPageState) => {
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
  setCategoryState("tea");
  setPageState(1);
};
