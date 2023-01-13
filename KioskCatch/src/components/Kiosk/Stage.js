import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// 단계를 나타내는 컴포넌트 헤더
const Stage = props => {
  console.log('navigation ' + props.navigation);
  console.log(props.state);

  // header title setup (stage name : props.state[1])
  // useEffect(() => {
  //   props.navigation.setOptions({title: props.state[1]});
  // }, [props.navigation]);

  // header animation
  const animation = useRef(new Animated.Value(0)).current;
  Animated.sequence([
    Animated.delay(500),
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.delay(2000),
    Animated.timing(animation, {
      toValue: -150,
      duration: 500,
      useNativeDriver: true,
    }),
  ]).start();
  return (
    <Animated.View
      style={[styles.headerContainer, {transform: [{translateY: animation}]}]}>
      {/* stage header component / props.state[0] is stage number */}
      <StageHeader_set state={props.state[0]}></StageHeader_set>
    </Animated.View>
  );
};

const StageHeader_set = props => {
  return (
    <View>
      {/***** stage_header_(1)시작 단계 *****/}
      {props.state === '1-1' ? <StageHeader_start /> : null}
      {/***** stage_header_(2)탐색 단계 *****/}
      {props.state === '2-1' ? <StageHeader_explore /> : null}
      {/***** stage_header_(3)주문 단계 *****/}
      {props.state === '3-1' ? <StageHeader_order /> : null}
      {/***** stage_header_(4)결제 단계 *****/}
      {props.state === '4-1' ? <StageHeader_Pay /> : null}
      {/***** stage_header_(5)결제 완료 단계 *****/}
      {props.state === '4-6' ? <StageHeader_complete /> : null}
    </View>
  );
};

/***** stage_header_(1)시작 단계 *****/
const StageHeader_start = () => {
  return (
    <View style={styles.stage_header}>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>시작</Text>
        <Icon_MaterialCommunityIcons
          name="record-circle-outline"
          style={styles.circle}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border, {borderBottomColor: '#D1D5DB'}]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={[styles.stage_header_text]}>탐색</Text>
        <Icon_MaterialCommunityIcons
          name="record-circle-outline"
          style={[
            styles.circle,
            {color: '#9CA3AF'},
          ]}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border, {borderBottomColor: '#D1D5DB'}]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>주문</Text>
        <Icon_MaterialCommunityIcons
          name="record-circle-outline"
          style={[
            styles.circle,
            {color: '#9CA3AF'},
          ]}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border, {borderBottomColor: '#D1D5DB'}]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>결제</Text>
        <Icon_MaterialCommunityIcons
          name="record-circle-outline"
          style={[
            styles.circle,
            {color: '#9CA3AF'},
          ]}></Icon_MaterialCommunityIcons>
      </View>
    </View>
  );
};

/***** stage_header_(2)탐색 단계 *****/
const StageHeader_explore = () => {
  return (
    <View style={styles.stage_header}>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>시작</Text>
        <Icon_MaterialCommunityIcons
          name="check-circle"
          style={styles.circle}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={[styles.stage_header_text]}>탐색</Text>
        <Icon_MaterialCommunityIcons
          name="record-circle-outline"
          style={[styles.circle]}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border, {borderBottomColor: '#D1D5DB'}]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>주문</Text>
        <Icon_MaterialCommunityIcons
          name="record-circle-outline"
          style={[
            styles.circle,
            {color: '#9CA3AF'},
          ]}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border, {borderBottomColor: '#D1D5DB'}]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>결제</Text>
        <Icon_MaterialCommunityIcons
          name="record-circle-outline"
          style={[
            styles.circle,
            {color: '#9CA3AF'},
          ]}></Icon_MaterialCommunityIcons>
      </View>
    </View>
  );
};
/***** stage_header_(3)주문 단계 *****/
const StageHeader_order = () => {
  return (
    <View style={styles.stage_header}>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>시작</Text>
        <Icon_MaterialCommunityIcons
          name="check-circle"
          style={styles.circle}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={[styles.stage_header_text]}>탐색</Text>
        <Icon_MaterialCommunityIcons
          name="check-circle"
          style={[styles.circle]}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>주문</Text>
        <Icon_MaterialCommunityIcons
          name="record-circle-outline"
          style={[styles.circle]}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border, {borderBottomColor: '#D1D5DB'}]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>결제</Text>
        <Icon_MaterialCommunityIcons
          name="record-circle-outline"
          style={[
            styles.circle,
            {color: '#9CA3AF'},
          ]}></Icon_MaterialCommunityIcons>
      </View>
    </View>
  );
};
/***** stage_header_(4)결제 단계 *****/
const StageHeader_Pay = () => {
  return (
    <View style={styles.stage_header}>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>시작</Text>
        <Icon_MaterialCommunityIcons
          name="check-circle"
          style={styles.circle}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={[styles.stage_header_text]}>탐색</Text>
        <Icon_MaterialCommunityIcons
          name="check-circle"
          style={[styles.circle]}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>주문</Text>
        <Icon_MaterialCommunityIcons
          name="check-circle"
          style={[styles.circle]}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>결제</Text>
        <Icon_MaterialCommunityIcons
          name="record-circle-outline"
          style={[styles.circle]}></Icon_MaterialCommunityIcons>
      </View>
    </View>
  );
};
/***** stage_header_(5)결제 완료 단계 *****/
const StageHeader_complete = () => {
  return (
    <View style={styles.stage_header}>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>시작</Text>
        <Icon_MaterialCommunityIcons
          name="check-circle"
          style={styles.circle}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={[styles.stage_header_text]}>탐색</Text>
        <Icon_MaterialCommunityIcons
          name="check-circle"
          style={[styles.circle]}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>주문</Text>
        <Icon_MaterialCommunityIcons
          name="check-circle"
          style={[styles.circle]}></Icon_MaterialCommunityIcons>
      </View>
      <View style={[styles.border]}></View>
      <View style={styles.stage_header_text_header}>
        <Text style={styles.stage_header_text}>결제</Text>
        <Icon_MaterialCommunityIcons
          name="check-circle"
          style={[styles.circle]}></Icon_MaterialCommunityIcons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 94,
    position: 'absolute',
    zIndex: 1,
  },
  stage_header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'stretch',
    height: 94,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
  },
  stage_header_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: 'black',
  },
  stage_header_text_header: {
    flex: 1,
    width: 50,
    marginTop: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  circle: {
    fontSize: 45,
    color: '#FFC000',
  },
  border: {
    borderBottomColor: '#FFC000',
    borderBottomWidth: 3,
    width: 68,
    height: 51,
    marginLeft: -10,
    marginRight: -10,
  },
});

export default Stage;
