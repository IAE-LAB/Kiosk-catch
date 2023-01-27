import {Text, View, Animated, Dimensions, StyleSheet} from 'react-native';
import Icon_Feather from 'react-native-vector-icons/Feather';

export default TaskText = props => {
  const {width, height} = Dimensions.get('window');

  const animation = new Animated.Value(0);
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

  return (
    <Animated.View
      style={{position: 'absolute', transform: [{translateY: animation}]}}>
      <View style={[style.container, {width: width}]}>
        <View style={style.subContainer}>
          <Icon_Feather
            name="help-circle"
            size={30}
            color={'#FFC000'}
            style={{marginRight: 10}}
          />
          {props.KioskState === '2-1T' ? (
            <Text style={style.text}>카테고리의 다음 버튼을 누르세요</Text>
          ) : null}
          {props.KioskState === '2-1-2' ? (
            <Text style={style.text}>카테고리의 이전 버튼을 누르세요</Text>
          ) : null}
          {props.KioskState === '2-2' ? (
            <Text style={style.text}>다음 버튼을 누르세요</Text>
          ) : null}
          {props.KioskState === '2-2-1' ? (
            <Text style={style.text}>말차라떼를 선택하세요</Text>
          ) : null}
          {props.KioskState === '2-3' ? (
            <Text style={style.text}>Hot을 선택하세요</Text>
          ) : null}
        </View>
      </View>
    </Animated.View>
  );
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
