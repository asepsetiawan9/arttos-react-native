import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import imageUser from '../assets/user.png';
import Home from './Home';
import Input from '../components/Input';
import TransFind from './TransFind';
import TransDetails from './TransDetails';
import TopUp from './TopUp';

const BottomTab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="file-text" color={color} size={size} />
          ),
          header: ({navigation}) => (
            <View style={styles.header}>
              <View style={styles.root}>
                <Text style={styles.headerTitle}>Hello</Text>
              </View>
              <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
                <Input placeholder="Search receiver here" icon="search" />
              </View>
            </View>
          ),
        }}
        name="TransFind"
        component={TransFind}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="file-text" color={color} size={size} />
          ),
          header: ({navigation}) => (
            <View style={styles.header}>
              <View style={styles.root}>
                <Text style={styles.headerTitle}>Hello</Text>
              </View>
            </View>
          ),
        }}
        name="Trans Detail"
        component={TransDetails}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="money" color={color} size={size} />
          ),
          header: ({navigation}) => (
            <View style={styles.header}>
              <View style={styles.headerUser}>
                <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                  <Image source={imageUser} />
                </View>
                <View>
                  <View>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      Samuel Suhi
                    </Text>
                    <Text style={{fontSize: 14}}>+62 813-8492-9994</Text>
                  </View>
                </View>
              </View>
            </View>
          ),
        }}
        name="TopUp"
        component={TopUp}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 160,
    backgroundColor: '#2B909A',
    flexDirection: 'column',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'flex-end',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});

export default HomeTab;
