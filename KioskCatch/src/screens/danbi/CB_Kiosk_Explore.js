import React from 'react';
import 'react-native-gesture-handler';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';

export default function CB_Kiosk_Explore({navigation}) {
    return (
        <View style={styles.contents}>
            {/* 통합구조 상단 배경사진 */}
            <Image
                source={require('KioskCatch/assets/img/CB_Kiosk/CB_kiosk_bg.png')}
                style={styles.bgImage}>
            </Image>

            {/* 카테고리 */}
            <View style={styles.category}>
                {/* <TouchableOpacity>
                    <Icon_FontAwesome name="angle-left" size={40} style={styles.category_icon} />
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.categoryBtn1}>
                    <Text style={styles.category_text1}>커피&음료</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn2} onPress={() => navigation.navigate('Kiosk_update')}>
                    <Text style={styles.category_text2}>베이커리</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn2} onPress={() => navigation.navigate('Kiosk_update')}>
                    <Text style={styles.category_text2}>빙수</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate('LR_Kiosk_explore_category')}>
                    <Icon_FontAwesome name="angle-right" size={40} style={styles.category_icon} />
                </TouchableOpacity> */}
            </View>

            {/* 세부 카테고리 */}
            <View style={styles.category_detail}>
                <TouchableOpacity>
                    <Text style={styles.category_text1}>커피</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.category_text3}>음료</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.category_text3}>차(Tea)</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                {/* 메뉴 */}
                <View style={styles.menu}>
                    <View style={styles.menuRow}>
                        <TouchableOpacity style={styles.menuBtn}
                        // onPress={() => navigation.navigate('Kiosk_update')}
                        >
                            <Image
                                source={require('KioskCatch/assets/img/digital_cafe_menu/digital_americano.jpg')}
                                style={styles.menuImage}>
                            </Image>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.menuTxt}>아메리카노</Text>
                                <Text style={styles.menuTxt}>1,400 원</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}
                        // onPress={() => navigation.navigate('Kiosk_update')}
                        >
                            <Image
                                source={require('KioskCatch/assets/img/digital_cafe_menu/digital_cafe_latte.jpg')}
                                style={styles.menuImage}>
                            </Image>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.menuTxt}>카페라떼</Text>
                                <Text style={styles.menuTxt}>2,000 원</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuRow}>
                        <TouchableOpacity style={styles.menuBtn}
                        // onPress={() => navigation.navigate('Kiosk_update')}
                        >
                            <Image
                                source={require('KioskCatch/assets/img/digital_cafe_menu/digital_espresso_conpa.jpg')}
                                style={styles.menuImage}>
                            </Image>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.menuTxt}>에스프레소</Text>
                                <Text style={styles.menuTxt}>콘파냐</Text>
                                <Text style={styles.menuTxt}>2,000 원</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}
                        // onPress={() => navigation.navigate('Kiosk_update')}
                        >
                            <Image
                                source={require('KioskCatch/assets/img/digital_cafe_menu/digital_caramel_latte.jpg')}
                                style={styles.menuImage}>
                            </Image>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.menuTxt}>카라멜</Text>
                                <Text style={styles.menuTxt}>카페라떼</Text>
                                <Text style={styles.menuTxt}>2,500 원</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuRow}>
                        <TouchableOpacity style={styles.menuBtn}
                        // onPress={() => navigation.navigate('Kiosk_update')}
                        >
                            <Image
                                source={require('KioskCatch/assets/img/digital_cafe_menu/digital_carameo_moca.jpg')}
                                style={styles.menuImage}>
                            </Image>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.menuTxt}>카라멜모카</Text>
                                <Text style={styles.menuTxt}>2,500 원</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}
                        // onPress={() => navigation.navigate('Kiosk_update')}
                        >
                            <Image
                                source={require('KioskCatch/assets/img/digital_cafe_menu/digital_espresso.jpg')}
                                style={styles.menuImage}>
                            </Image>
                            <View style={{flexDirection: 'column'}}> 
                                <Text style={styles.menuTxt}>에스프레소</Text>
                                <Text style={styles.menuTxt}>1,500 원</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 장바구니 */}
                <View style={styles.cart}>
                    <View style={styles.cartInfo}>
                        <Icon_AntDesign name="shoppingcart" size={25} style={{color: '#E02649', marginRight: 5}}/>
                        <Text style={styles.cart_text}>주문내역</Text>
                    </View>
                    <View style={styles.orderList}>
                        {/* <View style={styles.orderInfo}>
                            <Text style={styles.order_text}>말차라떼</Text>
                        </View> */}
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.totalInfo}>
                            <View style={styles.quantity_info}>
                                <Text style={styles.quantity_text}>총수량 : </Text>
                                <Text style={styles.quantity_text_highlight}>1 개</Text>
                            </View>
                            <View style={styles.quantity_info}>
                                <Text style={styles.quantity_text}>총금액 : </Text>
                                <Text style={styles.quantity_text_highlight}>2,500 원</Text>
                            </View>
                        </View>
                        <View style={styles.buttonInfo}>
                            <View style={styles.button_row}>
                                <TouchableOpacity style={styles.deleteBtn}>
                                    <Icon_AntDesign name="delete" size={25} style={{color: 'white'}}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.orderBtn}>
                                    <Text style={styles.button_text}>주문하기</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.homeBtn}>
                                <Text style={styles.button_text}>처음으로</Text>
                            </TouchableOpacity>
                        </View>
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
        height: '20%',
    },
    category: {
        width: '100%',
        height: '5.9%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    category_icon: {
        color: '#E02649',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryBtn1: {
        width: '33.5%',
        height: '100%',
        backgroundColor: '#E02649',
        alignItems: 'center',
        justifyContent: 'center',
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
    },
    category_text1: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'white',
        alignItems: 'center',
    },
    categoryBtn2: {
        width: '33.5%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    category_text2: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'black',
        alignItems: 'center',
    },
    category_detail: {
        width: '100%',
        height: '5.9%',
        alignItems: 'center',
        backgroundColor: '#363636',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    category_text3: {
        fontFamily: 'NanumSquare_acB',
        fontSize: 22,
        color: '#A7A7A7',
        alignItems: 'center',
    },
    main: {
        flexDirection: 'row',
        width: '100%',
        height: '68.2%',
        backgroundColor: '#F5F5F5',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        width: '50%',
        height: '105%',
        backgroundColor: '#ECECEC',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        //overflowY: 'scroll',
    },
    menuRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '32%',
        width: '100%',
        //backgroundColor: 'yellow',
    },
    menuBtn: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        elevation: 10,
        height: '100%',
        width: '45%',
    },
    menuImage: {
        width: '60%',
        height: '45%',
        resizeMode: 'contain',
    },
    menuTxt: {
        fontFamily: 'NanumSquare_acB',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
    menuTxt_highlight: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 18,
        color: 'black',
    },
    cart: {
        //backgroundColor: 'blue',
        height: '100%',
        width: '50%',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    cartInfo: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: '8%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cart_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'black',
    },
    orderList: {
        //flexDirection: 'column',
        //backgroundColor: 'red',
        height: '60%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        //justifyContent: 'space-evenly',
    },
    orderInfo: {
        backgroundColor: 'white',
        width: '97%',
        height: '30%',
        justifyContent: 'center',
        borderBottomColor: '#B8B8B8',
        borderBottomWidth: 2,
        marginLeft: 10,
    },
    order_text: {
        fontFamily: 'NanumSquare_acB',
        fontSize: 18,
        color: 'black',
        //marginLeft: 7,
    },
    footer: {
        flexDirection: 'column',
        width: '100%',
        height: '32.1%',
        //justifyContent: 'center',
        //backgroundColor: 'yellow',
    },
    totalInfo: {
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    quantity_info: { 
        flexDirection: 'row',
        //backgroundColor: 'yellow',
        width: '90%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    quantity_text: {
        fontFamily: 'NanumSquare_acB',
        fontSize: 22,
        color: 'black',
    },
    quantity_text_highlight: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: '#E02649',
    },
    buttonInfo: {
        //backgroundColor: 'blue',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_row: {
        //backgroundColor: 'green',
        flexDirection: 'row',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteBtn: {
        backgroundColor: '#A2A5B2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '21%',
        height: '100%',
    },
    orderBtn: {
        backgroundColor: '#E02649',
        alignItems: 'center',
        justifyContent: 'center',
        width: '79%',
        height: '100%',
    },
    button_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'white',
    },
    homeBtn: {
        backgroundColor: '#5C5E70',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
    },
})