import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from '../styles/Global';
import Input from '../components/Input';
import ButtonAuth from '../components/ButtonAuth';

const AddPhone = () => (
  <>
    <ScrollView style={styles.wrapper}>
      <View style={{backgroundColor: '#E5E5E5'}}>
        <View style={styles.wrappContent}>
          <Text style={styles.text}>
            Add at least one phone number for the transfer ID so you can start transfering your money to another user.
          </Text>
        </View>
        <View style={styleLocal.wrapperContent}>
          <View style={styleLocal.inputWrapper}>
            <Input
              placeholder="Enter your phone number"
              icon="phone"
              type="email-address"
            />
          </View>
          <View style={styleLocal.inputWrapper}>
            <ButtonAuth NavigateTo="Profile" nameText="Submit" />
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
export default AddPhone;
