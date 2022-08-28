import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeTab from './HomeTab';
import Search from './Search';
import {PRIMARY_COLOR} from './Constant';
import TransConfirm from './TransConfirm';
import TransHistory from './TransHistory';
import TransInput from './TransInput';
import PinConfirm from './PinConfirm';
import Confirm from './Confirm';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeTab"
        component={HomeTab}
      />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#2B909A',
          },
        }}
        name="TransHistory"
        component={TransHistory}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#2B909A',
          },
        }}
        name="TransInput"
        component={TransInput}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#2B909A',
          },
        }}
        name="TransConfirm"
        component={TransConfirm}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#2B909A',
          },
        }}
        name="PinConfirm"
        component={PinConfirm}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Confirm"
        component={Confirm}
      />
      {/*<Stack.Screen
        options={{headerShown: true}}
        name="TransDetails"
        component={TransDetails}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
