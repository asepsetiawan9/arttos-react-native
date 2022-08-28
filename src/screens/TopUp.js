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
import CardTopup from '../components/CardTopup';


const TopUp = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
        <View style={{paddingVertical: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>How to Top-Up</Text>
        </View>
        <View>
          <CardTopup number="1" content="testes" />
        </View>
      </View>
    </>
  );
};

export default TopUp;
