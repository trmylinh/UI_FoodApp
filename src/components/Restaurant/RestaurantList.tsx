/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { restaurants } from '../../constants';
import RestaurantItem from './RestaurantItem';

export default function RestaurantList({ navigation }: any) {
    const renderItem = () => {
        return (
            <RestaurantItem />
        );
    };
    return (
        <View>
            {/* <FlatList
                data={restaurants}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator
            /> */}
            <View>
                <Text>All Restaurants</Text>
            </View>
            <View>
                {restaurants.map((item, index) => (
                    <RestaurantItem
                        key={index}
                        data={item}
                        navigation={navigation}
                    />
                ))}
            </View>
        </View>
    );
}
