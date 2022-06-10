import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {stylesConstant} from '../../styles/abstracts/abstracts';

const ButtonComp = ({title, clickHandler}) => {
  return (
    <TouchableOpacity onPress={clickHandler}>
      <View style={styles.buttonWrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: stylesConstant.color.primaryColor,
    borderColor: stylesConstant.color.borderColorDefault,
    backgroundColor: stylesConstant.color.primaryColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: stylesConstant.color.secondaryColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
