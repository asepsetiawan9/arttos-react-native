/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/GlobalDashboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import imageUser from '../assets/user.png';

import {PRIMARY_COLOR} from './Constant';

const TransDetails = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={styles.contentWrap}>
          <View style={{padding: 16}}>
            <Text style={{fontSize: 18, fontWidth: '700', paddingTop: 30}}>
              Contact
            </Text>
            <Text style={{fontSize: 14, color: '#8F8F8F', paddingTop: 10}}>
              17 Contact Founds
            </Text>
          </View>
          <View style={styles.wrapMainContent}>
            <View style={styles.wrappListContent}>
              
              <TouchableOpacity
                onPress={() => navigation.navigate('TransInput')}
                style={styles.cardListContent}>
                <View style={styles.cardListImgName}>
                  <View style={{paddingRight: 15}}>
                    <Image source={imageUser} style={styles.imageHeader} />
                  </View>
                  <View>
                    <View>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        Samuel Suhi
                      </Text>
                    </View>
                    <View>
                      <Text>+62 813-8492-9994</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default TransDetails;
