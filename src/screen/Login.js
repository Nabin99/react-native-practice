import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import ButtonComp from '../component/Button/Button';
import Header from '../component/Header.js/Header';
import Input from '../component/Input/Input';

const Login = ({navigation}) => {
  const [email, emailSet] = useState('');
  const [password, passwordSet] = useState('');
  const [showInput, showInputSet] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <Input
          password={false}
          setValue={emailSet}
          value={email}
          label="Email:"
          placeholder={'Enter email id here....'}
          autoFocus={true}
        />
        <Input
          password={true}
          setValue={passwordSet}
          label="Password:"
          value={password}
          placeholder={'Enter password here....'}
        />
        <ButtonComp
          title={'Login'}
          clickHandler={() => {
            showInputSet(true);
            navigation.navigate('Dashboard');
          }}
        />
        {showInput && (
          <View style={styles.output}>
            <Text style={styles.text}>Email:- {email}</Text>
            <Text style={styles.text}>Password:- {password}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  formContainer: {
    padding: 10,
    minHeight: 100,
  },
  output: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
