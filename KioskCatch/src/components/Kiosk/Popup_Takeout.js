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

// import LR_Kiosk_Tutorial_Packaging from 'KioskCatch/src/components/Kiosk/LR_Kiosk_Tutorial_Packaging';
// import PaymentPopup from 'KioskCatch/src/components/Kiosk/PaymentPopup';

export default PackagingPopup = props => {
  //console.log('navigation ' + props.navigation);

  const navigation = useNavigation();
  const [open1, setOpen_tutorial_packaging] = useState(true);
  const [open, setOpen] = useState(false);

  let [userTempInput, setuserTempInput] = useState({
    takeout: {
      icon: styles.icon,
      text: styles.pay_text,
      backgroundColor: styles.paymentBtn,
    },
    cafe: {
      icon: styles.icon,
      text: styles.pay_text,
      backgroundColor: styles.paymentBtn,
    },
  });

  return (
    <View style={props.styles.overlay2}>
      <View style={styles.optionContainer}>
        {/*제목*/}
        <View style={styles.optionTitle}>
          <Text style={styles.optionTitleText}>포장방법을 선택해주세요</Text>
        </View>

        {/*내용*/}
        <View style={styles.optionContents}>
          {/*결제 정보*/}
          {/* <View style={styles.optionAmount}>
            <TouchableOpacity style={styles.amountInfo}>
              <Text style={styles.amount_text_1}>전체금액</Text>
              <Text style={styles.amount_text_2}>2,500 원</Text>
            </TouchableOpacity>
            <Icon_AntDesign
              name="minuscircleo"
              size={20}
              style={{color: 'black'}}
            />
            <TouchableOpacity style={styles.amountInfo}>
              <Text style={styles.amount_text_1}>할인금액</Text>
              <Text style={styles.amount_text_2}>0 원</Text>
            </TouchableOpacity>
            <Icon_AntDesign
              name="pausecircleo"
              size={20}
              style={{color: 'black', transform: [{rotate: '90deg'}]}}
            />
            <TouchableOpacity style={styles.amountInfo}>
              <Text style={styles.amount_text_1}>결제금액</Text>
              <Text style={styles.amount_text_3}>2,500 원</Text>
            </TouchableOpacity>
          </View> */}

          {/*결제 선택*/}
          <View style={styles.optionPayment}>
            {props.KioskState === '3-3T' ? (
              <Animated.View
                style={[
                  userTempInput.takeout.backgroundColor,
                  {
                    transform: [{scale: props.animation}],
                  },
                ]}>
                <TouchableOpacity
                  style={[
                    userTempInput.takeout.backgroundColor,
                    {backgroundColor: '#FFC000', width: '100%'},
                  ]}
                  onPress={() => {
                    props.SetKioskState(['3-3-1', '식사 장소 선택']);
                    SetChangeColor('takeout', userTempInput, setuserTempInput);
                  }}>
                  <Icon_MaterialCommunityIcons
                    name="package-variant"
                    size={50}
                    style={userTempInput.takeout.icon}
                  />

                  <Text style={[userTempInput.takeout.text]}>테이크 아웃</Text>
                </TouchableOpacity>
              </Animated.View>
            ) : (
              <TouchableOpacity
                style={[userTempInput.takeout.backgroundColor]}
                onPress={() =>
                  SetChangeColor('takeout', userTempInput, setuserTempInput)
                }>
                <Icon_MaterialCommunityIcons
                  name="package-variant"
                  size={50}
                  style={userTempInput.takeout.icon}
                />

                <Text style={userTempInput.takeout.text}>테이크 아웃</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={userTempInput.cafe.backgroundColor}
              onPress={() =>
                SetChangeColor('cafe', userTempInput, setuserTempInput)
              }>
              <Icon_MaterialCommunityIcons
                name="store"
                size={50}
                style={userTempInput.cafe.icon}
              />
              <Text style={userTempInput.cafe.text}>매장</Text>
            </TouchableOpacity>
          </View>

          {/*취소/선택 버튼*/}
          <View style={styles.optionBtn}>
            <TouchableOpacity
              style={styles.selectBtn_1}
              // onPress={closePopup}
            >
              <Text style={styles.cancel_text}>취소하기</Text>
            </TouchableOpacity>
            {props.KioskState === '3-3-1' ? (
              <Animated.View
                style={[
                  styles.selectBtn_2,
                  {
                    transform: [{scale: props.animation}],
                  },
                ]}>
                <TouchableOpacity
                  style={[
                    styles.selectBtn_2,
                    {backgroundColor: '#FFC000', width: '100%'},
                  ]}
                  onPress={() => {
                    props.SetKioskState(['4-1(order)', '주문내역 확인']);
                    props.SetvisibleOption({
                      basicOption: 0,
                      order: 1,
                      takeoutOption: 0,
                      payment: 0,
                      pay: 0,
                      final: 0,
                    });
                  }}>
                  <Text style={styles.select_text}>다음으로</Text>
                </TouchableOpacity>
              </Animated.View>
            ) : (
              <TouchableOpacity style={styles.selectBtn_2}>
                <Text style={styles.select_text}>다음으로</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {/* {open1 ? (
        <LR_Kiosk_Tutorial_Packaging
        closePopup={() => setOpen_tutorial_packaging(false)}
        />
      ) : null}
      {open ? <PaymentPopup closePopup={() => setOpen(false)} /> : null} */}
    </View>
  );
};

const SetChangeColor = (name, userTempInput, setuserTempInput) => {
  if (name === 'takeout') {
    if (
      JSON.stringify(userTempInput.takeout.icon) === JSON.stringify(styles.icon)
    ) {
      setuserTempInput({
        takeout: {
          icon: styles.icon_s,
          text: styles.pay_text_s,
          backgroundColor: styles.paymentBtn_s,
        },
        cafe: {
          icon: styles.icon,
          text: styles.pay_text,
          backgroundColor: styles.paymentBtn,
        },
      });
    } else {
      setuserTempInput({
        takeout: {
          icon: styles.icon,
          text: styles.pay_text,
          backgroundColor: styles.paymentBtn,
        },
        cafe: {
          icon: styles.icon,
          text: styles.pay_text,
          backgroundColor: styles.paymentBtn,
        },
      });
    }
  } else {
    if (
      JSON.stringify(userTempInput.cafe.icon) === JSON.stringify(styles.icon)
    ) {
      setuserTempInput({
        takeout: {
          icon: styles.icon,
          text: styles.pay_text,
          backgroundColor: styles.paymentBtn,
        },
        cafe: {
          icon: styles.icon_s,
          text: styles.pay_text_s,
          backgroundColor: styles.paymentBtn_s,
        },
      });
    } else {
      setuserTempInput({
        takeout: {
          icon: styles.icon,
          text: styles.pay_text,
          backgroundColor: styles.paymentBtn,
        },
        cafe: {
          icon: styles.icon,
          text: styles.pay_text,
          backgroundColor: styles.paymentBtn,
        },
      });
    }
  }
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.36)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContainer: {
    width: '90%',
    height: '45%',
    zIndex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  optionTitle: {
    backgroundColor: '#005D2E',
    alignItems: 'center',
    justifyContent: 'center',
    height: '12.5%',
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
  optionAmount: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '23%',
  },
  amountInfo: {
    //backgroundColor: '#D3CBC0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius: 5,
    //width: '25%',
    height: '100%',
  },
  amount_text_1: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 20,
    color: 'black',
  },
  amount_text_2: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: 'black',
  },
  amount_text_3: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: '#6A3B07',
  },

  optionPayment: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '42%',
  },
  paymentBtn: {
    backgroundColor: 'white',
    borderColor: '#6A3B07',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '33%',
    height: '100%',
    //marginHorizontal: -25,
  },
  paymentBtn_s: {
    backgroundColor: '#6A3B07',
    borderColor: '#6A3B07',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '33%',
    height: '100%',
    //marginHorizontal: -25,
  },
  pay_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 22,
    color: '#6A3B07',
  },
  pay_text_s: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 22,
    color: 'white',
  },
  optionBtn: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '13%',
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
  icon_s: {
    color: 'white',
  },
  icon: {
    color: '#6A3B07',
  },
});
