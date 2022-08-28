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

const Confirm = () => {
  const navigation = useNavigation();
  return (
    // <View style={styles.root}>
    //   <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
    //     <Text>Home</Text>
    //   </TouchableOpacity>
    // </View>
    <>
      <ScrollView>
        <View style={styles.headerWrap2}>
          <View style={styles.headerWrapConfirm}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#fff',
              }}>
              Transfer Details
            </Text>
          </View>
        </View>
        <View style={styles.wrapperInput}>
          <View style={{paddingVertical: 20}}>
            <Icon name={'check-circle'} size={100} color="green" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Transfer Success
            </Text>
          </View>
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
          <View style={styles.noteTrans}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Notes</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                For buying some socks
              </Text>
            </View>
          </View>
          <View style={{padding: 10}}>
            <Text style={{textAlign: 'right'}}> From </Text>
          </View>
          <View style={styles.noteTrans}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
          <View style={{padding: 10}}>
            <Text style={{textAlign: 'right'}}> To </Text>
          </View>
          <View style={styles.noteTrans}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
          <View style={{paddingTop: 30}}>
            <ButtonAuth NavigateTo="Home" nameText="Back to Home" />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Confirm;
