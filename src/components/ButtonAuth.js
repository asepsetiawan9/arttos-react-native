import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/Global';

const ButtonAuth = ({nameText}) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{nameText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonAuth;
