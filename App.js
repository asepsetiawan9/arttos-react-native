/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './src/styles/global';
import Input from './src/components/input';
// import Signup from './src/screens/Signup';

const App = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.header} />
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
          <View style={{alignItems: 'flex-end'}}>
            <Text>Forgot password?</Text>
          </View>

          <View style={styleLocal.inputWrapper}>
            <TouchableOpacity style={styles.buttonWrapper}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>Don’t have an account? Let’s Sign Up</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styleLocal = StyleSheet.create({
  inputWrapper: {
    marginBottom: 10,
  },
});
export default App;
