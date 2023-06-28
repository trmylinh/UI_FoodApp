/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import OrderList from '../../components/Order/OrderList';

export default function OrderScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>My orders</Text>
      <OrderList />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  textHeader:{
    marginTop: 20,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
});
