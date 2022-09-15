/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from '../styles/GlobalDashboard';
import imageUser from '../assets/user.png';
import ButtonAuth from '../components/ButtonAuth';
import {useSelector} from 'react-redux';

const TransFail = () => {
  const detailInput = useSelector(state => state.transactions.dataTransfer);
  const dataRecipient = useSelector(state => state.transactions.dataRecipient);
  return (
    <>
      <View style={styleLocal.headerWrap}>
        <Text style={styleLocal.textHeader}>
          Transfer Fail
        </Text>
      </View>

      <View style={styles.wrapperInput}>
        <View style={{flexDirection: 'row', padding: 20}}>
          <View style={styleLocal.cardWrap}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Amount</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                Rp {detailInput?.amount || '0'}
              </Text>
            </View>
          </View>
          <View style={{paddingRight: 20}} />
          <View style={styleLocal.cardWrap}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Balance Left</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                Rp {dataRecipient?.balance || '0'}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingBottom: 20}}>
          <View style={styles.cardWrap}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Date</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                {' '}
                {detailInput?.date || 'dd/mm/yyyy'}{' '}
              </Text>
            </View>
          </View>
          <View style={{paddingRight: 20}} />
          <View style={styleLocal.cardWrap}>
            <View style={styles.cardConfirm}>
              <Text style={{fontSize: 14}}>Time</Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                {detailInput?.time || 'Time'}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingVertical: 20,
            paddingHorizontal: 150,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          }}>
          <View >
            <Text style={{fontSize: 14}}>Notes</Text>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              {detailInput?.note || 'notes'}
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 20}} />
        <View style={styles.headerContent}>
          <View style={styles.headerContentInput}>
            <View style={styles.imageHeader}>
              {dataRecipient.picture ? (
                <Image
                  source={{uri: dataRecipient.picture}}
                  style={styles.imageCard}
                />
              ) : (
                <Image source={imageUser} style={styles.imageCard} />
              )}
            </View>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {dataRecipient?.fullname || 'Recipient Name'}
              </Text>
              <Text style={{fontSize: 14}}>
                {dataRecipient?.phone || 'Recipient Phone'}
              </Text>
            </View>
          </View>
        </View>

        <View style={{paddingTop: 30}}>
          <ButtonAuth NavigateTo="PinConfirm" nameText="PinConfirm" />
        </View>
      </View>
    </>
  );
};
const styleLocal = StyleSheet.create({
  headerWrap: {
    justifyContent: 'center',
    backgroundColor: '#2B909A',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textHeader: {
    paddingVertical: 30,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  cardWrap: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 50,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  },
  
});



export default TransFail;
