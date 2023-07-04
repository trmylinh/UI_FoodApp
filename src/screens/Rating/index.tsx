/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderItem from '../../components/Order/OrderItem';
import { iconRatings, myOrders } from '../../constants';
import RatingItem from '../../components/Rating/RatingItem';
import Header from '../../components/Header/Header';
export default function RatingScreen({ navigation }: any) {
    const [isChoosen, setIsChoosen] = useState('');
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
            <View style={styles.ratingView}>
                <Text style={styles.textQuestion}>How was the food?</Text>
                <Text style={styles.textRating}>Please rate the restaurant.</Text>
            </View>
            <View style={styles.iconRatingView}>
                {iconRatings.map((item, index) => {
                    const Svg = item.svg;
                    return (
                        <RatingItem
                            name={item.name}
                            svg={<Svg style={styles.iconRating} />}
                            key={index}
                            onPress={() => { setIsChoosen(item.name); }}
                            isSelected={isChoosen === item.name}
                        />
                    );
                }
                )}
            </View>
            <TouchableOpacity style={styles.buttonView}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
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
    iconRating: {
        width: 50,
        height: 50,
    },
    iconRatingView: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 30,
        flex: 1,
    },
    iconItemView: {
        borderRadius: 100,
        padding: 8,
        marginRight: 10,
    },
    buttonView: {
        backgroundColor: '#35D187',
        padding: 20,
        borderRadius: 50,
        marginBottom: 1.5,
        marginHorizontal: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});
