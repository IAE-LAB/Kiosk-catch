import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Modal,
} from 'react-native';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

export default Popup_AddOption = props => {
  return (
    <View style={styles.optionContents}>
      {/* 스페셜오더 선택 */}
      <View style={styles.optionSpecial_1}>
        <View style={[styles.special_title, {marginTop: 10}]}>
          <Text style={styles.special_text}>스페셜오더</Text>
          <TouchableOpacity style={styles.special_btn}>
            <Text style={styles.all_text}>전체적용</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.special_option}>
          <View style={styles.option_row}>
            <TouchableOpacity style={styles.option_btn1}>
              <Text style={styles.option_text1}>선택안함</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_btn2}>
              <Text style={styles.option_text2}>우유 적게</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_btn2}>
              <Text style={styles.option_text2}>얼음 적게</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_btn2}>
              <Text style={styles.option_text2}>얼음 없이</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 샷추가 선택 */}
      <View style={styles.optionSpecial_2}>
        <View style={styles.special_title}>
          <Text style={styles.special_text}>옵션추가</Text>
          <TouchableOpacity style={styles.special_btn}>
            <Text style={styles.all_text}>전체적용</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.special_option}>
          <View style={styles.option_row1}>
            <TouchableOpacity style={styles.option_btn1}>
              <Text style={styles.option_text1}>선택안함</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_btn2}>
              <Text style={styles.option_text2}>바닐라</Text>
              <Text style={styles.option_text3}>500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_btn2}>
              <Text style={styles.option_text2}>카라멜</Text>
              <Text style={styles.option_text3}>500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_btn2}>
              <Text style={styles.option_text2}>헤이즐넛</Text>
              <Text style={styles.option_text3}>500</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.option_row1}>
            <TouchableOpacity style={styles.option_btn2}>
              <Text style={styles.option_text2}>샷추가</Text>
              <Text style={styles.option_text3}>500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_btn2}>
              <Text style={styles.option_text2}>초콜릿</Text>
              <Text style={styles.option_text3}>500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_btn2}>
              <Text style={styles.option_text2}>휘핑크림</Text>
              <Text style={styles.option_text3}>500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_btn3}>
              <Text style={styles.option_text2}></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*취소/선택 버튼*/}
      <View style={styles.optionBtn}>
        <TouchableOpacity style={styles.selectBtn_1}>
          <Text style={styles.cancel_text}>취소하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selectBtn_2}
          // onPress={() => navigation.navigate('LR_Kiosk_explore_cart')}
        >
          <Text style={styles.select_text}>선택완료</Text>
        </TouchableOpacity>
      </View>
    </View>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  //   overlay: {
  //     flex: 1,
  //     position: 'absolute',
  //     width: '100%',
  //     height: '100%',
  //     backgroundColor: 'rgba(0, 0, 0, 0.36)',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   optionContainer: {
  //     width: '90%',
  //     height: '70%',
  //     zIndex: 1,
  //     backgroundColor: 'white',
  //     justifyContent: 'center',
  //   },
  //   optionTitle: {
  //     backgroundColor: '#005D2E',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     height: '8%',
  //   },
  //   optionTitleText: {
  //     fontFamily: 'NanumSquare_acEB',
  //     fontSize: 22,
  //     color: 'white',
  //   },

  // //   콘텐츠 내용
  optionContents: {
    //backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '92.7%',
  },
  optionSpecial_1: {
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: '25%',
    borderRadius: 5,
    borderColor: '#654F43',
    borderWidth: 1,
  },
  optionSpecial_2: {
    //backgroundColor: 'blue',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: '43%',
    borderRadius: 5,
    borderColor: '#654F43',
    borderWidth: 1,
  },
  special_title: {
    //backgroundColor: '#D3CBC0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // height: '23%',
    //marginTop: 3,
  },
  special_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 20,
    color: 'black',
  },
  special_btn: {
    backgroundColor: '#654F43',
    borderRadius: 100,
    width: '24%',
    // height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
  },
  all_text: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 18,
    color: 'white',
  },
  special_option: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  option_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    // height: '40%',
    //backgroundColor: 'black',
    marginTop: 3,
  },
  option_row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '40%',
    //backgroundColor: 'black',
    marginTop: 3,
  },
  option_row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '40%',
    //backgroundColor: 'black',
    marginTop: 6,
  },
  option_btn1: {
    backgroundColor: '#654F43',
    width: '23%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  option_btn2: {
    backgroundColor: '#D3CBC0',
    width: '23%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  option_btn3: {
    backgroundColor: 'white',
    width: '23%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  option_text1: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 18,
    color: 'white',
  },
  option_text2: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 18,
    color: '#654F43',
  },
  option_text3: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 18,
    color: '#C80000',
  },

  //   취소&선택 버튼
  optionBtn: {
    //backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '8%',
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
