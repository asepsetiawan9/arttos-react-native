/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/GlobalDashboard';
import {PRIMARY_COLOR} from '../styles/Constant';

const PersonalInfo = () => {
  const profile = useSelector(state => state.profile.data);
  // console.log('cek sassssssssssssssssstuu', profile);
  const navigation = useNavigation();
  return (
    // <View style={styles.root}>
    //   <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
    //     <Text>Home</Text>
    //   </TouchableOpacity>
    // </View>
    <>
      <ScrollView>
        <View style={styles.wrapperInput}>
          <View>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                paddingVertical: 20,
              }}>
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, contact our support.
            </Text>
          </View>
          <View style={{flexDirection: 'row', padding: 20}}>
            <View style={styles.cardWrap}>
              <View style={styles.cardConfirm}>
                <Text style={{fontSize: 14}}>First Name</Text>
                <Text style={{fontSize: 18, fontWeight: '700'}}>
                  {profile.fullname ? profile.fullname : 'Your Name'}
                </Text>
              </View>
            </View>
            <View style={{paddingRight: 20}} />
            <View style={styles.cardWrap}>
              <View style={styles.cardConfirm}>
                <Text style={{fontSize: 14}}>Last Name</Text>
                <Text style={{fontSize: 18, fontWeight: '700'}}>-</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              alignItems: 'center',
              width: 350,
              padding: 20,
              justifyContent: 'space-between',
              borderRadius: 15,
            }}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Verified E-mail</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                {profile.email ? profile.email : 'Your Email Not Found'}
              </Text>
            </View>
          </View>
          <View style={{padding: 10}} />
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              alignItems: 'center',
              width: 350,
              padding: 20,
              justifyContent: 'space-between',
              borderRadius: 15,
            }}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Phone Number</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                {profile.phone ? profile.phone : 'Your Phone Number Not Found'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PhoneManage')}>
              <Text style={{fontSize: 14, color: PRIMARY_COLOR}}>Manage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PersonalInfo;
