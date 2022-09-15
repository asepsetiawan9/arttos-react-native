/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/GlobalDashboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import imageUser from '../assets/user.png';
import graphic from '../assets/graphic.png';
import {useSelector} from 'react-redux';

import {PRIMARY_COLOR} from './Constant';

const TransDetails = () => {
  const navigation = useNavigation();
  const historyTransactions = useSelector(state => state.transactions.data);
  console.log(historyTransactions[0].recipient_fullname);
  return (
    <>
      <ScrollView>
        <View style={styles.headerWrapScr}>
          <View style={styles.headerContent}>
            <View style={styles.headerContent1}>
              <View style={styles.imageHeader}>
                <Icon name="arrow-down" size={20} color={'green'} />
              </View>
              <View>
                <Text style={{fontSize: 14, color: '#fff'}}>Income</Text>
                <Text style={styles.balance}>Rp120.000</Text>
              </View>
            </View>
            <View style={styles.headerContent1}>
              <View style={styles.imageHeader}>
                <Icon name="arrow-up" size={20} color={'red'} />
              </View>
              <View>
                <Text style={{fontSize: 14, color: '#fff'}}>Expense</Text>
                <Text style={styles.balance}>Rp120.000</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.contentWrap}>
          <View style={{padding: 16}}>
            <Text style={{fontSize: 18, fontWidth: '700', paddingTop: 30}}>
              In This Week
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={graphic} />
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
                  onPress={() => navigation.navigate('tes')}
                  style={styles.buttonWrapper}>
                  <Text style={{color: '#2B909A'}}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.wrapMainContent}>
              {/* <SafeAreaView> */}
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
              {/* </SafeAreaView> */}
            </View>
            {/* <View style={styles.wrappListContent}>
              <View style={{paddingBottom: 10}} />
              <View style={styles.listContent}>
                <View style={styles.listImgName}>
                  <View style={{paddingRight: 15}}>
                    {historyTransactions.picture ? (
                      <Image
                        source={{uri: historyTransactions[0].recipientpic}}
                        style={styles.imageCard}
                      />
                    ) : (
                      <Image source={imageUser} style={styles.imageCard} />
                    )}
                  </View>
                  <View>
                    <View>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        {historyTransactions[0].recipient_fullname}
                      </Text>
                    </View>
                    <View>
                      <Text>Transfer</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.amountList}>
                    {historyTransactions[0].recipient_id ===
                    historyTransactions[0].sender_id ? (
                      <Text style={styles.amountList}>
                        +Rp {historyTransactions[0].amount}
                      </Text>
                    ) : (
                      <Text style={styles.amountTransfer}>
                        -Rp {historyTransactions[0].amount}
                      </Text>
                    )}
                  </Text>
                </View>
              </View>
              <View style={{paddingBottom: 10}} />
            </View> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default TransDetails;
