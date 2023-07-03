/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';

export default function RestaurantScreen({ navigation }: any) {
  return (
    <View>
      <Header
        icon="md-arrow-back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
