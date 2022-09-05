/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import styles from '../styles/Global';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ButtonAuth from '../components/ButtonAuth';
import {register} from '../redux/asyncActions/auth';
import {useDispatch, useSelector} from 'react-redux';

const Signup = () => {
  const navigation = useNavigation();
  const createTwoButtonAlert = () =>
    Alert.alert('Register', 'Register Succesfuly', [
      {text: 'OK', onPress: () => navigation.navigate('Login')},
      ,
    ]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const data = {
    username,
    email,
    password,
  };

  const onRegister = () => {
    dispatch(register(data));
    // console.log(successMsg);
    dispatch(createTwoButtonAlert);
  };
  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}> ArtTos </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.wrappContent}>
            <Text style={styles.textTittle}> Sign Up </Text>
            <Text style={styles.text}>
              Create your account to access Zwallet.
              <TouchableOpacity
                title={'2-Button Alert'}
                onPress={createTwoButtonAlert}>
                <Text>alert</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={styleLocal.inputWrapper}>
            <View style={stylesForm.wrapper}>
              <View style={stylesForm.iconWrapper}>
                <Icon name="user" size={20} color="#A9A9A9" />
              </View>
              <View style={stylesForm.inputWrapper}>
                <TextInput
                  placeholder="Enter your Username"
                  onChangeText={usernameNew => setUsername(usernameNew)}
                  initialValue={username}
                />
              </View>
            </View>
          </View>
          <View style={styleLocal.inputWrapper}>
            <View style={stylesForm.wrapper}>
              <View style={stylesForm.iconWrapper}>
                <Icon name="envelope" size={20} color="#A9A9A9" />
              </View>
              <View style={stylesForm.inputWrapper}>
                <TextInput
                  placeholder="Enter your e-mail"
                  keyboardType="email-address"
                  onChangeText={emailNew => setEmail(emailNew)}
                  initialValue={email}
                />
              </View>
            </View>
          </View>
          <View style={styleLocal.inputWrapper}>
            <View style={stylesForm.wrapper}>
              <View style={stylesForm.iconWrapper}>
                <Icon name="lock" size={20} color="#A9A9A9" />
              </View>
              <View style={stylesForm.inputWrapper}>
                <TextInput
                  placeholder="Enter your password"
                  scure={true}
                  onChangeText={passwordNew => setPassword(passwordNew)}
                  initialValue={password}
                />
              </View>
            </View>
          </View>
          <View style={styleLocal.inputWrapper}>
            <TouchableOpacity onPress={onRegister}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>Already have an account? Let’s Login</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styleLocal = StyleSheet.create({
  inputWrapper: {
    marginBottom: 10,
  },
});
const stylesForm = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 10,
    flexDirection: 'row',
    height: 50,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
});
export default Signup;
