import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({
  value,
  setValue,
  password = false,
  label,
  placeholder,
  autoFocus = false,
}) => {
  const [focus, focusSet] = useState(autoFocus);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={focus ? {...styles.input, ...styles.inputFocused} : styles.input}
        onChangeText={val => setValue(val)}
        placeholder={placeholder}
        placeholderTextColor="blue"
        secureTextEntry={password}
        autoFocus={autoFocus}
        onFocus={() => focusSet(true)}
        onBlur={() => focusSet(false)}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 0,
    marginVertical: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    color: 'blue',
    borderRadius: 10,
  },
  inputFocused: {
    borderColor: 'blue',
  },
  label: {
    fontSize: 24,
    color: 'blue',
  },
});
