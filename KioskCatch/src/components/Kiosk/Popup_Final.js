import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';

// import LR_Kiosk_Tutorial_Complete from 'KioskCatch/src/components/Kiosk/LR_Kiosk_Tutorial_Complete';
// import PaymentCoupon from 'KioskCatch/src/components/Kiosk/PaymentCoupon';

const CompletePayment = props => {
  //console.log('navigation ' + props.navigation);

  //const [color, setColor] = useState(color);
  //const onClick = () => setColor(styles.setTemperatureBtn, styles.setTemperature_text);

  const navigation = useNavigation();
  const [open1, setOpen_tutorial_Complete] = useState(true);
  const [open, setOpen] = useState(false);

  // const [active, setActive] = useState(false);
  // const handleClick = () => {
  //     setActive(!active);
  // };
  console.log(props.styles.overlay_final);

  return (
    <View style={props.styles.overlay_final}>
      <View style={styles.optionContainer} ref={props.OptionRef}>
        {/*제목*/}
        <View style={styles.optionTitle}>
          <Text style={styles.optionTitleText}>결제완료</Text>
        </View>

        {/*내용*/}
        <View style={styles.optionContents}>
          {/*결제완료 정보*/}
          <View style={styles.optionComplete}>
            <View style={styles.completeInfo}>
              <Text style={styles.complete_text}>결제가 완료되었습니다.</Text>
            </View>
          </View>

          {/*주문번호*/}
          <View style={styles.orderNumber}>
            <TouchableOpacity
              style={styles.orderNumberBtn}
              onPress={() => navigation.navigate('LR_Kiosk_explore')}>
              <Text style={styles.orderNumber_text_1}>주문번호</Text>
              <Text style={styles.orderNumber_text_2}>250</Text>
            </TouchableOpacity>
          </View>

          {/*이전 버튼*/}
          <View style={styles.optionBtn}>
            <Animated.View
              style={[
                styles.selectBtn_1,
                {
                  transform: [{scale: props.animation}],
                },
              ]}>
              <TouchableOpacity
                style={[
                  styles.selectBtn_1,
                  {backgroundColor: '#FFC000', width: '100%'},
                ]}
                onPress={() =>
                  props.navigation.navigate('Tutorial_LRkiosk_list')
                }>
                <Text style={styles.cancel_text}>확인</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
      {/* {open1 ? (
        <LR_Kiosk_Tutorial_Complete
          closePopup={() => setOpen_tutorial_Complete(false)}
        />
      ) : null}
      {open ? <PaymentCoupon closePopup={() => setOpen(false)} /> : null} */}
    </View>
  );
};

export default CompletePayment;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    //backgroundColor: 'rgba(0, 0, 0, 0.36)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContainer: {
    width: '90%',
    height: '50%',
    zIndex: 1,
    backgroundColor: 'white',
    //justifyContent: 'space-between',
  },
  optionTitle: {
    backgroundColor: '#005D2E',
    alignItems: 'center',
    justifyContent: 'center',
    height: '11%',
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
  optionComplete: {
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '20%',
  },
  completeInfo: {
    //backgroundColor: '#D3CBC0',
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius: 5,
    //width: '25%',
    height: '100%',
    marginTop: 20,
  },
  complete_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 24,
    color: '#6A3B07',
  },

  orderNumber: {
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  orderNumberBtn: {
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  orderNumber_text_1: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: 'black',
  },
  orderNumber_text_2: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 80,
    color: 'black',
  },

  optionBtn: {
    //backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '12%',
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
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: '#3D3D4F',
  },
  select_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: 'white',
  },
});
