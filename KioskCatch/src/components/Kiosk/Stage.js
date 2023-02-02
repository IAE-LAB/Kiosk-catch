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
import Icon_FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// 단계를 나타내는 컴포넌트 헤더
const Stage = props => {
  console.log('navigation ' + props.navigation);
  console.log(props.state);

  // header animation
  const animation = useRef(new Animated.Value(0)).current;
  props.state === '2-3T' ||
  props.state === '2-3-1T' ||
  props.state === '3-3T' ||
  props.state === '4-1T' ||
  props.state === '4-2T'
    ? Animated.sequence([
        Animated.timing(animation, {
          toValue: -300,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start()
    : Animated.sequence([
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
      <StageHeader_set state={props.state}></StageHeader_set>
    </Animated.View>
  );
};

const StageHeader_set = props => {
  console.log(props.state);
  return (
    <View>
      {/***** stage_header_(1)시작 단계 *****/}
      {props.state === '1-1' ? <StageHeader_start /> : null}
      {/***** stage_header_(2)탐색 단계 *****/}
      {props.state === '2-1' ||
      props.state === '2-2' ||
      props.state === '2-2-1' ||
      props.state === '2-3' ||
      props.state === '2-3-1' ? (
        <StageHeader_explore />
      ) : null}
      {/* 외래어 알려주기 - 온도*/}
      {props.state === '2-3T' ? <StageHeader_Temperature /> : null}
      {/* 외래어 알려주기 - 사이즈*/}
      {props.state === '2-3-1T' ? <StageHeader_Size /> : null}
      {/***** stage_header_(3)주문 단계 *****/}
      {props.state === '3-1' || props.state === '3-3' ? (
        <StageHeader_order />
      ) : null}
      {/* 외래어 알려주기 - 사이즈*/}
      {props.state === '3-3T' ? <StageHeader_TakeOut /> : null}
      {/***** stage_header_(4)결제 단계 *****/}
      {props.state === '4-1' ? <StageHeader_Pay /> : null}
      {/***** stage_header_(3)주문 단계 *****/}
      {props.state === '4-1T' ? <StageHeader_Cupon /> : null}
      {/***** stage_header_(3)주문 단계 *****/}
      {props.state === '4-2T' ? <StageHeader_Fianl /> : null}
      {/***** stage_header_(5)결제 완료 단계 *****/}
      {props.state === '4-3' ? <StageHeader_complete /> : null}
    </View>
  );
};

/***** 외래어 알려주기-결제 *****/
const StageHeader_Fianl = () => {
  return (
    <View
      style={[
        styles.stage_header_word,
        {
          justifyContent: 'center',
          alignItems: 'center',
          height: 130,
        },
      ]}>
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.stage_header_tittle_text}>외래어풀이 : 결제</Text>
        <View style={[styles.rowContainer, {marginTop: 10}]}>
          <View style={[styles.stage_word_text_container, {width: 90}]}>
            <Text style={[styles.stage_word_tittle_text]}>바코드</Text>
          </View>
          <Icon_FontAwesome5
            name="long-arrow-alt-right"
            size={22}
            color="#E02649"
            style={styles.icon_style}
          />
          <View>
            <Text
              style={[
                styles.stage_word_tittle_text,
                {
                  color: '#E02649',
                  fontSize: 20,
                },
              ]}>
              컴퓨터가
            </Text>
            <Text
              style={[
                styles.stage_word_tittle_text,
                {
                  color: '#E02649',
                  fontSize: 20,
                },
              ]}>
              판독할 수 있도록
            </Text>
            <Text
              style={[
                styles.stage_word_tittle_text,
                {
                  color: '#E02649',
                  fontSize: 20,
                },
              ]}>
              고안된 코드
            </Text>
          </View>
          {/* <Image
            source={require('KioskCatch/assets/img/kiosk/ice.png')}
            style={styles.IconImage}></Image> */}
        </View>
      </View>
    </View>
  );
};

/***** 외래어 알려주기-결제 *****/
const StageHeader_Cupon = () => {
  return (
    <View
      style={[
        styles.stage_header_word,
        {
          justifyContent: 'center',
          alignItems: 'center',
          height: 130,
        },
      ]}>
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.stage_header_tittle_text}>외래어풀이 : 결제</Text>
        <View style={[styles.rowContainer, {marginTop: 10}]}>
          <View style={[styles.stage_word_text_container, {width: 120}]}>
            <Text style={[styles.stage_word_tittle_text]}>모바일쿠폰</Text>
          </View>
          <Icon_FontAwesome5
            name="long-arrow-alt-right"
            size={22}
            color="#E02649"
            style={styles.icon_style}
          />
          <View>
            <Text
              style={[
                styles.stage_word_tittle_text,
                {
                  color: '#E02649',
                  fontSize: 20,
                },
              ]}>
              휴대용 등의 모바일
            </Text>
            <Text
              style={[
                styles.stage_word_tittle_text,
                {
                  color: '#E02649',
                  fontSize: 20,
                },
              ]}>
              기기로 내려 받아
            </Text>
            <Text
              style={[
                styles.stage_word_tittle_text,
                {
                  color: '#E02649',
                  fontSize: 20,
                },
              ]}>
              사용하는 상품권
            </Text>
          </View>
          {/* <Image
            source={require('KioskCatch/assets/img/kiosk/ice.png')}
            style={styles.IconImage}></Image> */}
        </View>
      </View>
    </View>
  );
};

/***** 외래어 알려주기-포장하기 *****/
const StageHeader_TakeOut = () => {
  return (
    <View
      style={[
        styles.stage_header_word,
        {
          justifyContent: 'center',
          alignItems: 'center',
          height: 90,
        },
      ]}>
      <View style={{flexDirection: 'column'}}>
        <Text style={[styles.stage_header_tittle_text, {width: 220}]}>
          외래어풀이 : 포장하기
        </Text>
        <View style={[styles.rowContainer, {marginTop: 10}]}>
          <View style={[styles.stage_word_text_container, {width: 120}]}>
            <Text style={[styles.stage_word_tittle_text]}>테이크아웃</Text>
          </View>
          <Icon_FontAwesome5
            name="long-arrow-alt-right"
            size={22}
            color="#E02649"
            style={styles.icon_style}
          />
          <Text
            style={[
              styles.stage_word_tittle_text,
              {
                color: '#E02649',
              },
            ]}>
            포장하기
          </Text>
          {/* <Image
            source={require('KioskCatch/assets/img/kiosk/ice.png')}
            style={styles.IconImage}></Image> */}
        </View>
      </View>
    </View>
  );
};

/***** 외래어 알려주기-사이즈 *****/
const StageHeader_Size = () => {
  return (
    <View
      style={[
        styles.stage_header_word,
        {
          justifyContent: 'center',
          alignItems: 'center',
          height: 130,
        },
      ]}>
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.stage_header_tittle_text}>외래어풀이 : 크기</Text>
        <View style={styles.rowContainer}>
          <View style={styles.columContainer}>
            <Image
              source={require('KioskCatch/assets/img/kiosk/small.png')}
              style={[styles.IconImage_Size, {width: 30, height: 30}]}></Image>
            <Text style={[styles.stage_word_tittle_text, {fontSize: 22}]}>
              스몰
            </Text>
            <Text style={[styles.stage_word_tittle_text, {fontSize: 18}]}>
              (작은 크기)
            </Text>
          </View>
          <Icon_FontAwesome5
            name="chevron-left"
            size={25}
            color="#E02649"
            style={styles.icon_style_size}
          />
          <View style={styles.columContainer}>
            <Image
              source={require('KioskCatch/assets/img/kiosk/small.png')}
              style={styles.IconImage_Size}></Image>
            <Text style={[styles.stage_word_tittle_text, {fontSize: 22}]}>
              레귤러
            </Text>
            <Text style={[styles.stage_word_tittle_text, {fontSize: 17}]}>
              (보통 크기)
            </Text>
          </View>
          <Icon_FontAwesome5
            name="chevron-left"
            size={25}
            color="#E02649"
            style={styles.icon_style_size}
          />
          <View style={styles.columContainer}>
            <Image
              source={require('KioskCatch/assets/img/kiosk/small.png')}
              style={[styles.IconImage_Size, {width: 35, height: 50}]}></Image>
            <Text style={[styles.stage_word_tittle_text, {fontSize: 22}]}>
              라지
            </Text>
            <Text style={[styles.stage_word_tittle_text, {fontSize: 17}]}>
              (큰 크기)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

/***** 외래어 알려주기-온도 *****/
const StageHeader_Temperature = () => {
  return (
    <View
      style={[
        styles.stage_header_word,
        {
          justifyContent: 'center',
          alignItems: 'center',
          height: 130,
        },
      ]}>
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.stage_header_tittle_text}>외래어풀이 : 온도</Text>
        <View style={styles.rowContainer}>
          <View style={styles.stage_word_text_container}>
            <Text style={[styles.stage_word_tittle_text]}>ICE</Text>
          </View>
          <Icon_FontAwesome5
            name="long-arrow-alt-right"
            size={22}
            color="#E02649"
            style={styles.icon_style}
          />
          <Text
            style={[
              styles.stage_word_tittle_text,
              {
                color: '#1EAAE7',
              },
            ]}>
            차가운 음료
          </Text>
          <Image
            source={require('KioskCatch/assets/img/kiosk/ice.png')}
            style={styles.IconImage}></Image>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.stage_word_text_container}>
            <Text style={[styles.stage_word_tittle_text]}>HOT</Text>
          </View>
          <Icon_FontAwesome5
            name="long-arrow-alt-right"
            size={22}
            color="#E02649"
            style={styles.icon_style}
          />
          <Text
            style={[
              styles.stage_word_tittle_text,
              {
                color: '#D11414',
              },
            ]}>
            따뜻한 음료
          </Text>
          <Image
            source={require('KioskCatch/assets/img/kiosk/hot.png')}
            style={styles.IconImage}></Image>
        </View>
      </View>
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
  columContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  IconImage: {
    width: 30,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  IconImage_Size: {
    width: 30,
    height: 40,
    resizeMode: 'contain',
  },
  stage_header_tittle_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 25,
    color: 'black',
    borderBottomWidth: 1.5,
    borderBottomColor: '#E02649',
    width: 200,
  },
  stage_word_tittle_text: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 25,
    color: 'black',
  },
  stage_word_text_container: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    alignItems: 'center',
    width: 60,
  },
  headerContainer: {
    width: '100%',
    height: 94,
    position: 'absolute',
    zIndex: 100,
  },
  icon_style: {
    marginLeft: 20,
    marginRight: 20,
  },
  icon_style_size: {
    marginLeft: 10,
    marginRight: 10,
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
  stage_header_word: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
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
