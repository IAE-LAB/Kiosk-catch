import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';

const LR_Kiosk_Tutorial_3 = ({ }) => {
    return (
        <View style={styles.contents}>
            {/* 튜토리얼 화면 */}
            <TouchableOpacity style={styles.tutorial_contents}
                // onPress={() => navigation.navigate('LR_Kiosk_explore')}
                >
                <View style={styles.taskBubble}>
                    <Icon_Entypo name="controller-volume" size={40} style={styles.taskBubbleTail_icon} />
                    <View style={styles.taskIofo}>
                        <Text style={styles.taskTxt}>말차라떼를 확인하고</Text>
                        <Text style={styles.taskTxt}>선택해보세요</Text>
                    </View>
                </View>
                <Text style={styles.clickTxt}>설명 확인 후, 화면을 클릭해주세요</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LR_Kiosk_Tutorial_3;

const styles = StyleSheet.create({
    contents: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.36)',
        alignItems: 'center',
        justifyContent: 'center',
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