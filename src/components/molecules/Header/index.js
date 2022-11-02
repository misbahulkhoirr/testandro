import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {IconSearch, Text} from '../../atoms';
import {HeaderText} from '../../../components';
import { avatarDefault } from '../../../assets/images';
import { style } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

const Header = ({title, desc, height}) => {
  return (
    <View style={styles.container(height)}>
      <View style={styles.imageWrapper}>
      
      { (title == "Tasker" ? (
        <>
      <HeaderText title={title} desc={desc} />
        <IconSearch
          size={30}/>
        <IconSearch
          size={30}/>
          <Image source={avatarDefault} style={styles.image} />
          </>) :  

          <>
          <HeaderText title={title} desc={desc} /> 
          </>
          
          )}
        
        
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: height => ({
    backgroundColor: 'white',
    paddingVertical: height,
  }),
  imageWrapper: {
    paddingHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    // resizeMode: 'contain',
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});
