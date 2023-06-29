/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RatingScreen from '../screens/Rating';
import HomeScreen from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './NavigationStack';
const Stack = createStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <NavigationStack />
        </NavigationContainer>
    );
}
