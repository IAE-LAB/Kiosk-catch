import React from 'react';
import 'react-native-gesture-handler';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';

export default function CB_Kiosk_Explore({navigation}) {
    return (
        <View style={styles.contents}>
            <Image
                source={require('KioskCatch/assets/img/LR_kiosk/LR_kiosk_bg.jpg')}
                style={styles.bgImage}>
            </Image>
            <View style={styles.category}>
                {/* <TouchableOpacity>
                    <Icon_FontAwesome name="angle-left" size={40} style={styles.category_icon} />
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.categoryBtn1}>
                    <Text style={styles.category_text1}>커피&음료</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryBtn2}>
                    <Text style={styles.category_text2}>베이커리</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryBtn2}>
                    <Text style={styles.category_text2}>구움과자</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('LR_Kiosk_explore_category')}>
                    <Icon_FontAwesome name="angle-right" size={40} style={styles.category_icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.category2}>
              
                    <Text style={styles.category_text3}>커피</Text>
             
                    <Text style={styles.category_text3}>차(Tea)</Text>
              
                    <Text style={styles.category_text3}>생과일주스</Text>
          
            </View>

          <View style={styles.menu_full}>
            <View style={styles.menu}>
                <View style={styles.menuRow}>
                    <TouchableOpacity style={styles.menuBtn}>
                        <Image
                            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_americano.jpg')}
                            style={styles.menuImage}>
                        </Image>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.menuTxt}>아메리카노</Text>
                            <Text style={styles.menuTxt_highlight}>1,400</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuBtn}>
                        <Image
                            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_cafe_latte.jpg')}
                            style={styles.menuImage}>
                        </Image>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.menuTxt}>카페라떼</Text>
                            <Text style={styles.menuTxt_highlight}>2,000</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuRow}>
                    <TouchableOpacity style={styles.menuBtn}>
                        <Image
                            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_espresso_conpa.jpg')}
                            style={styles.menuImage}>
                        </Image>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.menuTxt2}>에스프레소</Text>
                            <Text style={styles.menuTxt2}>콘파냐</Text>
                            <Text style={styles.menuTxt_highlight}>2,000</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuBtn}>
                        <Image
                            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_caramel_latte.jpg')}
                            style={styles.menuImage}>
                        </Image>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.menuTxt2}>카라멜</Text>
                            <Text style={styles.menuTxt2}>카페라떼 </Text>
                            <Text style={styles.menuTxt_highlight}>2,500</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuRow}>
                    <TouchableOpacity style={styles.menuBtn}>
                        <Image
                            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_carameo_moca.jpg')}
                            style={styles.menuImage}>
                        </Image>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.menuTxt}>카라멜모카</Text>
                            <Text style={styles.menuTxt_highlight}>2,500</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuBtn}>
                        <Image
                            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_espresso.jpg')}
                            style={styles.menuImage}>
                        </Image>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.menuTxt}>에스프레소</Text>
                            <Text style={styles.menuTxt_highlight}>1,500</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.menu2}>
              <View style={styles.menu3}>
                <Icon_AntDesign name="shoppingcart" size={30} style={styles.category_icon2} />
                <Text style={styles.menuTxt4}>주문내역</Text>
              </View>
              <View style={styles.menu5}>
              </View>
              <View style={styles.footer}>
                <Text style={styles.menuTxt3}>총수량:                0개</Text>              
                <Text style={styles.menuTxt3}>총금액:                0원</Text>            
              </View>
              <View style={styles.menu6}>
                <TouchableOpacity style={styles.backBtn2}>
                  <Icon_AntDesign name="delete" size={25} style={styles.category_icon2}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backBtn}>
                  <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 22, color: 'white', }}>주문하기</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.menu7}>
                  <TouchableOpacity style={styles.cancelBtn}>
                      <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 22, color: 'white',}}>처음으로</Text>
                  </TouchableOpacity>
              </View>
            </View>
            
          </View> 

           
        </View>
    );
}

const styles = StyleSheet.create({
    contents: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    bgImage: {
        width: '100%',
        height: '16.1%',
    },
    category2: {
        width: '100%',
        height: '5.9%',
        alignItems: 'center',
        backgroundColor: '#363636',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
    },
    category: {
      width: '100%',
      height: '5%',
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
  },
    category_icon: {
        color: '#E02649',
        width: '100%',
        height: '120%',
    },
    category_icon2: {
      color: '#E02649',
      marginRight: 8,
      
  },
    categoryBtn1: {
        width: '30%',
        height: '120%',
        backgroundColor: '#E02649',
        alignItems: 'center',
        justifyContent:'center',
    },
    category_text1: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'white',
        marginTop: 3,
    },
    category_text3: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 22,
      color: 'white',
      marginRight: 30,
      marginLeft: 20,
  },
    categoryBtn2: {
        width: '33.5%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    category_text2: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'black',
        alignItems: 'center',
        marginTop: 7,
    },
    menu: {
        width: '50%',
        height: '100%',
        backgroundColor: '#E5E5E5',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },

    menu2: {
      width: '50%',
      backgroundColor: '#F5F5F5',
      flexDirection: 'column',
  },

    menu3: {
      width: '100%',
      height: '10%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
  },
  menu4: {
    width: '100%',
    height: '50%',
    //flexDirection: 'column',
    backgroundColor: 'black',
},

menu5: {
  width: '100%',
  height: '56%',
 // backgroundColor: '#F5F5F5',
 backgroundColor: '#F5F5F5',
  alignItems: 'center',
  //justifyContent: 'flex-start',
  //flexDirection: 'row',
},

menu6: {
  width: '120%',
  height: '9%',
  backgroundColor: 'red',
  //alignItems: 'center',
  //justifyContent: 'flex-start',
  flexDirection: 'row',
},

menu7: {
  width: '100%',
  //height: '100%',
  //backgroundColor: '#F5F5F5',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  //flexDirection: 'row',
},

    menu_full: {
      width: '100%',
      height: '70%',
      backgroundColor: 'gray',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
  },

    menuRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '30%',
        width: '100%',
        // flexDirection: 'row',
    },
    menuBtn: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 10,
        width: '45%',
        height: '100%',
    },
    menuImage: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
        marginTop: 5,
    },
    menuTxt: {
        fontFamily: 'NanumSquare_acB',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
    menuTxt2: {
      fontFamily: 'NanumSquare_acB',
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
  },
    menuTxt3: {
      backgroundColor: 'white',
      fontFamily: 'NanumSquare_acEB',
      fontSize: 22,
      color: 'black',
      paddingLeft: 10,
      paddingBottom: 4.5,
      paddingTop: 4.5,
},
    menuTxt4: {
      fontFamily: 'NanumSquare_acEB',
      fontSize: 22,
      color: 'black',
      textAlign: 'center',
    },
    menuTxt_highlight: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
    LR_btn: {
        backgroundColor: '#D3CBC0',
        width: '25%',
        height: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 33,
    },
    LR_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 18,
        color: 'black',
    },
    cart: {
        backgroundColor: '#654F43',
        flexDirection: 'row',
        height: '4.4%',
        width: '100%',
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cartInfo: {
        marginHorizontal: 25,
    },
    cartInfo2: {
        marginRight: 70,
    },
    cart_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 20,
        color: 'white',
    },
    orderList: {
        flexDirection: 'column',
        height: '4.4%',
        width: '100%',
        //alignItems: 'center',
        marginTop: 6,
        //justifyContent: 'space-between',
    },
    order_text: {
        fontFamily: 'NanumSquare_acB',
        fontSize: 18,
        color: 'black',
        marginLeft: 18,
    },
    line: {
        width: '100%',
        height: '200%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    line1: {
        marginLeft: 13,
        backgroundColor: '#B8B8B8',
        height: '3%',
        width: '85%',
    },
    orderList_icon: {
        width: '189%',
        marginTop: -23,
        color: '#B8B8B8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        //flexDirection: 'column',
        width: '150%',
        //height: '15%',
        //marginTop: -70,
        //marginBottom: 10,
        //justifyContent: 'flex-start',
    },
    backBtn: {
        backgroundColor: '#E02649',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        //height: '55%',
        //marginLeft: 50,
    },
    backBtn2: {
      backgroundColor: '#A2A5B2',
      alignItems: 'center',
      justifyContent: 'center',
      width: '35%',
      //height: '55%',
  },
    cancelBtn: {
        backgroundColor: '#5C5E70',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%',
    },
})