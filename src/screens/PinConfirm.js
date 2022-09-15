/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/GlobalDashboard';
import stylesBtn from '../styles/Global';
import {useDispatch, useSelector} from 'react-redux';
import {transferMoney} from '../redux/asyncActions/transactions';

const PinConfirm = () => {
  const navigation = useNavigation();
  const detailInput = useSelector(state => state.transactions.dataTransfer);
  const pinUser = useSelector(state => state.auth.pin);
  const token = useSelector(state => state.auth.token);
  const date = detailInput.date;
  const time = detailInput.time;
  const date_time = `${date} ${time}`;

  const [first, setFirst] = useState();
  const [sec, setSec] = useState();
  const [third, setThird] = useState();
  const [fourth, setFourth] = useState();
  const [fifth, setFifth] = useState();
  const [sixth, setSixth] = useState();
  const dispatch = useDispatch();

  const data = {
    first,
    sec,
    third,
    fourth,
    fifth,
    sixth,
  };
  const pin = Object.values(data).join('');
  return (
    <>
      <View style={styles.wrapperInput}>
        <View
          style={{flexDirection: 'column', padding: 20, alignItems: 'center'}}>
          <Text style={{padding: 20, fontSize: 22, fontWeight: 'bold'}}>
            Enter PIN to Transfer
          </Text>
          <Text style={{textAlign: 'center'}}>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </Text>
        </View>
        <View style={styleLocal.pinInput}>
          <TextInput
            style={styleLocal.input}
            onChangeText={newFirst => setFirst(newFirst)}
            defaultValue={first}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newSec => setSec(newSec)}
            defaultValue={sec}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newThird => setThird(newThird)}
            defaultValue={third}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newFourth => setFourth(newFourth)}
            defaultValue={fourth}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newFifth => setFifth(newFifth)}
            defaultValue={fifth}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newSixth => setSixth(newSixth)}
            defaultValue={sixth}
          />
        </View>
        <View style={{paddingTop: 30}}>
          <TouchableOpacity
            style={stylesBtn.buttonWrapper}
            onPress={() => {
              if (pin != pinUser) {
                navigation.navigate('TransFail');
              } else {
                const data = {
                  amount: detailInput.amount,
                  recipient_id: detailInput.recipient_id,
                  note: detailInput.note,
                  time_date: date_time,
                  // pin: pin,
                };
                dispatch(transferMoney({data, token}));
                navigation.navigate('TransSuccess');
              }
            }}>
            <View style={stylesBtn.button}>
              <Text style={stylesBtn.buttonText}>Transfer Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styleLocal = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    width: 40,
    borderRadius: 10,
    textAlign: 'center',
  },
  pinInput: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'center',
  },
});

export default PinConfirm;
