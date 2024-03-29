import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';

import PaymentCoupon from 'KioskCatch/src/components/Kiosk/PaymentCoupon';

const PaymentPopup = ({ closePopup }) => {
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
      <View style={styles.overlay}>
        <View style={styles.optionContainer}>
            {/*제목*/}
            <View style={styles.optionTitle}>
                <Text style={styles.optionTitleText}>결제방법을 선택해주세요</Text>
            </View>

            {/*내용*/}
            <View style={styles.optionContents}>

                {/*결제 정보*/}
                <View style={styles.optionAmount}>
                    <TouchableOpacity style={styles.amountInfo}>
                        <Text style={styles.amount_text_1}>전체금액</Text>
                        <Text style={styles.amount_text_2}>2,500 원</Text>
                    </TouchableOpacity>
                    <Icon_AntDesign name="minuscircleo" size={20} style={{color: 'black'}} />
                    <TouchableOpacity style={styles.amountInfo}>
                        <Text style={styles.amount_text_1}>할인금액</Text>
                        <Text style={styles.amount_text_2}>0 원</Text>
                    </TouchableOpacity>
                    <Icon_AntDesign name="pausecircleo" size={20} style={{color: 'black', transform: [{ rotate: '90deg' }]}} />
                    <TouchableOpacity style={styles.amountInfo}>
                        <Text style={styles.amount_text_1}>결제금액</Text>
                        <Text style={styles.amount_text_3}>2,500 원</Text>
                    </TouchableOpacity>
                </View>

                {/*결제 선택*/}
                <View style={styles.optionPayment}>
                    <TouchableOpacity style={styles.paymentBtn}>
                        <Icon_MaterialCommunityIcons name="credit-card-outline" size={40} style={{color: '#6A3B07'}} />
                        <Text style={styles.pay_text}>신용카드</Text>
                        <Text style={styles.pay_text}> </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentBtn} onPress={() => setOpen(true)}>
                        <Icon_MaterialCommunityIcons name="ticket-percent-outline" size={40} style={{color: '#6A3B07'}} />
                        <Text style={styles.pay_text}>모바일</Text>
                        <Text style={styles.pay_text}>쿠폰</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentBtn}>
                        <Icon_MaterialCommunityIcons name="barcode" size={40} style={{color: '#6A3B07'}} />
                        <Text style={styles.pay_text}>포인트</Text>
                        <Text style={styles.pay_text}>사용</Text>
                    </TouchableOpacity>
                </View>

                {/*취소/선택 버튼*/}
                <View style={styles.optionBtn}>
                    <TouchableOpacity
                      style={styles.selectBtn_1}
                      onPress={closePopup}>
                        <Text style={styles.cancel_text}>취소하기</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                    style={styles.selectBtn_2}>
                        <Text style={styles.select_text}>선택완료</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
        {open ? <PaymentCoupon closePopup={() => setOpen(false)} /> : null}
      </View>
    );
  };

  export default PaymentPopup;

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
      width: '28%',
      height: '100%',
      //marginHorizontal: -25,
  },
  pay_text: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 22,
      color: '#6A3B07',
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
});
