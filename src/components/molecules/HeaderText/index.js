import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../atoms';
import {colors, fonts} from '../../../utils';
import { style } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

const HeaderText = ({title, desc, page}) => {
  return (
    <View style={styles.container}>
      <View style={style.wrapper}>
      <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingLeft: 5},
wrapper:{
  flexDirection:'row',
},
  title: {
    color:  'black' ,
    fontWeight:'bold',
    fontFamily: fonts.primary[500],
    fontSize: 25,
    lineHeight: 32,
  }
});
