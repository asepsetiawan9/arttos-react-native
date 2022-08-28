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

const TransConfirm = () => {
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
        <View style={{flexDirection: 'row', padding: 20}}>
          <View style={styles.cardWrap}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Amount</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>Rp100.000</Text>
            </View>
          </View>
          <View style={{paddingRight: 20}} />
          <View style={styles.cardWrap}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Balance Left</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>Rp20.000</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingBottom: 20}}>
          <View style={styles.cardWrap}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Amount</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>Rp100.000</Text>
            </View>
          </View>
          <View style={{paddingRight: 20}} />
          <View style={styles.cardWrap}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Balance Left</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>Rp20.000</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 310,
            backgroundColor: '#fff',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingVertical: 20,
            paddingHorizontal: 30,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          }}>
          <View style={styles.cardConfirm}>
            <Text style={{fontSize: 14}}>Notes</Text>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              For buying some socks
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 30}}>
          <ButtonAuth NavigateTo="PinConfirm" nameText="PinConfirm" />
        </View>
      </View>
    </>
  );
};

export default TransConfirm;
