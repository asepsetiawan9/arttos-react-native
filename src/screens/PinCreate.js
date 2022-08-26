/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import styles from '../styles/Global';

const PinCreate = () => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
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
            <Text style={styles.textTittle}> Reset Password </Text>
            <Text style={styles.text}>
              Enter your Zwallet e-mail so we can send you a password reset
              link.
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              // justifyContent: 'space-around',
            }}>
            <View style={styles.PinInputView}>
              <TextInput
                ref={pin1Ref}
                keyboardType={'number-pad'}
                maxLength={1}
                onChange={pin1 => {
                  setPin1(pin1);
                  if (pin1 != '') {
                    pin2Ref.current.focus();
                  }
                }}
                style={styles.PinInput}
              />
              <TextInput
                ref={pin1Ref}
                keyboardType={'number-pad'}
                maxLength={1}
                onChange={pin2 => {
                  setPin1(pin2);
                  if (pin2 != '') {
                    pin2Ref.current.focus();
                  }
                }}
                style={styles.PinInput}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

// const styleLocal = StyleSheet.create({
//   inputWrapper: {
//     marginBottom: 10,
//   },
//   wrapperContent: {
//     flex: 1,
//     justifyContent: 'space-between',
//     paddingBottom: 40,
//   },
// });
export default PinCreate;
