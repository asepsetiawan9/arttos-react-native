import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Search = ({navigation}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
