import React, {Component} from 'react';
import {NavigationScreenProps} from 'react-navigation';

import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <ImageBackground
        source={require('KioskCatch/assets/img/main/background.png')}
        style={styles.bgImage}>
        <View style={[styles.container]}>
          <Image
            source={require('KioskCatch/assets/img/main/main_logo.png')}
            style={styles.logoImage}
          />
          <Image
            source={require('KioskCatch/assets/img/main/title.png')}
            style={styles.title}
          />
          {/* 키오스크 튜토리얼 버튼 */}
          <TouchableOpacity
            style={[styles.btn, {borderColor: '#5D97EF'}]}
            onPress={() => {
              navigation.navigate('Tutorial_1');
            }}>
            <Image
              source={require('KioskCatch/assets/img/main/tutorial_icon.png')}
              style={styles.btnImage}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.btn_text}>키오스크</Text>
              <Text style={styles.btn_text}>이용방법</Text>
              <Text style={styles.btn_text}>배우기</Text>
            </View>
          </TouchableOpacity>
          {/* 키오스크 시뮬레이션 버튼 */}
          <TouchableOpacity style={[styles.btn, {borderColor: '#EF6F5D'}]}>
            <Image
              source={require('KioskCatch/assets/img/main/simulation_icon.png')}
              style={styles.btnImage2}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.btn_text}>실전</Text>
              <Text style={styles.btn_text}>키오스크</Text>
              <Text style={styles.btn_text}>이용하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
  goTutorial_1() {
    // const navigation = useNavigation();
    // navigation.navigate('Tutorial_1');
    this.props.navigation.navigate('Tutorial_1');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // elevation : '3'
  },
  logoImage: {
    width: '100%',
    height: '30%',
    // flex: 5,
    alignItems: 'baseline',
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: -20,
    // justifyContent: 'center',
    // elevation:'1'
  },
  btnImage: {
    width: '30%',
    height: '85%',
    resizeMode: 'contain',
    marginRight: 30,
  },
  btnImage2: {
    width: '30%',
    height: '85%',
    resizeMode: 'contain',
    marginRight: 30,
  },
  title: {
    width: '100%',
    height: '14%',
    resizeMode: 'contain',
    marginBottom: 50,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 311,
    borderRadius: 17,
    marginBottom: 20,
    elevation: 10,
  },
  btn_text: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 30,
    color: 'black',
  },
});

// export default App;
