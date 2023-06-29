/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home';
import OrderScreen from '../screens/Order';
import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/Search';
//screen names
const HOME_SCREEN = 'HOME';
const PROFILE_SCREEN = 'PROFILE';
const ORDER_SCREEN = 'ORDER';
const SEARCH_SCREEN = 'SEARCH';

const Tab = createBottomTabNavigator();

export default function BottomTabBar() {
    return (
        // <NavigationContainer>
            <Tab.Navigator
                initialRouteName={HOME_SCREEN}
                screenOptions={
                    ({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName: any;
                            let rn = route.name;

                            if (rn === HOME_SCREEN) {
                                iconName = focused ? 'home' : 'home-outline';
                            } else if (rn === ORDER_SCREEN) {
                                iconName = focused ? 'receipt' : 'receipt-outline';
                            } else if (rn === PROFILE_SCREEN) {
                                iconName = focused ? 'person' : 'person-outline';
                            } else if (rn === SEARCH_SCREEN) {
                                iconName = focused ? 'search' : 'search-outline';
                            }

                            return <Ionicons name={iconName} size={size} color={color}/>;
                        },
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveTintColor: '#808080',
                        headerShown: false,
                        tabBarShowLabel: false,
                    })
                }
            >
                <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
                <Tab.Screen name={SEARCH_SCREEN} component={SearchScreen} />
                <Tab.Screen name={ORDER_SCREEN} component={OrderScreen} />
                <Tab.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
            </Tab.Navigator>
        // {/* </NavigationContainer > */}
    );
}
