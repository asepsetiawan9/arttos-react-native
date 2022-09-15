/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/GlobalDashboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import imageUser from '../assets/user.png';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../redux/asyncActions/profile';
import {getTransactions} from '../redux/asyncActions/transactions';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);
  const profile = useSelector(state => state.profile.data);
  const historyTransactions = useSelector(state => state.transactions.data);

  React.useEffect(() => {
    dispatch(getProfile(token));
    dispatch(getTransactions(token));
  }, []);
  return (
    <>
      <View style={styles.headerWrap}>
        <View style={styles.headerContent}>
          <View style={styles.headerContent1}>
            <View style={styles.imageHeader}>
              {profile.picture ? (
                <Image
                  source={{uri: profile.picture}}
                  style={styles.imageCard}
                />
              ) : (
                <Image source={imageUser} style={styles.imageCard} />
              )}
            </View>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Balance</Text>
              <Text style={styles.balance}>Rp {profile.balance}</Text>
            </View>
          </View>
          <View>
            <Icon name="bell" size={25} />
          </View>
        </View>
      </View>

      <View style={styles.contentWrap}>
        <View style={styles.contentWrapIn}>
          <TouchableOpacity
            onPress={() => navigation.navigate('tes')}
            style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Icon name="arrow-up" color="#2B909A" />
              <Text style={styles.buttonText}> Transfer</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('TopupAmount')}
            style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Icon name="arrow-up" color="#2B909A" />
              <Text style={styles.buttonText}> Top Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapMainContent}>
          <View style={styles.wrapMainText}>
            <View>
              <Text style={{fontSize: 18, fontWidth: 'bold'}}>
                Transaction History
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('TransHistory')}
                style={styles.buttonWrapper}>
                <Text style={{color: '#2B909A'}}>See All</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.wrappListContent}>
            <SafeAreaView>
              <FlatList
                data={historyTransactions}
                renderItem={({item}) => (
                  <>
                    <View style={styles.listContent}>
                      <View style={styles.listImgName}>
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
                              {item.recipient_fullname}
                            </Text>
                          </View>
                          <View>
                            <Text>{item.note}</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        {item.recipient_id === item.sender_id ? (
                          <Text style={styles.amountList}>
                            +Rp {item.amount}
                          </Text>
                        ) : (
                          <Text style={styles.amountTransfer}>
                            -Rp {item.amount}
                          </Text>
                        )}
                      </View>
                    </View>
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

export default Home;
