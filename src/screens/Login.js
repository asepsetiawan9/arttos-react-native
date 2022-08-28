/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from '../styles/Global';
import Input from '../components/Input';
import ButtonAuth from '../components/ButtonAuth';

const Login = () => (
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
            Zwallet.
          </Text>
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input
            placeholder="Enter your e-mail"
            icon="user"
            type="email-address"
          />
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input placeholder="Enter your password" icon="lock" scure={true} />
        </View>
        <View
          style={{alignItems: 'flex-end', paddingBottom: 50, paddingTop: 10}}>
          <Text>Forgot password?</Text>
        </View>

        <View style={styleLocal.inputWrapper}>
          <ButtonAuth NavigateTo="HomeStack" nameText="Login" />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>Don’t have an account? Let’s Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  </>
);

const styleLocal = StyleSheet.create({
  inputWrapper: {
    marginBottom: 10,
  },
});
export default Login;
