import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {
  Text,
  IconList
} from '../../atoms';
import IconFilePen from '../Icon/ic-filePen';

const Card = ({title, color, type, scan, onPress}) => {
  return (
    <View style={styles.container(type)}>
      {type == 'todo' ? (
        <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
          <IconList size={20} color="white" filled={true} />
          <Text style={styles.label(type)}>{title}</Text>
        </TouchableOpacity>
      ) : type == 'progress' ? (
        <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
          <IconList size={20} color="white" filled={true} />
          <Text style={styles.label(type)}>{title}</Text>
        </TouchableOpacity>
      ) :  type == 'complete' ? (
        <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
          <IconList size={20} color="white" filled={true} />
          <Text style={styles.label(type)}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.label}>{title}</Text>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type == 'todo' ? colors.primary : 'white',
    height: 50,
    width: '30%',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  }),
  label: type =>({
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: type == 'todo' ? 'white': 'black',
    fontWeight: type == 'todo' ? 'bold':  type == 'complete' ? 'bold': type == 'progress' ? 'bold': 'regular'
  }),
  Wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
