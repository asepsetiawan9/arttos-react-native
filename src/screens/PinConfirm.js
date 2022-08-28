/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/GlobalDashboard';
import imageUser from '../assets/user.png';
import {PRIMARY_COLOR} from './Constant';
import ButtonAuth from '../components/ButtonAuth';
import Input from '../components/Input';

const PinConfirm = () => {
  const navigation = useNavigation();
  return (
    // <View style={styles.root}>
    //   <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
    //     <Text>Home</Text>
    //   </TouchableOpacity>
    // </View>
    <>
      <View style={styles.wrapperInput}>
        <View style={{flexDirection: 'column', padding: 20, alignItems: 'center'}}>
          <Text style={{padding: 20, fontSize: 22, fontWeight: 'bold'}}>Enter PIN to Transfer</Text>
          <Text style={{textAlign: 'center'}}>
            Enter your 6 digits PIN for confirmation to continue transferring money. 
          </Text>
        </View>
        <View style={{paddingTop: 30}}>
          <ButtonAuth NavigateTo="Confirm" nameText="Transfer Now" />
        </View>
      </View>
    </>
  );
};

export default PinConfirm;
