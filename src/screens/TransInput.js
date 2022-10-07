/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/GlobalDashboard';
import imageUser from '../assets/user.png';
import {useDispatch, useSelector} from 'react-redux';
import {getUserById} from '../redux/asyncActions/transactions';
import {inputAmount} from '../redux/reducers/transactions';

const TransInput = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const recipient_id = useSelector(state => state.transactions.dataTransfer);
  const recipient = useSelector(state => state.transactions.dataRecipient);
  const profile = useSelector(state => state.profile.dataProfile);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUserById(recipient_id.recipient_id));
  }, []);
  const today = new Date();
  var currentdate = new Date();
  var date =
    currentdate.getDate() +
    '-' +
    (currentdate.getMonth() + 1) +
    '-' +
    currentdate.getFullYear();

  var time =
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes() +
    ':' +
    currentdate.getSeconds();

  const data = {
    amount,
    note,
    time,
    date,
  };

  const onInputAmount = () => {
    dispatch(inputAmount(data));
    navigation.navigate('TransConfirm');
  };
  return (
    <>
      <View style={styles.headerWrap}>
        <View style={styles.headerContent}>
          <View style={styles.headerContentInput}>
            <View style={styles.imageHeader}>
              <Image source={imageUser} style={styles.imageCard} />
            </View>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {recipient?.fullname || 'Recipient Name'}
              </Text>
              <Text style={{fontSize: 14}}>
                {recipient?.phone || 'Recipient Phone Number'}
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
            onChangeText={newAmount => setAmount(newAmount)}
            defaultValue={amount}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={{fontSize: 16, color: '#1A374D', fontWeight: '700'}}>
            Rp {profile?.balance || '0'} Available
          </Text>
        </View>
        <View style={{flexDirection: 'column', width: 300, paddingBottom: 20}}>
          <View>
            <TextInput
              style={{borderBottomWidth: 2}}
              placeholder="Add some notes"
              onChangeText={newNote => setNote(newNote)}
              defaultValue={note}
            />
          </View>
        </View>
        <TouchableOpacity onPress={onInputAmount} style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Confirmation</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styleLocal = StyleSheet.create({
  inputWrapper: {
    marginBottom: 10,
  },
});

export default TransInput;
