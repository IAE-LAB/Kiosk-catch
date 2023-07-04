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
import Icon_Feather from 'react-native-vector-icons/Feather';
// import LR_Kiosk_Tutorial_Packaging from 'KioskCatch/src/components/Kiosk/LR_Kiosk_Tutorial_Packaging';
// import PaymentPopup from 'KioskCatch/src/components/Kiosk/PaymentPopup';

export default PackagingPopup = props => {
  //console.log('navigation ' + props.navigation);

  const navigation = useNavigation();
  const [open1, setOpen_tutorial_packaging] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <View style={props.styles.overlay_order}>
      <View style={styles.optionContainer} ref={props.OptionRef}>
        {/*제목*/}
        <View style={styles.optionTitle}>
          <Text style={styles.optionTitleText}>주문내역을 확인해주세요.</Text>
        </View>

        {/*내용*/}
        <View style={styles.optionContents}>
          {/*결제 정보*/}
          {/*주문내역*/}
          <View style={styles.orderListInfo}>
            <View style={styles.orderList}>
              <View style={styles.orderListBtn1}>
                <Image
                  source={require('KioskCatch/assets/img/digital_cafe_menu/green_latte.png')}
                  style={styles.menuImage}
                />
              </View>
              <View style={styles.orderListBtn2}>
                <View style={styles.menu_info}>
                  <Text style={styles.temperature_text}>(HOT)말차라떼(M)</Text>
                  <TouchableOpacity>
                    <Icon_Feather
                      name="x"
                      size={20}
                      style={{color: '858585'}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.menu_info}>
                  <View style={styles.quantity_info}>
                    <TouchableOpacity>
                      <Icon_AntDesign
                        name="minuscircleo"
                        size={20}
                        style={{color: '858585'}}
                      />
                    </TouchableOpacity>
                    <Text style={styles.temperature_text}>1</Text>
                    <TouchableOpacity>
                      <Icon_AntDesign
                        name="pluscircleo"
                        size={20}
                        style={{color: '858585'}}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.temperature_text}>3,200 원</Text>
                </View>
              </View>
            </View>
          </View>

          {/*총수량&총금액*/}
          <View style={styles.totalOrderInfo}>
            <View style={styles.totalAmountInfo}>
              <Text style={styles.totalOrder_text1}>총 수량 : </Text>
              <Text style={styles.totalOrder_text2}>1 개</Text>
            </View>
            <View style={styles.totalAmountInfo}>
              <Text style={styles.totalOrder_text1}>총 금액 : </Text>
              <Text style={styles.totalOrder_text2}>3,200 원</Text>
            </View>
          </View>

          {/*취소/선택 버튼*/}
          <View style={styles.optionBtn}>
            <TouchableOpacity
              style={styles.selectBtn_1}
              // onPress={closePopup}
            >
              <Text style={styles.cancel_text}>취소하기</Text>
            </TouchableOpacity>
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
                  props.SetKioskState(['4-1', '결제 방식 선택']);
                  props.SetvisibleOption({
                    basicOption: 0,
                    order: 0,
                    takeoutOption: 0,
                    payment: 1,
                    pay: 0,
                    final: 0,
                  });
                }}>
                <Text style={styles.select_text}>결제하기</Text>
              </TouchableOpacity>
            </Animated.View>
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
    height: '50%',
    zIndex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  optionTitle: {
    backgroundColor: '#005D2E',
    alignItems: 'center',
    justifyContent: 'center',
    height: '12%',
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
    height: '100%',
  },
  orderListInfo: {
    //   backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '60%',
    marginTop: -15,
  },
  orderList: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: '40%',
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 1,
  },
  orderListBtn1: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 10,
    width: '25%',
    height: '75%',
  },
  orderListBtn2: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '60%',
    height: '75%',
  },
  menu_info: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantity_info: {
    // backgroundColor: 'red',
    width: '35%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuImage: {
    resizeMode: 'contain',
    width: '40%',
  },
  temperature_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 18,
    color: 'black',
  },
  optionSize: {
    //   backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '25%',
  },
  totalOrderInfo: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  totalAmountInfo: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    // width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalOrder_text1: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 22,
    color: 'black',
  },
  totalOrder_text2: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 22,
    color: '#C80000',
  },
  optionBtn: {
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '11.5%',
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
