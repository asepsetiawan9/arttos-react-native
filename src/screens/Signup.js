/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from '../styles/Global';
import Input from '../components/Input';
import ButtonAuth from '../components/ButtonAuth';

const Signup = () => (
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
          </Text>
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input placeholder="Enter your username" icon="user" />
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input
            placeholder="Enter your e-mail"
            icon="envelope"
            type="email-address"
          />
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input placeholder="Enter your password" icon="lock" scure={true} />
        </View>
        <View style={styleLocal.inputWrapper}>
          <ButtonAuth nameText="SignUp" />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>Already have an account? Let’s Login</Text>
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
export default Signup;
