import React, {useRef, useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import styles from 'KioskCatch/src/style/LR_Kiosk/LR_Kiosk_Explore';

export default KioskStage_2_1 = props => {
  var [offsetX, setoffsetX] = useState(0);
  var [offsetY, setoffsetY] = useState(0);
  var [tempHeight, setHeight] = useState(0);

  var [Opacity, setOpacity] = useState(Ostyles.opTrue);

  const {width, height} = Dimensions.get('window');

  console.log(props.KioskState);

  useEffect(() => {
    console.log('useEffect ');
    props.CatagoryRef.current.measureInWindow((x, y, width, height) => {
      console.log('---------------------------');

      const tempX = x;
      const tempY = y - props.headerHeight;
      // if (check <= 2) {
      setoffsetX(offsetX => (offsetX = tempX));
      setoffsetY(offsetY => (offsetY = tempY));
      setHeight(tempHeight => (tempHeight = height));
      // }
      console.log('offsetX ' + x);
      console.log('offsetY ' + y);
      console.log(check);
      check++;
    });
  }, [offsetX, offsetY, tempHeight]);
  return (
    <ImageBackground
      source={require('KioskCatch/assets/img/kiosk/blackbackG.png')}
      style={[styles.blackImg, Opacity]}>
      <TouchableOpacity
        style={styles.tutorial_contents}
        onPress={
          () => {
            setOpacity(Ostyles.opFalse);
            props.SetKioskState(['2-1T', '카테고리 확인']);
          }

          // props.navigation.navigate('LR_Kiosk_Explore', {
          //   state: props.route.params.state,
          //   KioskState: props.KioskState,
          // })
        }>
        <View
          style={[
            {
              top: offsetY,
              bottom: offsetX,
            },
          ]}>
          <View style={[{position: 'relative'}]}>
            <View style={[styles.taskBox, {height: tempHeight, padding: 2}]}>
              {/* <Icon_FontAwesome
                name="angle-right"
                size={40}
                style={[
                  styles.tutorial_category_icon,
                  {borderWidth: 1, borderColor: 'red'},
                ]}
              /> */}
            </View>
            <View style={styles.taskName}>
              <Text
                style={{
                  fontFamily: 'NanumSquare_acEB',
                  fontSize: 25,
                  color: 'white',
                }}>
                카테고리
              </Text>
            </View>
            {/* <Icon_MaterialCommunityIcons
              name="cursor-pointer"
              size={50}
              style={styles.tutorial_pointer_icon}
            /> */}
            <View style={[styles.taskBubble, {top: 10}]}>
              <Icon_Entypo
                name="controller-volume"
                size={40}
                style={styles.taskBubbleTail_icon}
              />
              <View style={styles.taskIofo}>
                <Text style={styles.taskTxt}>
                  오른쪽 버튼을 눌러 추가적으로
                </Text>
                <Text style={styles.taskTxt}>
                  더 많은 카테고리를 확인할 수 있어요
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.clickTxt]}>설명 확인 후, 화면을 클릭해주세요</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const Ostyles = {
  opTrue: {
    opacity: 100,
  },
  opFalse: {
    opacity: 0,
  },
};
