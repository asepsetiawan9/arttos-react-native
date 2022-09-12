/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/GlobalDashboard';
import imageUser from '../assets/user.png';
import {getUsers} from '../redux/asyncActions/profile';
import {useDispatch, useSelector} from 'react-redux';
import {selectRecipient} from '../redux/reducers/transactions';

const TransDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dataUser = useSelector(state => state.profile.data);
  const totalData = useSelector(state => state.profile.totalData);
  const token = useSelector(state => state.auth.token);
  React.useEffect(() => {
    dispatch(getUsers(token));
  }, []);

  return (
    <>
      <View style={styles.contentWrap}>
        <View style={{padding: 16}}>
          <Text style={{fontSize: 18, fontWidth: '700', paddingTop: 30}}>
            Contact
          </Text>
          <Text style={{fontSize: 14, color: '#8F8F8F', paddingTop: 10}}>
            {totalData ? totalData.totalData : '0'} Contact Founds
          </Text>
        </View>
        <View style={styles.wrapMainContent}>
          <View style={styles.wrappListContent}>
            <SafeAreaView>
              <FlatList
                data={dataUser}
                renderItem={({item}) => (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(selectRecipient(item.id));
                        navigation.navigate('TransInput');
                      }}
                      style={styles.cardListContent}>
                      <View style={styles.cardListImgName}>
                        <View style={{paddingRight: 15}}>
                          {item.recipientpic ? (
                            <Image
                              source={{uri: item.recipientpic}}
                              style={styles.imageCard}
                            />
                          ) : (
                            <Image
                              source={imageUser}
                              style={styles.imageCard}
                            />
                          )}
                        </View>
                        <View>
                          <View>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                              {item.fullname ? item.fullname : 'Your Name'}
                            </Text>
                          </View>
                          <View>
                            <Text>
                              {item.phone ? item.phone : 'Your Phone'}

                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={{paddingBottom: 10}} />
                  </>
                )}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
          </View>
        </View>
      </View>
    </>
  );
};

export default TransDetails;
