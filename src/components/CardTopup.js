/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';

const CardTopup = ({number, content}) => {
  const [showText, setShow] = React.useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 15,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: '#2B909A',
          fontWeight: 'bold',
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        {number}
      </Text>
      <Text style={{fontSize: 16}}> {content}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   wrapper: {
//     backgroundColor: '#fff',
//     elevation: 4,
//     borderRadius: 10,
//     flexDirection: 'row',
//     height: 50,
//   },
//   iconWrapper: {
//     height: 50,
//     width: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputWrapper: {
//     flex: 1,
//   },
// });

export default CardTopup;
