import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

const QuantityPopup = ({ closePopup }) => {
    //console.log('navigation ' + props.navigation);

    const navigation = useNavigation();

    // const [active, setActive] = useState(false);
    // const handleClick = () => {
    //     setActive(!active);
    // };

    return (
      <View style={styles.overlay}>
        <View style={styles.optionContainer}>
            {/*제목*/}
            <View style={styles.optionTitle}>
                <Text style={styles.optionTitleText}>수량 변경</Text>
            </View>

            {/*내용*/}
            <View style={styles.optionContents}>

                {/*수량 변경*/}
                <View style={styles.optionQuantity}>
                    <TouchableOpacity style={styles.quantityBtn}>
                        <Icon_Entypo name="minus" size={40} style={{color: '#654F43'}} />
                    </TouchableOpacity>
                    <View style={styles.quantityInfo}>
                        <Text style={styles.quantity_text}>1</Text>
                    </View>
                    <TouchableOpacity style={styles.quantityBtn}>
                        <Icon_Entypo name="plus" size={40} style={{color: '#654F43'}} />
                    </TouchableOpacity>
                </View>

                {/*수량 선택*/}
                <View style={styles.optionNumber}>
                    <View style={styles.optionNumber_row}>
                        <TouchableOpacity style={styles.numberBtn}>
                            <Text style={styles.number_text}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberBtn}>
                            <Text style={styles.number_text}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberBtn}>
                            <Text style={styles.number_text}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionNumber_row}>
                        <TouchableOpacity style={styles.numberBtn}>
                            <Text style={styles.number_text}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberBtn}>
                            <Text style={styles.number_text}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberBtn}>
                            <Text style={styles.number_text}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionNumber_row}>
                        <TouchableOpacity style={styles.numberBtn}>
                            <Text style={styles.number_text}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberBtn}>
                            <Text style={styles.number_text}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberBtn}>
                            <Text style={styles.number_text}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionNumber_row}>
                        <TouchableOpacity style={styles.numberBtn}>
                            <Text style={styles.number_text}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberBtn2}>
                            <Text style={styles.number_text}>clear</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*취소/선택 버튼*/}
                <View style={styles.optionBtn}>
                    <TouchableOpacity
                      style={styles.selectBtn_1}
                      onPress={closePopup}
                      >
                        <Text style={styles.cancel_text}>취소하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.selectBtn_2}
                    onPress={() => navigation.navigate('LR_Kiosk_explore_cart')}
                    >
                        <Text style={styles.select_text}>선택완료</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    );
  };

  export default QuantityPopup;

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
      width: '80%',
      height: '55%',
      zIndex: 1,
      backgroundColor: 'white',
      //justifyContent: 'space-between',
  },
//  팝업 제목 
  optionTitle: {
      backgroundColor: '#005D2E',
      alignItems: 'center',
      justifyContent: 'center',
      height: '10%',
  },
  optionTitleText: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 22,
      color: 'white',
  },
//   팝업 내용
  optionContents: {
      //backgroundColor: 'black',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: '89.5%',
  },
  optionQuantity: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '14%',
  },
  quantityBtn: {
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: '#654F43',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '16%',
      height: '100%',
  },
  quantityInfo: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    height: '100%',
  },
  quantity_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 28,
    color: 'black',
  },
  optionNumber: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '62%',
  },
  optionNumber_row: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '22.5%',
  },
  numberBtn: {
    backgroundColor: '#D3CBC0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '24%',
    height: '100%',
    marginHorizontal: -18,
  },
  numberBtn2: {
    backgroundColor: '#D3CBC0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '52%',
    height: '100%',
    marginHorizontal: -17,
  },
  number_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 24,
    color: 'black',
  },

//   취소&선택 버튼
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
