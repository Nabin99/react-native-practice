import React from 'react';
import {Button, StyleSheet, View, TouchableHighlight} from 'react-native';

const ButtonComp = ({title, clickHandler}) => {
  return (
    <TouchableOpacity onPress={clickHandler}>
      <View style={styles.buttonWrapper}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingVertical: 10,
  },
});
