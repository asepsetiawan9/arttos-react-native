import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styles from '../styles/Global';

const ButtonAuth = ({nameText, NavigateTo}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${NavigateTo}`)}
      style={styles.buttonWrapper}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{nameText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonAuth;
