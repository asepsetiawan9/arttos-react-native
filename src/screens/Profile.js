/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CardTopup from '../components/CardTopup';
import imageUser from '../assets/user.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/reducers/auth';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.dataProfile);

  const onLogout = () => {
    dispatch(logout());
  };
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <ScrollView>
        <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
          <View style={{paddingVertical: 20, alignItems: 'center'}}>
            <Image
              source={{uri: profile.picture}}
              style={{
                width: 80,
                height: 80,
                aspectRatio: 1,
                borderRadius: 10,
              }}
            />
            <Text style={{fontSize: 16, paddingTop: 10}}>
              <Icon name="pencil" />
              Edit
            </Text>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', paddingVertical: 10}}>
              {profile.fullname}
            </Text>
            <Text style={{fontSize: 16}}>{} </Text>
          </View>
          <View style={{paddingVertical: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PersonalInfo')}>
              <CardTopup number="Personal Information" nameIcon="arrow-right" />
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate('PassChange')}>
              <CardTopup number="Change Password" nameIcon="arrow-right" />
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate('PinChange')}>
              <CardTopup number="Change PIN" nameIcon="arrow-right" />
            </TouchableOpacity>
          </View>
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
              Notification
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={{paddingVertical: 10}}>
            <TouchableOpacity onPress={onLogout}>
              <CardTopup number="Logout" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
