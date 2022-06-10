import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Header from '../component/Header/Header';
import fallBackImg from '../assets/user-img.png';
import {useSelector} from 'react-redux';
import ButtonComp from '../component/Button/Button';
import {removeUser} from '../store/slices/userSlice';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({navigation}) => {
  const user = useSelector(state => state.userDetails.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(removeUser());
    AsyncStorage.removeItem('user');
    navigation.push('Login');
  };
  return (
    <ScrollView>
      <Header heading={` Welcome to Dashboard`} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={fallBackImg} />
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.text}>Name: {user && user.name}</Text>
        <Text style={styles.text}>Email: {user && user.email}</Text>
        <Text style={styles.text}>Designation: {user && user.designation}</Text>
        <Text style={styles.text}>Contact number: {user && user.contact}</Text>
        <Text style={styles.text}>
          DOB: {new Date(user && user.dob).toDateString()}
        </Text>
      </ScrollView>
      <View style={styles.logout}>
        <ButtonComp title="Logout" clickHandler={logoutHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    color: 'black',
    marginHorizontal: '5%',
  },
  content: {
    backgroundColor: 'gray',
    padding: 10,
    height: 150,
    margin: '4%',
  },
  text: {
    color: 'white',
    lineHeight: 25,
    fontSize: 20,
  },
  imageContainer: {
    width: 200,
    overflow: 'hidden',
    height: 200,
    borderRadius: 100,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: '23%',
    marginVertical: '10%',
  },
  image: {
    width: '100%',
  },
  logout: {
    marginTop: '11%',
  },
});

export default Dashboard;
