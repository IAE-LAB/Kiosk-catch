import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

const OptionPopup = ({ closePopup }) => {
    //console.log('navigation ' + props.navigation);

    //const [color, setColor] = useState(color);
    //const onClick = () => setColor(styles.setTemperatureBtn, styles.setTemperature_text);

    const navigation = useNavigation();

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
      <View style={styles.overlay}>
        <View style={styles.optionContainer}>
            {/*제목*/}
            <View style={styles.optionTitle}>
                <Text style={styles.optionTitleText}>기본 옵션을 선택해주세요</Text>
            </View>

            {/*내용*/}
            <View style={styles.optionContents}>
                
                {/*수량 변경*/}
                <View style={styles.optionQuantity}>
                    <View style={styles.munuInfo}>
                        <Text style={styles.menu_text}>말차라떼</Text>
                    </View>
                    <TouchableOpacity style={styles.quantityBtn}>
                        <Icon_Entypo name="minus" size={30} style={{color: '#654F43'}} />
                    </TouchableOpacity>
                    <View style={styles.quantityInfo}>
                        <Text style={styles.quantity_text}>1</Text>
                    </View>
                    <TouchableOpacity style={styles.quantityBtn}>
                        <Icon_Entypo name="plus" size={30} style={{color: '#654F43'}} />
                    </TouchableOpacity>
                </View>

                {/*온도 선택*/}
                <View style={styles.optionTemperature}>
                    <TouchableOpacity
                    onPress={handleClick}
                    style={[styles.temperatureBtn1, {backgroundColor : active ? "#654F43" : "#D3CBC0"}]}
                    >
                        <Image
                            source={require('KioskCatch/assets/img/LR_kiosk/coffee-cup_hot.png')}
                            style={styles.optionImage_hot} />
                        <Text 
                        onClick={handleClick}
                        style={[styles.temperature_text, {color : active ? "white" : "black"}]}>HOT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={handleClick}
                    style={styles.temperatureBtn2}
                    >
                        <Image
                            source={require('KioskCatch/assets/img/LR_kiosk/iced-coffee_ice.png')}
                            style={styles.optionImage_ice} />
                        <Text style={styles.temperature_text}>ICE</Text>
                    </TouchableOpacity>
                </View>

                {/*사이즈 선택*/}
                <View style={styles.optionSize}>
                    <TouchableOpacity //style={styles.sizeBtn}
                    onPress={handleClick}
                    style={[styles.sizeBtn]}
                    >
                        <Image
                            source={require('KioskCatch/assets/img/LR_kiosk/cup_size_s.png')}
                            style={styles.optionImage_size_1} />
                        <Text style={styles.size_text_1}>스몰</Text>
                        <Text style={styles.size_text_2}>5,700</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sizeBtn}>
                        <Image
                            source={require('KioskCatch/assets/img/LR_kiosk/cup_size_m.png')}
                            style={styles.optionImage_size_2} />
                        <Text style={styles.size_text_1}>레귤러</Text>
                        <Text style={styles.size_text_2}>6,200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sizeBtn}>
                        <Image
                            source={require('KioskCatch/assets/img/LR_kiosk/cup_size_l.png')}
                            style={styles.optionImage_size_3} />
                        <Text style={styles.size_text_1}>라지</Text>
                        <Text style={styles.size_text_2}>6,700</Text>
                    </TouchableOpacity>
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

  export default OptionPopup;

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
  optionMenu: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 22,
    color: 'black',
  },
  optionQuantity: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '10%',
},
munuInfo: {
    //backgroundColor: 'orange',
    marginRight: -20,
    alignItems: 'center',
    justifyContent: 'center',
},
menu_text: {
  fontFamily: 'NanumSquare_acEB',
  fontSize: 22,
  color: 'black',
},
quantityBtn: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#654F43',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    height: '100%',
},
quantityInfo: {
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  width: '12%',
  height: '100%',
  marginHorizontal: -45
},
quantity_text: {
  fontFamily: 'NanumSquare_acEB',
  fontSize: 28,
  color: 'black',
},
  optionTemperature: {
      //backgroundColor: 'blue',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '19%',
  },
  temperatureBtn1: {
      backgroundColor: '#D3CBC0',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: 5,
      width: '35%',
      height: '100%',
  },
  temperatureBtn2: {
    backgroundColor: '#D3CBC0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    width: '35%',
    height: '100%',
},
  optionImage_hot: {
      resizeMode: 'contain',
      width: '30%',
  },
  optionImage_ice: {
      resizeMode: 'contain',
      width: '23%',
  },
  temperature_text: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 20,
      color: 'black',
  },
  optionSize: {
      //backgroundColor: 'green',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '35%',
  },
  sizeBtn: {
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      flexDirection: 'column',
      alignItems: 'center',
      //justifyContent: 'center',
      borderRadius: 5,
      width: '24.5%',
      //height: '100%',
      marginHorizontal: -25,
  },
  optionImage_size_1: {
      resizeMode: 'contain',
      width: '30%',
      height: '70%',
      marginTop: -9,
  },
  optionImage_size_2: {
      resizeMode: 'contain',
      width: '35%',
      height: '70%',
      marginTop: -9,
  },
  optionImage_size_3: {
      resizeMode: 'contain',
      width: '40%',
      height: '70%',
      marginTop: -9,
  },
  size_text_1: {
      fontFamily: 'NanumSquare_acB',
      fontSize: 18,
      color: 'black',
  },
  size_text_2: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 18,
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
