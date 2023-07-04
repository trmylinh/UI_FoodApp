/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { restaurants } from '../../constants';
import RestaurantItem from './RestaurantItem';

export default function RestaurantList({navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.viewText}>
                <Text style={styles.textAll}>All Restaurants</Text>
                <TouchableOpacity style={styles.viewSeeAll}>
                    <Text style={styles.textSeeAll}>View all</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={restaurants}
                    renderItem={({ item, index }) => (
                        <RestaurantItem data={item} key={index} navigation={navigation}/>
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    textAll: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    textSeeAll: {
        fontSize: 15,
        color: '#30B43E',
        fontWeight: 'bold',
    },
    viewSeeAll: {
        backgroundColor: '#E6FCE7',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 15,
    },
    viewText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
