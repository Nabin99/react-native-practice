import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Form</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default Header;
