import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

const LR_Kiosk_Tutorial_Payment = ({ closePopup }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.tutorial_contents}
            onPress={closePopup}
            >
            
            <View style={styles.taskName}>
                <Text style={styles.taskName_text}>결제선택</Text>
            </View>
            <View style={styles.taskMark}>
                {/* <View style={styles.taskName}>
                    <Text style={styles.taskName_text}>결제선택</Text>
                </View>
                <View style={styles.taskArea}>
                    <View style={styles.taskBox} />
                </View> */}
            </View>

            <View style={styles.taskBubble}>
                <Icon_Entypo name="controller-volume" size={35} style={styles.taskBubbleTail_icon} />
                <View style={styles.taskIofo}>
                    <Text style={styles.taskTxt}>총 결제금액 확인 후</Text>
                    <Text style={styles.taskTxt}>원하는 결제방식을 선택해보세요</Text>
                </View>
            </View>

            <Text style={styles.clickTxt}>설명 확인 후, 화면을 클릭해주세요</Text>

        </TouchableOpacity>
    );
}

export default LR_Kiosk_Tutorial_Payment;

const styles = StyleSheet.create({
    tutorial_contents: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.36)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    clickTxt: {
        fontFamily: 'NanumSquare_acEB',
        fontSize: 20,
        color: '#FFC000',
        textAlign: 'center',
        position: 'absolute',
        bottom: 35,
    },
    taskBubble: {
        // backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '14%',
        position: 'absolute',
        bottom: 85,
    },
    taskBubbleTail_icon: {
        color: 'white',
        transform: [{ rotate: '110deg' }],
        marginBottom: -10,
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
        width: '92.5%',
        height: '46.5%',
        // zIndex: 1,
        // backgroundColor: 'white',
        borderColor: '#FFC000',
        borderWidth: 5,
        // justifyContent: 'space-between',
    },
    taskName: {
        backgroundColor: '#FFC000',
        width: '25%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        position: 'absolute',
        top: 149,
        left: 15,
    },
    taskName_text: {
        fontFamily: 'NanumSquare_acEB', 
        fontSize: 25,
        color: 'white',
    },
    taskArea: {
        // backgroundColor: 'blue',
        // width: '100%',
        height: '85%',
        //alignItems: 'center',
        // justifyContent: 'center',
    },
    taskBox: {
        // width: '100%',
        height: '100%',
        borderColor: '#FFC000',
        borderWidth: 5,
    },
})