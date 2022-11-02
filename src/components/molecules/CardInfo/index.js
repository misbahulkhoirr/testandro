import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gap } from '../../../components';
import {
 IconGear, Text
} from '../../atoms';

import { colors } from '../../../utils';

const CardInfo = ({type}) => {
  return (
    <View style={styles.container}>
        <>
         
     
     {(type == 'task' ? (
        <View style={styles.task}>
          <View>
            <IconGear size={40} />
          </View>
          <View style={styles.wrapperBox}>
            <View style={styles.infoWrapper}>
            <Text style={styles.labelInfo}>Design Task</Text>
            <Text style={styles.info}>medium</Text>
            </View>
            <Text style={styles.textInfo}>
              Lorem Ipsum is simply dummy text of  
              
            </Text>
          </View>
        </View>
      ) :
        ''
      )}
      </>
    </View>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    // borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 9,
  },
  wrapperBox: {
    padding: 10,
  },
  
 

  task: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoWrapper:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  labelInfo: {
    color: colors.text.secondary,
    fontSize: 20,
    fontWeight: 'bold',  
    // paddingHorizontal: 15,
  },
  info:{
    color: '#ED6291',
    backgroundColor:'#F8D4E1',
    borderRadius:10,
    padding:5
  },
  textInfo: {
    color: colors.text.secondary,
    fontSize: 14,
    textAlign: 'justify',
  },
});
