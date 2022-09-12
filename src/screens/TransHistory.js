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
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import imageUser from '../assets/user.png';

const TransHistory = () => {
  const navigation = useNavigation();
  const historyTransactions = useSelector(state => state.transactions.data);
  return (
    <>
      <View style={styles.contentWrap}>
        <View style={{padding: 16}}>
          <Text style={{fontSize: 18, fontWidth: '700', paddingTop: 30}}>
            In This Week
          </Text>
        </View>
        <View style={styles.wrapMainContent}>
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
                          <Image source={imageUser} style={styles.imageCard} />
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
                        <Text style={styles.amountList}>+Rp {item.amount}</Text>
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
        <View style={styles.wrapBtn}>
          <View style={styles.wrapBtnFoot}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TransHistory')}
              style={styles.buttonWrapper}>
              <View style={styles.button}>
                <Icon name="arrow-up" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapBtnFoot}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TransHistory')}
              style={styles.buttonWrapper}>
              <View style={styles.button}>
                <Icon name="arrow-down" />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('TransHistory')}
              style={styles.buttonWrapper}>
              <View style={styles.button}>
                <Text style={{color: '#2B909A'}}>Filter by Date</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default TransHistory;
