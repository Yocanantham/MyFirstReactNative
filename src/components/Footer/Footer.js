import React from 'react';
import { View, Text } from 'react-native';
import style from './footerstyle';

const Footer = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>Sample Footer</Text>
    </View>
  );
};
export default Footer;
