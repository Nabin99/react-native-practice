import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {stylesConstant} from '../../styles/abstracts/abstracts';

const Header = ({heading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: stylesConstant.color.primaryColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderBottomColor: stylesConstant.color.primaryColor,
    borderBottomWidth: 1,
  },
  text: {
    color: stylesConstant.color.secondaryColor,
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default Header;
