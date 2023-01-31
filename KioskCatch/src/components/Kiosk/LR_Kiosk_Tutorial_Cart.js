import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

const LR_Kiosk_Tutorial_Cart = ({ closePopup }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.tutorial_contents}
            onPress={closePopup}
            >

            <Text style={styles.clickTxt}>설명 확인 후, 화면을 클릭해주세요</Text>
            
            <View style={styles.taskBubble}>
                <View style={styles.taskIofo}>
                    <Text style={styles.taskTxt}>선택한 메뉴가 맞는지 확인해보세요</Text>
                    <Text style={styles.taskTxt}>수량 및 옵션 변경도 가능해요</Text>
                </View>
                <Icon_Entypo name="controller-volume" size={35} style={styles.taskBubbleTail_icon} />
            </View>

            <View style={styles.taskMark}>
                <View style={styles.taskName}>
                    <Text style={styles.taskName_text}>장바구니</Text>
                </View>
                <View style={styles.taskArea}>
                    <View style={styles.taskBox} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default LR_Kiosk_Tutorial_Cart;

const styles = StyleSheet.create({
    tutorial_contents: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.36)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    clickTxt: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 20,
        color: '#FFC000',
        textAlign: 'center',
        top: -35,
    },
    taskBubble: {
        // backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '14%',
        top: 100,
    },
    taskBubbleTail_icon: {
        color: 'white',
        transform: [{ rotate: '-75deg' }],
        marginTop: -10,
    },
    taskIofo: {
        backgroundColor: 'white',
        width: '85%',
        height: '72%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskTxt: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 20,
        color: '#FFC000',
        textAlign: 'center',
    },
    taskMark: {
        //backgroundColor: 'red',
        width: '100%',
        height: '23.8%',
        //alignItems: 'center',
        //justifyContent: 'space-between',
        position: 'absolute',
        top: 480,
    },
    taskName: {
        backgroundColor: '#FFC000',
        width: '25%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        // position: 'relative',
    },
    taskName_text: {
        fontFamily: 'NanumSquare_acEB', 
        fontSize: 25,
        color: 'white',
    },
    taskArea: {
        //backgroundColor: 'blue',
        width: '100%',
        height: '100%',
        //alignItems: 'center',
        // justifyContent: 'center',
    },
    taskBox: {
        width: '100%',
        height: '80%',
        borderColor: '#FFC000',
        borderWidth: 5,
    },
})