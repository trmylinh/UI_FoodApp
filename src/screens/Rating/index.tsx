/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderItem from '../../components/Order/OrderItem';
import { myOrders } from '../../constants';
import { Sadness } from '../../assets';
export default function RatingScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            {/* go back header*/}
            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="md-close"
                        size={30}
                        color="#000"
                    />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Rate your order</Text>
            </View>

            {/* order info */}
            <View>
                <OrderItem data={myOrders[5]} />
            </View>

            {/* rating */}
            <View>
                <View style={styles.ratingView}>
                    <Text style={styles.textQuestion}>How was the food?</Text>
                    <Text style={styles.textRating}>Please rate the restaurant.</Text>
                </View>
                {/* <Sadness /> */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconView: {
        marginTop: 30,
        marginLeft: 20,
        flexDirection: 'row',
    },
    textHeader: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginHorizontal: 100,
    },
    ratingView: {
        marginTop: 30,
        marginLeft: 20,
    },
    textQuestion: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    textRating: {
        fontSize: 15,
        marginTop: 5,
    },
});
