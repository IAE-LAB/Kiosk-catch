import React from 'react';
import 'react-native-gesture-handler';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';

export default function CB_Kiosk_Order_coffee_cart_confirmation({navigation}) {
    return (
        <View style={styles.contents}>
            {/* 통합구조 상단 배경사진 */}
            <Image
                source={require('KioskCatch/assets/img/CB_Kiosk/CB_kiosk_bg.png')}
                style={styles.bgImage}>
            </Image>

            {/* 카테고리 */}
            <View style={styles.category}>
                <TouchableOpacity style={styles.icon}>
                    <Icon_FontAwesome name="angle-left" size={40} style={styles.category_icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn1}>
                    <Text style={styles.category_text1}>커피&음료</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn2} onPress={() => navigation.navigate('Kiosk_update')}>
                    <Text style={styles.category_text2}>베이커리</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn2} onPress={() => navigation.navigate('Kiosk_update')}>
                    <Text style={styles.category_text2}>빙수</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('CB_Kiosk_Explore_MD_tumbler')}>
                    <Icon_FontAwesome name="angle-right" size={40} style={styles.category_icon} />
                </TouchableOpacity>
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

            {/* 메뉴 & 주문내역 */}
            <View style={styles.main}>
                {/* 메뉴 */}
                <View style={styles.menu}>
                    <View style={styles.menuRow}>
                        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate('CB_Kiosk_Explore_coffee_option')}>
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
                    {/* 제목 */}
                    <View style={styles.cartInfo}>
                        <Icon_AntDesign name="shoppingcart" size={25} style={{color: '#E02649', marginRight: 5}}/>
                        <Text style={styles.cart_text}>주문내역</Text>
                    </View>
                    {/* 리스트 */}
                    <View style={styles.orderList}>
                        <View style={styles.orderInfo}>
                            <View style={styles.orderInfo_1}>
                                <Image
                                    source={require('KioskCatch/assets/img/digital_cafe_menu/digital_americano.jpg')}
                                    style={styles.orderImage}>
                                </Image>
                            </View>
                            <View style={styles.orderInfo_2}>
                                <View style={styles.orderName_1}>
                                    <Text style={styles.order_text}>(ICE)아메리카노(R)</Text>
                                    <TouchableOpacity>
                                        <Icon_AntDesign name="close" size={20} style={{color: '#858585'}}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.orderName_2}>
                                    <View style={styles.orderQuantity_btn}>
                                        <TouchableOpacity>
                                            <Icon_AntDesign name="minuscircleo" size={20} style={{color: '#939191'}} />
                                        </TouchableOpacity>
                                        <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 18, color: 'black'}}>1</Text>
                                        <TouchableOpacity>
                                            <Icon_AntDesign name="pluscircleo" size={20} style={{color: '#939191'}} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 18, color: 'black'}}>1,400 원</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 정보 및 버튼 */}
                    <View style={styles.footer}>
                        {/* 총 수량 및 금액 */}
                        <View style={styles.totalInfo}>
                            <View style={styles.quantity_info}>
                                <Text style={styles.quantity_text}>총수량 : </Text>
                                <Text style={styles.quantity_text_highlight}>1 개</Text>
                            </View>
                            <View style={styles.quantity_info}>
                                <Text style={styles.quantity_text}>총금액 : </Text>
                                <Text style={styles.quantity_text_highlight}>1,400 원</Text>
                            </View>
                        </View>
                        {/* 버튼 */}
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

            {/* 옵션 팝업 화면 */}
            <View style={styles.overlay}>
                <View style={styles.optionContainer}>
                    {/*제목*/}
                    <View style={styles.optionTitle}>
                        <Text style={styles.optionTitleText}>주문내역 확인</Text>
                    </View>
                    
                    {/*내용*/}
                    <View style={styles.optionContents}>
                        {/* 리스트 */}
                        <View style={styles.option_orderList}>
                            <View style={styles.option_orderInfo}>
                                <View style={styles.option_orderInfo_1}>
                                    <Image
                                        source={require('KioskCatch/assets/img/digital_cafe_menu/digital_americano.jpg')}
                                        style={styles.option_orderImage}>
                                    </Image>
                                </View>
                                <View style={styles.option_orderInfo_2}>
                                    <View style={styles.option_orderName_1}>
                                        <Text style={styles.option_order_text}>(ICE)아메리카노(R)</Text>
                                        <TouchableOpacity>
                                            <Icon_AntDesign name="close" size={22} style={{color: '#858585'}}/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.option_orderName_2}>
                                        <View style={styles.orderQuantity_btn}>
                                            <TouchableOpacity>
                                                <Icon_AntDesign name="minuscircleo" size={20} style={{color: '#939191'}} />
                                            </TouchableOpacity>
                                            <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 18, color: 'black'}}>1</Text>
                                            <TouchableOpacity>
                                                <Icon_AntDesign name="pluscircleo" size={20} style={{color: '#939191'}} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 18, color: 'black'}}>1,400 원</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 총 수량 및 금액 */}
                        <View style={styles.option_totalInfo}>
                            <View style={styles.option_quantity_info}>
                                <Text style={styles.option_quantity_text}>총수량 : </Text>
                                <Text style={styles.option_quantity_text_highlight}>1 개</Text>
                            </View>
                            <View style={styles.option_quantity_info}>
                                <Text style={styles.option_quantity_text}>총금액 : </Text>
                                <Text style={styles.option_quantity_text_highlight}>1,400 원</Text>
                            </View>
                        </View>
                    </View>

                    {/* 이전&담기 버튼 */}
                    <View style={styles.optionBottomBtn}>
                        <TouchableOpacity style={styles.selectBtn_1}
                            onPress={() => navigation.navigate('CB_Kiosk_Explore_coffee_cart')}>
                            <Text style={styles.cancel_text}>이전</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.selectBtn_2}
                            onPress={() => navigation.navigate('CB_Kiosk_Payment_methods')}>
                            <Text style={styles.select_text}>결제하기</Text>
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
        height: '20%',
    },
    category: {
        width: '100%',
        height: '5.9%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    categoryBtn1: {
        width: '27.5%',
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
    },
    categoryBtn2: {
        width: '27.5%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    category_text2: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'black',
    },
    icon: {
        width: '9%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    category_icon: {
        color: '#E02649',
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
        justifyContent: 'center',
    },
    menu: {
        width: '50%',
        height: '105%',
        backgroundColor: '#ECECEC',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        overflowY: 'scroll',
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
        borderBottomWidth: 1,
        borderBottomColor: '#CECECE',
    },
    cart_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'black',
    },
    orderList: {
        flexDirection: 'column',
        // backgroundColor: 'red',
        height: '60%',
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    orderInfo: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#B8B8B8',
        borderBottomWidth: 2,
        // marginLeft: 10,
    },
    orderInfo_1: {
        width: '20%',
        height: '100%',
        // backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderImage: {
        width: '100%',
        height: '70%',
        resizeMode: 'contain',
        // backgroundColor: 'yellow',
        marginLeft: 5,
    },
    orderInfo_2: {
        // backgroundColor: 'blue',
        flexDirection: 'column',
        width: '72%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 4,
    },
    orderName_1: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        height: '60%',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 3,
    },
    orderName_2: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    order_text: {
        fontFamily: 'NanumSquare_acB',
        fontSize: 18,
        color: 'black',
    },
    orderDelete: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    orderQuantity_btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '40%',
        height: '100%',
        // backgroundColor: 'green',
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

    // 옵션 화면
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
        height: '75%',
        zIndex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    optionTitle: {
        width: '100%',
        height: '9%',
        backgroundColor: '#E02649',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionTitleText: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'white',
    },
    optionContents: {
        width: '100%',
        height: '75%',
        flexDirection: 'column',
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    option_orderList: {
        flexDirection: 'column',
        // backgroundColor: 'red',
        height: '90%',
        width: '90%',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    option_orderInfo: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 2,
        // marginLeft: 10,
    },
    option_orderInfo_1: {
        width: '25%',
        height: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 10,
    },
    option_orderImage: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
        // backgroundColor: 'yellow',
        // marginLeft: 5,
    },
    option_orderInfo_2: {
        // backgroundColor: 'blue',
        flexDirection: 'column',
        width: '72%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        // marginRight: 4,
    },
    option_orderName_1: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        width: '100%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: 3,
    },
    option_order_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 20,
        color: 'black',
    },
    option_orderName_2: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        width: '100%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    option_totalInfo: {
        backgroundColor: 'white',
        width: '90%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    option_quantity_info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        // width: '45%',
        height: '100%',
    },
    option_quantity_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'black',
    },
    option_quantity_text_highlight: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: '#E02649',
    },
    optionBottomBtn: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '13%',
        // marginBottom: 5,
    },
    selectBtn_1: {
        backgroundColor: '#BABABA',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 5,
        width: '40%',
        height: '65%',
        marginBottom: 15,
    },
    selectBtn_2: {
        backgroundColor: '#E02649',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 5,
        width: '40%',
        height: '65%',
        marginBottom: 15,
    },
    cancel_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 20,
        color: 'white',
    },
    select_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 20,
        color: 'white',
    },
})