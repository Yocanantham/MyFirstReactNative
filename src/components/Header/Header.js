import React from 'react';
import {View, Text} from 'react-native';
import style from './headerstyle';

const Header = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>Sample Header</Text>
    </View>
  );
};
export default Header;
