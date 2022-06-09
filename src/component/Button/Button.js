import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const ButtonComp = ({title, clickHandler}) => {
  return (
    <View style={styles.buttonWrapper}>
      <Button title={title} onPress={clickHandler} />
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingVertical: 10,
  },
});
