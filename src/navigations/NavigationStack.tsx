/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RatingScreen from '../screens/Rating';
import HomeScreen from '../screens/Home';
import BottomTabBar from './BottomTabBar';
import RestaurantScreen from '../screens/Restaurant';
const Stack = createStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
            <Stack.Screen name="RatingScreen" component={RatingScreen} />
            <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        </Stack.Navigator>

    );
}
