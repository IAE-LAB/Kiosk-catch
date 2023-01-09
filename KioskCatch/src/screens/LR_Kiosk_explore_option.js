import React from 'react';
import 'react-native-gesture-handler';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';

export default function LR_Kiosk_explore_option({navigation}) {
    return (
        <View style={styles.contents}>
            <Image
                source={require('KioskCatch/assets/img/LR_kiosk/LR_kiosk_bg.jpg')}
                style={styles.bgImage}>
            </Image>
            <View style={styles.category}>
                <TouchableOpacity>
                    <Icon_FontAwesome name="angle-left" size={40} style={styles.category_icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn1}>
                    <Text style={styles.category_text1}>커피</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn2}>
                    <Text style={styles.category_text2}>음료</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn2}>
                    <Text style={styles.category_text2}>베이커리</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LR_Kiosk_explore_category')}>
                    <Icon_FontAwesome name="angle-right" size={40} style={styles.category_icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity
                    style={styles.menuBtn}
                    /*onPress={() => this.setState({open: true})}*/
                    >
                    <Image
                        source={require('KioskCatch/assets/img/digital_cafe_menu/green_latte.jpg')}
                        style={styles.menuImage}>
                    </Image>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.menuTxt}>말차라떼   </Text>
                        <Text style={styles.menuTxt_highlight}>2,500</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBtn}>
                    <Image
                        source={require('KioskCatch/assets/img/digital_cafe_menu/cold.jpg')}
                        style={styles.menuImage}>
                    </Image>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.menuTxt}>콜드브루   </Text>
                        <Text style={styles.menuTxt_highlight}>2,500</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.menu_LR}>
                <TouchableOpacity
                    style={styles.LR_btn}
                    onPress={() => navigation.navigate('LR_Kiosk_explore')}>
                    <Text style={styles.LR_text}>이전</Text>
                </TouchableOpacity>
                <View style={styles.circle1} />
                <View style={styles.circle2} />
                <TouchableOpacity
                    style={styles.LR_btn}
                    onPress={() => navigation.navigate('LR_Kiosk_explore_menu')}>
                    <Text style={styles.LR_text}>다음</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cart}>
                <View style={styles.cartInfo}>
                    <Text style={styles.cart_text}>총주문내역</Text>
                </View>
                <View style={styles.cartInfo2}>
                    <Text style={styles.cart_text}>0 개</Text>
                </View>
                <View style={styles.cartInfo}>
                    <Text style={styles.cart_text}>0</Text>
                </View>
            </View>
            <View style={styles.orderList}>
                <View style={styles.orderInfo}>
                    <Text style={styles.order_text}></Text>
                </View>
                <View style={styles.line1} />
                <View style={styles.line2} />
                <View style={styles.line3} />
                <TouchableOpacity>
                    <Icon_AntDesign name="up-square-o" size={35} style={{position: 'absolute', top: -20, left: 353, color: '#B8B8B8'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon_AntDesign name="down-square-o" size={35} style={{position: 'absolute', top: 20, left: 353, color: '#B8B8B8'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.backBtn}>
                    <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 22, color: '#BABABA',}}>이전</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelBtn}>
                    <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 22, color: '#3D3D4F',}}>취소하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentBtn}>
                    <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 22, color: 'white',}}>결제하기</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.contents_option}>
                <View>
                    <View style={styles.optionTitle}>
                        <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 22, color: 'white',}}>원하는 항목을 선택해주세요</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contents: {
        flex: 1,
        backgroundColor: 'white',
    },
    bgImage: {
        width: '100%',
        height: 110,
    },
    category: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#005D2E',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    category_icon: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryBtn1: {
        width: 100,
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    category_text1: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'black',
        alignItems: 'center',
    },
    categoryBtn2: {
        width: 100,
        height: 40,
        backgroundColor: '#005D2E',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    category_text2: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'white',
        alignItems: 'center',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginTop: 12,
        height: 294,
    },
    menuBtn: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        width: 170,
        borderRadius: 10,
        elevation: 10,
    },
    menuImage: {
        width: 55,
        height: 70,
        marginRight: 10,
        resizeMode: 'contain',
    },
    menuTxt: {
        fontFamily: 'NanumSquare_acB',
        fontSize: 18,
        color: 'black',
    },
    menuTxt_highlight: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 18,
        color: 'black',
    },
    menu_LR: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginHorizontal: 20,
    },
    LR_btn: {
        backgroundColor: '#D3CBC0',
        height: 30,
        width: 95,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    LR_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 18,
        color: 'black',
    },
    circle1: {
        position : 'relative',
        top: 10,
        left: 21,
        height: 10,
        width: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#005D2E',
        borderRadius: 10,
    },
    circle2: {
        position : 'relative',
        top: 10,
        right: 21,
        height: 10,
        width: 10,
        backgroundColor: '#005D2E',
        borderRadius: 10,
    },
    cart: {
        backgroundColor: '#654F43',
        flexDirection: 'row',
        height: 30,
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
        height: 30,
        width: '100%',
        marginTop: 6,
    },
    order_text: {
        fontFamily: 'NanumSquare_acB',
        fontSize: 18,
        color: 'black',
        marginLeft: 18,
    },
    line1: {
        position : 'absolute',
        top: 25,
        left: 13,
        backgroundColor: '#B8B8B8',
        height: 2,
        width: 333,
    },
    line2: {
        position : 'absolute',
        top: 55,
        left: 13,
        backgroundColor: '#B8B8B8',
        height: 2,
        width: 333,
    },
    line3: {
        position : 'absolute',
        top: 85,
        left: 13,
        backgroundColor: '#B8B8B8',
        height: 2,
        width: 333,
    },
    footer: {
        flexDirection: 'row',
        marginTop: 60,
        justifyContent: 'space-between',
    },
    backBtn: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#BABABA',
        alignItems: 'center',
        justifyContent: 'center',
        width: 125,
        height: 37,
    },
    cancelBtn: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#3D3D4F',
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 37,
    },
    paymentBtn: {
        backgroundColor: '#3D3D4F',
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 37,
    },
      buttontext: {
        position:'relative',
        left:170,
        bottom:350,
        fontSize:20,
    },
      text: {
        position:'relative',
        fontSize:15,
        fontWeight:'700',
        left:'40%',
    },

    contents_option: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    optionTitle: {
        backgroundColor: '#005D2E',
        width: 330,
        height: 40,
    },
})