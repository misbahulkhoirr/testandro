import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {IconList, IconHome, IconAccount, IconTeam, IconChat} from '../Icon';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Task') {
      return (
        <IconHome
          filled={true}
          size={20}
          color={active ? colors.text.menuActive : colors.text.menuInactive}
        />
      );
    }

    if (title === 'Project') {
      return (
        <IconAccount
          filled={true}
          size={20}
          color={active ? colors.text.menuActive : colors.text.menuInactive}
        />
      );
    }


    if (title === 'Chat') {
      return (
        <IconChat
          filled={true}
          size={20}
          color={active ? colors.text.menuActive : colors.text.menuInactive}
        />
      );
    }
    if (title === 'Team') {
      return (
        <IconTeam
          filled={true}
          size={20}
          color={active ? colors.text.menuActive : colors.text.menuInactive}
        />
      );
    }

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontFamily: fonts.primary[400],
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    marginTop: 5,
  }),
});
