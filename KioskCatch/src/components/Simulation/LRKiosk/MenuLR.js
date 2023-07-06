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
import styles from 'KioskCatch/src/style/LR_Kiosk/LR_Kiosk_Explore';

export default MenuLR = props => {
  return (
    <View style={styles.menu_LR}>
      <TouchableOpacity style={styles.LR_btn}>
        <Text
          style={styles.LR_text}
          onPress={() =>
            PreviousChangeHandler(
              props.CategoryState,
              props.PageState,
              props.setPageState,
            )
          }>
          이전
        </Text>
      </TouchableOpacity>
      <Circle CategoryState={props.CategoryState} PageState={props.PageState} />
      <TouchableOpacity
        style={styles.LR_btn}
        onPress={() =>
          NextChangeHandler(
            props.CategoryState,
            props.PageState,
            props.setPageState,
            props.KioskState,
            props.SetKioskState,
          )
        }>
        <Text style={styles.LR_text}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const Circle = props => {
  return (
    <View style={styles.circle}>
      {props.CategoryState === 'coffee' || props.CategoryState === 'bread' ? (
        <>
          {props.PageState === 1 ? (
            <>
              <View style={styles.circle1} />
              <View style={styles.circle2} />
              <View style={styles.circle2} />
            </>
          ) : null}
          {props.PageState === 2 ? (
            <>
              <View style={styles.circle2} />
              <View style={styles.circle1} />
              <View style={styles.circle2} />
            </>
          ) : null}
          {props.PageState === 3 ? (
            <>
              <View style={styles.circle2} />
              <View style={styles.circle2} />
              <View style={styles.circle1} />
            </>
          ) : null}
        </>
      ) : null}
      {props.CategoryState === 'beverage' ||
      props.CategoryState === 'tea' ||
      props.CategoryState === 'snack' ||
      props.CategoryState === 'ice' ? (
        <>
          {props.PageState === 1 ? (
            <>
              <View style={styles.circle1} />
            </>
          ) : null}
        </>
      ) : null}
      {/* {props.CategoryState === 'tea' ? (
        <>
          {props.PageState === 1 ? (
            <>
              <View style={styles.circle1} />
            </>
          ) : null}
        </>
      ) : null} */}
    </View>
  );
};

const equal = (state, CategoryState, setPageState) => {
  if (CategoryState === 'coffee') {
    if (state > 0 && state < 4) {
      setPageState(state);
    }
  } else if (CategoryState === ' beverage') {
    if (state > 0 && state < 2) {
      setPageState(state);
    }
  } else if (CategoryState === 'tea') {
    if (state > 0 && state < 2) {
      setPageState(state);
    }
  } else if (CategoryState === 'bread') {
    if (state > 0 && state < 4) {
      setPageState(state);
    }
  } else if (CategoryState === ' snack') {
    if (state > 0 && state < 2) {
      setPageState(state);
    }
  } else if (CategoryState === ' ice') {
    if (state > 0 && state < 2) {
      setPageState(state);
    }
  }
};

const PreviousChangeHandler = (CategoryState, PageState, setPageState) => {
  state = PageState - 1;
  console.log('AAA');
  equal(state, CategoryState, setPageState);
};

const NextChangeHandler = (
  CategoryState,
  PageState,
  setPageState,
  KioskState,
  SetKioskState,
) => {
  console.log('AAA');
  if (KioskState === '2-2T') SetKioskState(['2-2-1', '메뉴선택']);
  state = PageState + 1;
  equal(state, CategoryState, setPageState);
};
