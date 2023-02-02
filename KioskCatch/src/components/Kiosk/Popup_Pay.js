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

// import CompletePayment from 'KioskCatch/src/components/Kiosk/CompletePayment';

const PaymentCoupon = props => {
  //console.log('navigation ' + props.navigation);

  //const [color, setColor] = useState(color);
  //const onClick = () => setColor(styles.setTemperatureBtn, styles.setTemperature_text);

  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  // const [active, setActive] = useState(false);
  // const handleClick = () => {
  //     setActive(!active);
  // };

  return (
    <View style={props.styles.overlay_pay}>
      <View style={styles.optionContainer} ref={props.OptionRef}>
        {/*제목*/}
        <View style={styles.optionTitle}>
          <Text style={styles.optionTitleText}>모바일 쿠폰/바코드</Text>
        </View>

        {/*내용*/}
        <View style={styles.optionContents}>
          {/*사용 정보*/}
          <View style={styles.optionCoupon}>
            <TouchableOpacity style={styles.couponInfo}>
              <Text style={styles.coupon_text_1}>사용하실 쿠폰의 바코드를</Text>
              <Text style={styles.coupon_text_1}>
                아래 바코드 리더기에 스캔해주세요
              </Text>
              <Text style={styles.coupon_text_2}>
                *쿠폰의 바코드 인식이 안될 경우 쿠폰번호를 입력하세요
              </Text>
            </TouchableOpacity>
          </View>

          {/*사용 그림*/}
          <View style={styles.optionImage}>
            {props.KioskState === '4-2T' ? (
              <Animated.View
                style={[
                  styles.imageBtn,
                  {
                    transform: [{scale: props.animation}],
                  },
                ]}>
                <TouchableOpacity
                  style={[
                    styles.imageBtn,
                    {backgroundColor: '#FFC000', width: '100%'},
                  ]}
                  onPress={() => {
                    props.SetKioskState(['4-3', '결제']);
                    props.SetvisibleOption({
                      basicOption: 0,
                      order: 0,
                      takeoutOption: 0,
                      payment: 0,
                      pay: 0,
                      final: 1,
                    });
                  }}>
                  <Image
                    source={require('KioskCatch/assets/img/kiosk/barcode.png')}
                    style={styles.kiosk_image}
                  />
                </TouchableOpacity>
              </Animated.View>
            ) : (
              <TouchableOpacity style={styles.imageBtn}>
                <Image
                  source={require('KioskCatch/assets/img/kiosk/barcode.png')}
                  style={styles.kiosk_image}
                />
              </TouchableOpacity>
            )}

            {/* <Image
                        source={require('KioskCatch/assets/img/kiosk/barcode.png')}
                        style={styles.kiosk_image} /> */}
            {/* <View style={styles.paymentBtn}>
                        <Image
                            source={require('KioskCatch/assets/img/kiosk/barcode.png')}
                            style={styles.kiosk_image} />
                    </View> */}
            {/* <View style={styles.paymentBtn}>
                        <Icon_Ionicons name="ios-phone-portrait-outline" size={100} style={{color: 'black'}} />
                    </View> */}
          </View>

          {/*이전/쿠폰번호 버튼*/}
          <View style={styles.optionBtn}>
            <TouchableOpacity
              style={styles.selectBtn_1}
              // onPress={closePopup}
            >
              <Text style={styles.cancel_text}>이전</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selectBtn_2}
              //onPress={() => navigation.navigate('LR_Kiosk_explore_cart')}
            >
              <Text style={styles.select_text}>쿠폰번호 입력</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* {open ? <CompletePayment closePopup={() => setOpen(false)} /> : null} */}
    </View>
  );
};

export default PaymentCoupon;

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
    justifyContent: 'space-between',
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
  optionCoupon: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '23%',
  },
  couponInfo: {
    //backgroundColor: '#D3CBC0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius: 5,
    //width: '25%',
    height: '100%',
  },
  coupon_text_1: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: 'black',
  },
  coupon_text_2: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },

  optionImage: {
    //backgroundColor: 'red',
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '55%',
  },
  imageBtn: {
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    //marginHorizontal: -25,
  },
  kiosk_image: {
    resizeMode: 'contain',
    width: '83%',
    //height: '100%',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  optionBtn: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
