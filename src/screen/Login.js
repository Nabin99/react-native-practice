import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ButtonComp from '../component/Button/Button';
import Header from '../component/Header/Header';
import Input from '../component/Input/Input';
import {useLoginMutation} from '../services/loginApi';
import {addUser} from '../store/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, emailSet] = useState('');
  const [password, passwordSet] = useState('');
  const isLoggedIn = useSelector(state => state.userDetails.isLoggedIn);
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Dashboard');
    } else {
      (async () => {
        try {
          const user = JSON.parse(await AsyncStorage.getItem('user'));
          console.log(user);
          if (user) dispatch(addUser({...user}));
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [isLoggedIn]);

  const loginHandler = async () => {
    let temp = await login({email, password});
    temp.error && console.log(temp.error);
    if (temp.data) {
      (async () => {
        try {
          await AsyncStorage.setItem(
            'user',
            JSON.stringify(temp.data.payload.data),
          );
        } catch (error) {
          console.log(error);
        }
      })();
      dispatch(addUser({...temp.data.payload.data}));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header heading={'React Native Form'} />
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
            loginHandler();
          }}
        />
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
