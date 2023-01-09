import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Animated,
} from 'react-native';
import 'react-native-gesture-handler';

import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StageHeader from 'KioskCatch/src/components/Kiosk/Stage';

export default function CB_Kiosk({navigation, route}) {
  const animation = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StageHeadeAnimated state={route.params.state} navigation={navigation} />
    </View>
  );
}

const StageHeadeAnimated = props => {
  console.log('navigation ' + props.navigation);

  // header title setup (stage name : props.state[1])
  useEffect(() => {
    props.navigation.setOptions({title: props.state[1]});
  }, [props.navigation]);

  // header animation
  const animation = useRef(new Animated.Value(0)).current;
  Animated.sequence([
    Animated.delay(500),
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.delay(2000),
    Animated.timing(animation, {
      toValue: -150,
      duration: 500,
      useNativeDriver: true,
    }),
  ]).start();
  return (
    <Animated.View
      style={[styles.headerContainer, {transform: [{translateY: animation}]}]}>
      {/* stage header component / props.state[0] is stage number */}
      <StageHeader state={props.state[0]}></StageHeader>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 94,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

// const StageHeadeAnimated = props => {
//   console.log(props.state);
//   const animation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     setTimeout(() => {
//       Animated.timing(animation, {
//         toValue: -150,
//         duration: 500,
//         useNativeDriver: true,
//       }).start();
//     }, 3000);
//   }, [animation]);

//   return (
//     <Animated.View
//       style={[styles.headerContainer, {transform: [{translateY: animation}]}]}>
//       <StageHeader state={props.state}></StageHeader>
//     </Animated.View>
//   );
// };
