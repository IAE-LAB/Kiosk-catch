import React, {useRef, useState, useEffect} from 'react';
import {Text, View, Animated, Dimensions, StyleSheet} from 'react-native';
import Icon_Feather from 'react-native-vector-icons/Feather';
import Tts from 'react-native-tts';
var Tasktext = '';
export default TaskText = props => {
  const {width, height} = Dimensions.get('window');

  const animation = new Animated.Value(0);

  // const [TaskText, setTaskText] = useState('');

  Tts.setDefaultLanguage('ko-KR');
  Tts.setDefaultRate(0.6);

  if (
    props.KioskState === '2-3T' ||
    props.KioskState === '2-3-1T' ||
    props.KioskState == '4-1T' ||
    props.KioskState == '4-2T'
  ) {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 130,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.delay(3000),
      Animated.timing(animation, {
        toValue: -150,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  } else if (props.KioskState === '3-3T') {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: -150,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(50),
      Animated.timing(animation, {
        toValue: 90,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  } else {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: -150,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(50),
      Animated.timing(animation, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }

  SetText(props.KioskState);
  _onPressSpeech();

  return (
    <>
      {props.KioskState === '2-1T' ||
      props.KioskState === '2-1-2' ||
      props.KioskState === '2-2T' ||
      props.KioskState === '2-2-1T' ||
      props.KioskState === '2-3T' ||
      props.KioskState === '2-3-1T' ||
      props.KioskState === '2-3-2T' ||
      props.KioskState === '3-1T' ||
      props.KioskState === '3-1-1' ||
      props.KioskState === '3-1-2' ||
      props.KioskState === '3-2' ||
      props.KioskState === '3-3T' ||
      props.KioskState === '3-3-1' ||
      props.KioskState === '4-1T' ||
      props.KioskState === '4-1-1' ||
      props.KioskState === '4-2T' ||
      props.KioskState === '4-3T' ||
      props.KioskState === '4-1(order)' ? (
        <Animated.View
          style={{
            position: 'absolute',
            zIndex: 80,
            transform: [{translateY: animation}],
          }}>
          <View style={[style.container, {width: width}]}>
            <View style={style.subContainer}>
              <Icon_Feather
                name="help-circle"
                size={30}
                color={'#FFC000'}
                style={{marginRight: 10}}
              />
              <Text style={style.text}>{Tasktext}</Text>
            </View>
          </View>
        </Animated.View>
      ) : null}
    </>
  );
};

const _onPressSpeech = () => {
  Tts.stop();
  Tts.speak(Tasktext);
};

const SetText = KioskState => {
  console.log(KioskState);
  switch (KioskState) {
    case '2-1':
      Tasktext =
        '다음은 카테고리에요. 오른쪽 버튼을 눌러 추가적으로 더 많은 카테고리를 확인할 수 있어요. 설명 확인 후, 화면을 클릭해주세요.';
      break;
    case '2-2':
      Tasktext =
        '다음은 메뉴에요. 다음 버튼을 눌러 추가적으로 더 많은 메뉴를 확인할 수 있어요. 설명 확인 후, 화면을 클릭해주세요.';
      break;
    case '2-2-1':
      Tasktext =
        '메뉴를 선택해볼까요? 말차라떼를 확인하고 선택해보세요. 설명 확인 후, 화면을 클릭해주세요.';
      break;
    case '2-3':
      Tasktext =
        '말차라떼의 옵션을 선택해주세요. 선택 메뉴의 기본 옵션으로 온도와 사이즈가 제공돼요. 설명 확인 후, 화면을 클릭해주세요.';
      break;
    case '2-3-1':
      Tasktext =
        '대부분의 기본(보통) 사이즈는 레귤러라고 할 수 있어요. 설명 확인 후, 화면을 클릭해주세요.';
      break;
    case '3-1':
      Tasktext =
        '주문 단계에요. 담은 메뉴를 수정해볼까요? 선택한 메뉴가 맞는지 확인 후, 옵션 버튼을 눌러 원하는 항목으로 변경할 수 있어요.';
      break;
    case '3-3':
      Tasktext =
        '식사 장소를 선택해요. 선택한 메뉴를 어디서 먹을지 선택해주세요.';
      break;
    case '4-1':
      Tasktext =
        '결제를 진행해볼까요? 원래는 신용카드를 눌러 결제를 진행해요. 하지만 이번에는 모바일 쿠폰을 이용하여 결제를 진행해보아요.';
      break;
    case '4-2':
      Tasktext =
        '사용할 모바일 쿠폰을 사진과 같이 바코드에 찍어 결제가 가능해요.';
      break;
    case '4-3':
      Tasktext =
        '축하합니다! 결제가 완료되었어요! 마지막으로 주문번호를 확인해보아요. 확인버튼을 누르면 홈으로 되돌아 갑니다.';
      break;
    case '2-1T':
      Tasktext = '카테고리의 "다음" 버튼을 누르세요';
      break;
    case '2-1-2':
      Tasktext = '카테고리의 "이전" 버튼을 누르세요';
      break;
    case '2-2T':
      Tasktext = '"다음" 버튼을 누르세요';
      break;
    case '2-2-1T':
      Tasktext = '"말차라떼"를 선택하세요';
      break;
    case '2-3T':
      Tasktext = '"ICE(차가운음료)"를 선택하세요';
      break;
    case '2-3-1T':
      Tasktext = '"레귤러(보통 크기)"를 선택하세요';
      break;
    case '2-3-2T':
      Tasktext = '"선택완료" 버튼을 누르세요';
      break;
    case '3-1T':
      Tasktext = '"옵션" 버튼을 누르세요';
      break;
    case '3-1-1':
      Tasktext = '"HOT(따뜻한음료)"으로 변경하세요';
      break;
    case '3-1-2':
      Tasktext = '"선택완료" 버튼을 누르세요';
      break;
    case '3-2':
      Tasktext = '"결제하기" 버튼을 누르세요';
      break;
    case '3-3T':
      Tasktext = '"테이크 아웃" 버튼을 누르세요';
      break;
    case '3-3-1':
      Tasktext = '"다음으로" 버튼을 누르세요';
      break;
    case '4-1T':
      Tasktext = '"모바일 쿠폰" 버튼을 누르세요';
      break;
    case '4-1-1':
      Tasktext = '"결제하기" 버튼을 누르세요';
      break;
    case '4-2T':
      Tasktext = '"바코드"를 누르세요';
      break;
    case '4-3T':
      Tasktext = '"확인" 버튼을 누르세요';
      break;
    case '4-1(order)':
      Tasktext = '"결제하기" 버튼을 누르세요';
      break;
    default:
      break;
  }
};

const style = StyleSheet.create({
  text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 18,
    color: 'black',
  },
  container: {
    paddingTop: 13,
    paddingBottom: 13,

    backgroundColor: 'white',
    borderColor: '#FFC000',
    borderWidth: 3,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
