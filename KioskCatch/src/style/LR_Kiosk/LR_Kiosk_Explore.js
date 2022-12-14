import {StyleSheet} from 'react-native';

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
    position: 'relative',
    top: 10,
    left: 21,
    height: 10,
    width: 10,
    backgroundColor: '#005D2E',
    borderRadius: 10,
  },
  circle2: {
    position: 'relative',
    top: 10,
    right: 21,
    height: 10,
    width: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#005D2E',
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
    position: 'absolute',
    top: 25,
    left: 13,
    backgroundColor: '#B8B8B8',
    height: 2,
    width: 333,
  },
  line2: {
    position: 'absolute',
    top: 55,
    left: 13,
    backgroundColor: '#B8B8B8',
    height: 2,
    width: 333,
  },
  line3: {
    position: 'absolute',
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
  /**************************************************************************/
  //   ???????????? ??????

  blackImg: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  tutorial_contents: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  taskName: {
    backgroundColor: '#FFC000',
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    position: 'relative',
  },
  taskBox: {
    width: '100%',
    height: 59,
    borderColor: '#FFC000',
    borderWidth: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  tutorial_category_icon: {
    color: '#FFC000',
    marginLeft: 363,
  },
  tutorial_pointer_icon: {
    color: '#FFC000',
    position: 'relative',
    top: 60,
    left: 300,
    transform: [{rotate: '35deg'}],
  },
  taskBubble: {
    alignItems: 'center',
    top: -25,
  },
  taskBubbleTail_icon: {
    color: 'white',
    left: 155,
    transform: [{rotate: '130deg'}],
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
    top: 240,
    justifyContent: 'flex-end',

    borderWidth: 1,
    borderColor: 'black',
  },
});

export default styles;
