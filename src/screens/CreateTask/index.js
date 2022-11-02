import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import { Card, CardInfo, Gap, Header, Input } from '../../components';
import { colors } from '../../utils';

const CreateTask = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Header title={'CreateTask'}
              height={40}
      />
    <View style={styles.Header}>
     <Gap height={20} />
        <Input placeholder={'Project name'}/>
        <Gap height={100} />
        <View style={styles.btn}>
    <TouchableOpacity style={styles.btnPlus}>
      <Text style={{color:'white'}}>Create</Text>
    </TouchableOpacity>
    </View>
    </View>
    </View>
  );
};

export default CreateTask;

const styles = StyleSheet.create({
  Header: {
    // flex: 1,
    paddingHorizontal:10
    // height:100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  cardWrapper: {
    backgroundColor:'#e3f6f5',
    height:100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  btn:{
    flexDirection:'row',
    justifyContent:'center',
   },
   btnPlus:{
     flexDirection:'row',
     justifyContent:'center',
     backgroundColor:colors.primary,
     width:400,
     padding:10,
     borderRadius:20
   
   },
});