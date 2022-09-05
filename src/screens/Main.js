import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './Login';
import Passforgot from './PassForgot';
import Signup from './Signup';
import HomeStack from './HomeStack';

import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Main = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="HomeStack"
            component={HomeStack}
          />
        ) : (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Signup"
              component={Signup}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Passforgot"
              component={Passforgot}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
