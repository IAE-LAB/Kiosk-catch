import {StyleSheet} from 'react-native';

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
  categoryBtn_Select: {
    width: '25.5%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  category_text_select: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 22,
    color: 'black',
    alignItems: 'center',
  },
  categoryBtn: {
    width: '25.5%',
    height: '100%',
    backgroundColor: '#005D2E',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  category_text: {
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
    width: '50%',
  },
  menuBtnCom: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuImage: {
    width: '40%',
    height: '80%',
    marginRight: 10,
    resizeMode: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  LR_btn: {
    backgroundColor: '#D3CBC0',
    width: '25%',
    height: '130%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 33,
  },
  LR_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 18,
    color: 'black',
  },
  circle: {
    flexDirection: 'row',
    height: '300%',
    width: '23%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle1: {
    height: '10%',
    width: '10%',
    backgroundColor: '#005D2E',
    borderRadius: 10,
    marginRight: 5,
  },
  circle2: {
    height: '10%',
    width: '10%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#005D2E',
    borderRadius: 10,
    marginRight: 5,
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
  orderContents: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: '14%',
    flexDirection: 'row',
  },
  orderList: {
    flexDirection: 'column',
    height: '100%',
    width: '89%',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
  },
  orderInfo: {
    backgroundColor: 'white',
    width: '97%',
    height: '30%',
    justifyContent: 'space-between',
    borderBottomColor: '#B8B8B8',
    borderBottomWidth: 2,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  order_text: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 18,
    color: 'black',
    marginRight: 3,
  },
  order_option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 3,
    borderWidth: 1,
  },
  orderBtn2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 3,
    borderWidth: 1,
    marginLeft: 3,
  },
  order_icon: {
    color: 'black',
  },
  orderList_icon: {
    width: '11%',
    height: '100%',
    color: '#B8B8B8',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },

  footer: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    marginTop: -5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#BABABA',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32.7%',
    height: '55%',
  },
  cancelBtn: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#3D3D4F',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32.7%',
    height: '55%',
  },
  paymentBtn: {
    backgroundColor: '#3D3D4F',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32.7%',
    height: '55%',
  },
  orderContents: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: '14%',
    flexDirection: 'row',
  },
  /**************************************************************************/
  //   튜토리얼 화면
  /**************************************************************************/
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
  },
  tutorial_pointer_icon: {
    color: '#FFC000',
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
    top: 300,
    justifyContent: 'flex-end',
  },
});

export default styles;
