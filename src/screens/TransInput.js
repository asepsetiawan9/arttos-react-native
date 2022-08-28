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
import Icon from 'react-native-vector-icons/FontAwesome';
import imageUser from '../assets/user.png';
import {PRIMARY_COLOR} from './Constant';
import ButtonAuth from '../components/ButtonAuth';
import Input from '../components/Input';

const TransInput = () => {
  const navigation = useNavigation();
  return (
    // <View style={styles.root}>
    //   <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
    //     <Text>Home</Text>
    //   </TouchableOpacity>
    // </View>
    <>
      <View style={styles.headerWrap}>
        <View style={styles.headerContent}>
          <View style={styles.headerContentInput}>
            <View style={styles.imageHeader}>
              <Image source={imageUser} style={styles.imageHeader} />
            </View>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Samuel Suhi
              </Text>
              <Text style={{fontSize: 14}}>+62 813-8492-9994</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.wrapperInput}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={{
              borderBottom: 'none',
              fontSize: 42,
              color: '#1A374D',
              fontWeight: '900',
            }}
            placeholder="0.00"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={{fontSize: 16, color: '#1A374D', fontWeight: '700'}}>
            Rp120.000 Available
          </Text>
        </View>
        <View
          style={{flexDirection: 'column', width: 300, paddingBottom: 20}}>
          <View>
            <TextInput
              style={{borderBottomWidth: 2}}
              placeholder="Add some notes"
            />
          </View>
        </View>
        <View>
          <ButtonAuth NavigateTo="TransConfirm" nameText="Confirm" />
        </View>
      </View>
    </>
  );
};

export default TransInput;
