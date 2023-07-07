import React from 'react';
import 'react-native-gesture-handler';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import {Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';

export default function LR_Kiosk_explore_tutorial_2({navigation}) {
    return (
        <View style={styles.contents}>
            {/* 좌우구조 상단 배경사진 */}
            <Image
                source={require('KioskCatch/assets/img/LR_kiosk/LR_kiosk_bg.jpg')}
                style={styles.bgImage}>
            </Image>

            {/* 카테고리 */}
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

            {/* 메뉴 */}
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
                            <Text style={styles.menuTxt}>카페라떼   </Text>
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
                            <Text style={styles.menuTxt}>에스프레소</Text>
                            <Text style={styles.menuTxt}>콘파냐</Text>
                            <Text style={styles.menuTxt_highlight}>2,000</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuBtn}>
                        <Image
                            source={require('KioskCatch/assets/img/digital_cafe_menu/digital_caramel_latte.jpg')}
                            style={styles.menuImage}>
                        </Image>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.menuTxt}>카라멜</Text>
                            <Text style={styles.menuTxt}>카페라떼   </Text>
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

            {/* 이전&다음 버튼 */}
            <View style={styles.menu_LR}>
                <TouchableOpacity style={styles.LR_btn}>
                    <Text style={styles.LR_text}>이전</Text>
                </TouchableOpacity>
                <View style={styles.circle}>
                    <Icon_FontAwesome name="circle" size={10} style={styles.circle_icon} />
                    <Icon_FontAwesome name="circle-thin" size={10} style={styles.circle_icon} />
                </View>
                <TouchableOpacity
                    style={styles.LR_btn}
                    onPress={() => navigation.navigate('LR_Kiosk_explore_menu')}>
                    <Text style={styles.LR_text}>다음</Text>
                </TouchableOpacity>
            </View>

            {/* 장바구니 */}
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
                    {/* <Text style={styles.order_text}>말차라떼</Text> */}
                </View>
                <View style={styles.orderInfo}>
                    {/* <Text style={styles.order_text}>말차라떼</Text> */}
                </View>
                <View style={styles.orderInfo}>
                    {/* <Text style={styles.order_text}>말차라떼</Text> */}
                </View>
            </View>
            <View style={styles.orderList_icon}>
                <Icon_AntDesign name="up-square-o" size={35} style={{color: '#B8B8B8'}}/>
                <Icon_AntDesign name="down-square-o" size={35} style={{color: '#B8B8B8'}}/>
            </View>

            {/* 하단 버튼 */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.backBtn}>
                    <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 22, color: '#BABABA', }}>이전</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelBtn}>
                    <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 22, color: '#3D3D4F',}}>취소하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentBtn}>
                    <Text style={{fontFamily: 'NanumSquare_acEB', fontSize: 22, color: 'white',}}>결제하기</Text>
                </TouchableOpacity>
            </View>


            {/* 튜토리얼 화면 */}
            <TouchableOpacity
                style={styles.tutorial_contents}
                onPress={() => navigation.navigate('LR_Kiosk_explore')}>
                <View style={styles.stagebtn}>
                    <TouchableOpacity style={styles.stageStart}>
                        <Text style={styles.stage_text}>시작</Text>
                        <Icon_MaterialCommunityIcons name="check-circle" size={40} style={{color: '#FFC000', alignItems: 'center'}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stageExploratory}>
                        <Text style={styles.stage_text}>탐색</Text>
                        <Icon_MaterialCommunityIcons name="adjust" size={40} style={{color: '#FFC000', alignItems: 'center'}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stageOrder}>
                        <Text style={styles.stage_text}>주문</Text>
                        <Icon_MaterialCommunityIcons name="adjust" size={40} style={{color: '#9CA3AF', alignItems: 'center'}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stagePayment}>
                        <Text style={styles.stage_text}>결제</Text>
                        <Icon_MaterialCommunityIcons name="adjust" size={40} style={{color: '#9CA3AF', alignItems: 'center'}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.stageLine1} />
                <View style={styles.stageLine2} />
                <View style={styles.stageLine3} />
                <View style={styles.taskBox}>
                    <View style={styles.tutorial_btn}>
                        <Text style={{
                            fontFamily: 'NanumSquare_acEB',
                            fontSize: 18,
                            color: 'black',}}>다음</Text>
                    </View>
                </View>
                <View style={styles.taskName}>
                    <Text style={{
                        fontFamily: 'NanumSquare_acEB', 
                        fontSize: 25, 
                        color: 'white',
                        }}>메뉴</Text>
                </View>
                <Icon_MaterialCommunityIcons name="cursor-pointer" size={50} style={styles.tutorial_pointer_icon} />
                <View style={styles.taskBubble}>
                    <Icon_Entypo name="controller-volume" size={40} style={styles.taskBubbleTail_icon} />
                    <View style={styles.taskIofo}>
                        <Text style={styles.taskTxt}>다음 버튼을 눌러 추가적으로</Text>
                        <Text style={styles.taskTxt}>더 많은 메뉴를 확인할 수 있어요</Text>
                    </View>
                </View>
                <Text style={styles.clickTxt}>설명 확인 후, 화면을 클릭해주세요</Text>
            </TouchableOpacity>
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
    category: {
        width: '100%',
        height: '5.9%',
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
        width: '25.5%',
        height: '100%',
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
        width: '25.5%',
        height: '100%',
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
        width: '100%',
        height: '44.6%',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 3,
    },
    menuRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 8,
        height: '30%',
        width: '90%',
    },
    menuBtn: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 10,
        marginHorizontal: 15,
    },
    menuImage: {
        width: '25%',
        height: '70%',
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
        marginTop: 15,
        width: '100%',
        height: '4.5%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    LR_btn: {
        backgroundColor: '#D3CBC0',
        width: '25%',
        height: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: -29,
    },
    LR_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 18,
        color: 'black',
    },
    circle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle_icon: {
        color: '#005D2E',
        marginHorizontal: 2,
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
        height: '14%',
        width: '89%',
        justifyContent: 'space-evenly',
        //backgroundColor: 'red',
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
        marginLeft: 7,
    },
    orderList_icon: {
        width: '11%',
        marginLeft: 349.5,
        height: '13.95%',
        marginTop: -94.9,
        color: '#B8B8B8',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'blue',
    },
    footer: {
        flexDirection: 'row',
        width: '100%',
        height: '5.5%',
        justifyContent: 'space-between',
        //backgroundColor: 'black',
    },
    backBtn: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#BABABA',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32.7%',
        //height: '55%',
    },
    cancelBtn: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#3D3D4F',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32.7%',
        //height: '55%',
    },
    paymentBtn: {
        backgroundColor: '#3D3D4F',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32.7%',
        //height: '55%',
    },

    // 튜토리얼 화면
    tutorial_contents: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    stagebtn: {
        backgroundColor: 'white',
        height: 80,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
      stageStart: {
        padding: 20,
        alignItems: 'center',
    },
      stageExploratory: {
        padding: 20,
        alignItems: 'center',
    },
      stageOrder: {
        padding: 20,
        alignItems: 'center',
    },
      stagePayment: {
        padding: 20,
        alignItems: 'center',
    },
      stage_text: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 22,
        color: 'black',
        alignItems: 'center',
    },
      stageLine1: {
        position : 'absolute',
        top: 52,
        left: 56,
        backgroundColor: '#FFC000',
        height: 3,
        width: 72,
    },
      stageLine2: {
        position : 'absolute',
        top: 52,
        left: 160,
        backgroundColor: '#D1D5DB',
        height: 3,
        width: 72,
    },
      stageLine3: {
        position : 'absolute',
        top: 52,
        left: 265,
        backgroundColor: '#D1D5DB',
        height: 3,
        width: 72,
    },
    taskName: {
        backgroundColor: '#FFC000',
        width: 100,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        position: 'absolute',
        top: 116,
    },
    taskBox: {
        position: 'relative',
        width: '100%',
        height: 318,
        borderColor: '#FFC000',
        borderWidth: 5,
        top: 70,
        alignContent: 'center',
        justifyContent: 'center',
    },
    tutorial_btn: {
        backgroundColor: '#FFC000',
        height: 30,
        width: 95,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        top: 177,
        left: 273,
    },
    tutorial_pointer_icon: {
        color: '#FFC000',
        position: 'absolute',
        top: 465,
        left: 220,
        transform: [{ rotate: '90deg' }],
    },
    taskBubble: {
        alignItems: 'center',
        top: -90,
    },
    taskBubbleTail_icon: {
        color: 'white',
        top: 103,
        left: 125,
        transform: [{ rotate: '-80deg' }],
    },
    taskIofo: {
        backgroundColor: 'white',
        width: 325,
        height: 85,
        alignContent: 'center',
        justifyContent: 'center',
        top: -16,
        borderRadius: 20,
    },
    taskTxt: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 20,
        color: '#FFC000',
        textAlign: 'center',
    },
    clickTxt: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 20,
        color: '#FFC000',
        textAlign: 'center',
        top: 86,
    },
})