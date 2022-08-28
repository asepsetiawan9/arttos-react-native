import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const data = [
  {
    id: 1,
    name: 'John',
    phoneNumber: '081222333444',
  },
  {
    id: 2,
    name: 'Grace',
    phoneNumber: '081222333445',
  },
  {
    id: 3,
    name: 'Abraham',
    phoneNumber: '081222333446',
  },
  {
    id: 4,
    name: 'Doe',
    phoneNumber: '081222333447',
  },
  {
    id: 5,
    name: 'Grace',
    phoneNumber: '081222333445',
  },
  {
    id: 6,
    name: 'Abraham',
    phoneNumber: '081222333446',
  },
  {
    id: 7,
    name: 'Doe',
    phoneNumber: '081222333447',
  },
  {
    id: 8,
    name: 'Grace',
    phoneNumber: '081222333445',
  },
  {
    id: 9,
    name: 'Abraham',
    phoneNumber: '081222333446',
  },
  {
    id: 10,
    name: 'Doe',
    phoneNumber: '081222333447',
  },
  {
    id: 11,
    name: 'Grace',
    phoneNumber: '081222333445',
  },
  {
    id: 12,
    name: 'Abraham',
    phoneNumber: '081222333446',
  },
  {
    id: 13,
    name: 'Doe',
    phoneNumber: '081222333447',
  },
  {
    id: 14,
    name: 'Grace',
    phoneNumber: '081222333445',
  },
  {
    id: 15,
    name: 'Abraham',
    phoneNumber: '081222333446',
  },
  {
    id: 16,
    name: 'Doe',
    phoneNumber: '081222333447',
  },
  {
    id: 17,
    name: 'Grace',
    phoneNumber: '081222333445',
  },
  {
    id: 18,
    name: 'Abraham',
    phoneNumber: '081222333446',
  },
  {
    id: 19,
    name: 'Doe',
    phoneNumber: '081222333447',
  },
];

const History = ({navigation}) => {
  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        contentContainerStyle={styles.container}
        renderItem={ItemList}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

const ItemList = ({item}) => {
  return (
    <>
      {/* {item.name !== 'John' && ( */}
      <View style={styles.itemWrapper}>
        <View style={styles.pict} />
        <View style={styles.itemTextWrapper}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text>{item.phoneNumber}</Text>
        </View>
      </View>
      {/* )} */}
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  pict: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemWrapper: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemTextWrapper: {
    marginLeft: 10,
  },
});

export default History;
