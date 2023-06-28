/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import { myOrders } from '../../constants';
import OrderItem from './OrderItem';

export default function OrderList() {
    return (
        <View style={styles.container}>
            <FlatList
				data={myOrders}
				renderItem={({ item }) => <OrderItem data={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
			/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
