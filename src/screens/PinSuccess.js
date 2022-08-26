import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles/Global';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonAuth from './src/components/ButtonAuth';

const PinSuccess = () => {
  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}> ArtTos </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.wrappContent}>
            <Icon name={'check-circle'} size={100} color="green" />
            <Text style={styles.textTittle}> PIN Successfully Created </Text>
            <Text style={styles.text}>
              Your PIN was successfully created and you can now access all the
              features in Zwallet. Login to your new account and start
              exploring!
            </Text>
          </View>
          <ButtonAuth nameText="Login Now" />
        </View>
      </ScrollView>
    </>
  );
};

export default PinSuccess;
