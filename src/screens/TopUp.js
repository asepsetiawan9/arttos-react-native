/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import CardTopup from '../components/CardTopup';

const TopUp = () => {
  return (
    <>
      <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
        <View style={{paddingVertical: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>How to Top-Up</Text>
        </View>
        <View style={{paddingVertical: 10}}>
          <CardTopup
            number="1"
            content="Go to the nearest ATM or you can
          use sasa  E-Banking."
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <CardTopup
            number="2"
            content="Type your security number on the
            ATM or E-Banking."
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <CardTopup
            number="3"
            content="Type your security number on the
            ATM or E-Banking."
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <CardTopup
            number="4"
            content="Type your security number on the
            ATM or E-Banking."
          />
        </View>
      </View>
    </>
  );
};

export default TopUp;
