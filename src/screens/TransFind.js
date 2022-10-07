/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Input from '../components/Input';
import styles from '../styles/GlobalDashboard';
import imageUser from '../assets/user.png';
import {getAllUsers} from '../redux/asyncActions/profile';
import {useDispatch, useSelector} from 'react-redux';
import {selectRecipient} from '../redux/reducers/transactions';
import Icon from 'react-native-vector-icons/FontAwesome';

const TransDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const allUsers = useSelector(state => state.profile?.dataAllUser);
  const pageInfo = useSelector(state => state.profile.tabelInfo);
  const [search, setSearch] = React.useState('');
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    if (search) {
      dispatch(getAllUsers({token, search: search, limit, page}));
    } else {
      dispatch(getAllUsers({token, search: '', limit, page}));
    }
  }, [search, limit, page, token, dispatch]);

  const onSearch = value => {
    setSearch(value);
  };
  return (
    <>
      <View style={stylesInput.header}>
        <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
          <View style={stylesInput.wrapper}>
            <View style={stylesInput.iconWrapper}>
              <Icon name={'search'} size={20} color="#A9A9A9" />
            </View>
            <View style={stylesInput.inputWrapper}>
              <TextInput
                placeholder={'Search receiver here'}
                onChangeText={onSearch}
                value={search}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.contentWrap}>
        <View style={{padding: 16}}>
          <Text style={{fontSize: 18, fontWidth: '700', paddingTop: 30}}>
            Contact
          </Text>
          {/* <Text style={{fontSize: 14, color: '#8F8F8F', paddingTop: 10}}>
            {totalData ? totalData.totalData : '0'} Contact Founds
          </Text> */}
        </View>
        <View style={styles.wrapMainContent}>
          <View style={styles.wrappListContent}>
            <SafeAreaView>
              <FlatList
                data={allUsers}
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

const stylesInput = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 10,
    flexDirection: 'row',
    height: 50,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
  header: {
    height: 160,
    backgroundColor: '#2B909A',
    flexDirection: 'column',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'flex-end',
  },
});

export default TransDetails;
