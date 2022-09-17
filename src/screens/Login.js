/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from '../styles/Global';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../components/Input';
import {login} from '../redux/asyncActions/auth';
import ButtonAuth from '../components/ButtonAuth';
// import CheckAlert from 'react-native-awesome-alert';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const [showText, setShow] = React.useState(false);
  const data = {
    email,
    password,
  };

  const onLogin = () => {
    dispatch(login(data));
  };

  // onPressSimpleAlert = () => {
  //   this.checkAlert.alert('Hello!!', SimpleView, [
  //     {text: 'OK', onPress: () => console.log('OK touch')},
  //     {text: 'Cancel', onPress: () => console.log('Cancel touch')},
  //     ,
  //   ]);
  // };
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
            <Text style={styles.textTittle}> Login </Text>
            <Text style={styles.text}>
              Login to your existing account to access all the features in
              Arttos.
            </Text>
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
                  secureTextEntry={!showText}
                />
              </View>
              <TouchableOpacity onPress={() => setShow(!showText)}>
                <View style={stylesForm.iconWrapper}>
                  <Icon
                    name={showText ? 'eye-slash' : 'eye'}
                    size={20}
                    color="#A9A9A9"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{alignItems: 'flex-end', paddingBottom: 50, paddingTop: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate('Passforgot')}>
              <Text> Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styleLocal.inputWrapper}>
            <TouchableOpacity onPress={onLogin}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text>Don’t have an account? Let’s</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text> SignUp</Text>
            </TouchableOpacity>
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
export default Login;
