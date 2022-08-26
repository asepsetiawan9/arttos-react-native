import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from '../styles/Global';
import Input from '../components/Input';
import ButtonAuth from '../components/ButtonAuth';

const PassNew = () => (
  <>
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}> ArtTos </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.wrappContent}>
          <Text style={styles.textTittle}> Reset Password </Text>
          <Text style={styles.text}>
            Enter your Zwallet e-mail so we can send you a password reset link.
          </Text>
        </View>
        <View style={styleLocal.wrapperContent}>
          <View style={styleLocal.inputWrapper}>
            <Input placeholder="Create new password" icon="lock" scure={true} />
          </View>
          <View style={styleLocal.inputWrapper}>
            <Input
              placeholder="Confirm new password"
              icon="lock"
              scure={true}
            />
          </View>
          <View style={styleLocal.inputWrapper}>
            <ButtonAuth nameText="Reset Password" />
          </View>
        </View>
      </View>
    </ScrollView>
  </>
);

const styleLocal = StyleSheet.create({
  inputWrapper: {
    marginBottom: 10,
  },
  wrapperContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
});
export default PassNew;
