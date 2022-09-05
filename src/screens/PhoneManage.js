/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/GlobalDashboard';
import {PRIMARY_COLOR} from '../styles/Constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';

const PhoneManage = () => {
  const navigation = useNavigation();
  const profile = useSelector(state => state.profile.data);
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
              <Text style={{fontSize: 14}}>Primary</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                {profile.phone ? profile.phone : 'Press Icon For Manage Phone'}
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AddPhone')}>
              <Icon name="trash" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PhoneManage;
