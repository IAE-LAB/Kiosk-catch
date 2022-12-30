import React from 'react';
import {Text} from 'react-native';

const Apptext = props => {
  return (
    <Text
      {...props}
      style={{
        ...props.style,
        fontFamily: 'NanumSquare_acB',
      }}>
      {props.children}
    </Text>
  );
};

export default Apptext;
