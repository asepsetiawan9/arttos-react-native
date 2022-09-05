/* eslint-disable react-native/no-inline-styles */
import {Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardTopup = ({number, content, nameIcon, switchBtn}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
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
      <Icon name={nameIcon} />
      {/* <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
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
