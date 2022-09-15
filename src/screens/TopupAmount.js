/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/GlobalDashboard';
import imageUser from '../assets/user.png';
import {useDispatch, useSelector} from 'react-redux';
import {topup} from '../redux/asyncActions/topup';
import {getProfile} from '../redux/asyncActions/profile';
import {getTransactions} from '../redux/asyncActions/transactions';

const TopupAmount = () => {
  const navigation = useNavigation();
  const profile = useSelector(state => state.profile.dataProfile);
  const alertPopup = () =>
    Alert.alert('Topup', 'TopUp Succesfuly', [{text: 'OK'}]);
  const [balance, setBalance] = useState('');

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const data = {
    balance,
  };

  const onTopup = () => {
    dispatch(topup({data, token}));
    dispatch(getProfile(token));
    dispatch(getTransactions(token));
    dispatch(alertPopup);
    navigation.navigate('Home');
  };

  return (
    <>
      <View style={styles.headerWrap}>
        <View style={styles.headerContent}>
          <View style={styles.headerContentInput}>
            <View style={styles.imageHeader}>
              {profile.picture ? (
                <Image
                  source={{uri: profile.picture}}
                  style={styles.imageCard}
                />
              ) : (
                <Image source={imageUser} style={styles.imageCard} />
              )}
            </View>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {profile.fullname ? profile.fullname : 'Your Name'}
              </Text>
              <Text style={{fontSize: 14}}>
                {profile.phone ? profile.phone : 'Your Phone Number'}
              </Text>
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
            onChangeText={balanceNew => setBalance(balanceNew)}
            initialValue={balance}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={{fontSize: 16, color: '#1A374D', fontWeight: '700'}}>
            Rp {profile.balance ? profile.balance : '0'} Available on Your
            Wallet
          </Text>
        </View>
        <View style={styleLocal.inputWrapper}>
          <TouchableOpacity onPress={onTopup}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
          </TouchableOpacity>
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

export default TopupAmount;
