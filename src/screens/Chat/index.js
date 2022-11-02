import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import { Card, CardInfo, Gap, Header } from '../../components';

const Chat = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Header title={'Chat'}
              height={40}
      />
    <View style={styles.Header}>
     <Gap height={20} />
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
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  Header: {
    // flex: 1,
    backgroundColor:'#e3f6f5',
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
});