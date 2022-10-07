/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import CardTopup from '../components/CardTopup';
import imageUser from '../assets/user.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/reducers/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from '../styles/GlobalDashboard';
import {uploadImage, getProfile} from '../redux/asyncActions/profile';

const Profile = () => {
  const dispatch = useDispatch();
  const [picture, setPicture] = React.useState(null);
  const [uploading, setUpload] = React.useState(false);
  const [showModal, toggleModal] = React.useState(false);
  const profile = useSelector(state => state.profile.dataProfile);
  const token = useSelector(state => state.auth.token);

  const onLogout = () => {
    dispatch(logout());
  };
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onUploadImage = async data => {
    await dispatch(uploadImage({data, token}));
    setTimeout(() => setUpload(false), 2000);
  };

  const pickImage = async type => {
    const pict = type
      ? await launchImageLibrary({mediaType: 'photo'})
      : await launchCamera({mediaType: 'photo', maxWidth: 500, maxHeight: 500});
    if (pict.assets) {
      const pickedPic = pict.assets[0];
      setUpload(true);
      setPicture(pickedPic.uri);
      if (pickedPic.fileSize > 1 * 1024 * 1024) {
        Alert.alert('Error', 'Filesize too Big', [
          {
            onPress: () => {
              toggleModal(false);
              setUpload(false);
            },
          },
        ]);
      } else {
        toggleModal(false);
        onUploadImage(pickedPic);
      }
    }
    toggleModal(false);
  };

  React.useEffect(() => {
    dispatch(getProfile(token));
  }, [dispatch, token]);

  return (
    <>
      <Modal transparent={true} visible={showModal}>
        <View style={styles.modal}>
          <View style={styles.innerModal}>
            <TouchableOpacity
              onPress={() => pickImage(true)}
              style={styles.selectBtn}>
              <Text>Select From Galerry</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
              onPress={() => pickImage(false)}
              style={styles.selectBtn}>
              <Text>Open Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
          <View
            style={{
              paddingVertical: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => toggleModal(true)}>
              <View style={{alignItems: 'center', marginBottom: 10}}>
                <Image
                  source={{uri: profile.picture}}
                  style={{
                    width: 80,
                    height: 80,
                    aspectRatio: 1,
                    borderRadius: 10,
                  }}
                />
              </View>
              {uploading && (
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 16}}>Uploading...</Text>
                </View>
              )}
              <Text style={{fontSize: 16, paddingTop: 10, textAlign: 'center'}}>
                <Icon name="pencil" />
                Edit
              </Text>
            </TouchableOpacity>
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
