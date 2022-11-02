import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import { Card, CardInfo, Gap, Header, IconPlus } from '../../components';
import { colors } from '../../utils';

const Task = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Header title={'Tasker'}
              height={40}
      />
    <View style={styles.content}>
     {/* <Gap height={20} /> */}
        <View style={styles.cardWrapper}>
            <Card
              type={'todo'}
              title="Todo"
             
            />
            <Card
              type={'progress'}
              title="Progress"
             
            />
            <Card
              type={'complete'}
              title="Complete"
             
            />
          </View>
        <CardInfo type={'task'}/>
        <Gap height={10} />
        <CardInfo type={'task'}/>
     
    </View>
    <View style={styles.btn}>
    <TouchableOpacity style={styles.btnPlus} onPress={()=>navigation.navigate('CreateTask')}>
      <IconPlus color={'white'} />
    </TouchableOpacity>
    </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({

  content: {
    // flex: 1,
   
    paddingHorizontal:10
  },
  btn:{
   flexDirection:'row',
   justifyContent:'center',
   marginVertical:135
  },
  btnPlus:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.primary,
    width:20,
    height:20,
    padding:40,
    borderRadius:50
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
    marginTop:10,
    height:100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
});