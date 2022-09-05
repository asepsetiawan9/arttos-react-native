import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from '../styles/Global';
import Input from '../components/Input';
import ButtonAuth from '../components/ButtonAuth';

const PassChange = () => (
  <>
    <ScrollView style={styles.wrapper}>
      <View style={{backgroundColor: '#E5E5E5'}}>
        <View style={styles.wrappContent}>
          <Text style={styles.text}>
            You must enter your current password and then type your new password
            twice.
          </Text>
        </View>
        <View style={styleLocal.wrapperContent}>
          <View style={styleLocal.inputWrapper}>
            <View style={styleLocal.inputWrapper}>
              <Input placeholder="Current Password" icon="lock" scure={true} />
            </View>
            <View style={styleLocal.inputWrapper}>
              <Input placeholder="New Password" icon="lock" scure={true} />
            </View>
            <View style={styleLocal.inputWrapper}>
              <Input placeholder="Repeat Password" icon="lock" scure={true} />
            </View>
          </View>
          <View style={styleLocal.inputWrapper}>
            <ButtonAuth NavigateTo="Profile" nameText="Change Password" />
          </View>
        </View>
      </View>
    </ScrollView>
  </>
);

const styleLocal = StyleSheet.create({
  inputWrapper: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  wrapperContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
});
export default PassChange;
