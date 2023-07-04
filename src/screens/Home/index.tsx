/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DiscountList from '../../components/Discount/DiscountList';
import { useNavigation } from '@react-navigation/native';
import RestaurantItem from '../../components/Restaurant/RestaurantItem';
import { restaurants } from '../../constants';
import RestaurantList from '../../components/Restaurant/RestaurantList';
export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.locationView}>
        <Ionicons
          name="ios-location-outline"
          size={25}
          color="#000"
        />
        <Text style={styles.textLocation}>Cau Giay, Ha Noi</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.orderPreview}>
          <View style={styles.previewHeader}>
            <Text style={styles.textOrderPreview}>Your last order</Text>
            <TouchableOpacity style={styles.iconClose}>
              <Ionicons
                name="md-close"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoPreview}>
            <Image
              source={require('../../assets/images/foods/food1.jpg')}
              style={styles.imgOrder}
            />
            <View style={styles.textOrder}>
              <Text style={styles.textTime}>Today, 10:45</Text>
              <Text style={styles.textName}>Souffle Pancakes</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.rateButton}
            onPress={() => navigation.navigate('RatingScreen')}
          >
            <Text style={styles.textRateBtn}>Rate order</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewAll}>
          <DiscountList />
          <RestaurantList navigation={navigation}/>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  locationView: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  textLocation: {
    color: '#000',
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  orderPreview: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  infoPreview: {
    flexDirection: 'row',
    margin: 20,
  },
  imgOrder: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textOrder: {
    flexDirection: 'column',
    marginLeft: 20,
    paddingVertical: 15,
  },
  textName: {
    fontSize: 16,
    color: '#000',
  },
  textTime: {
    fontSize: 15,
    color: '#6B7280',
  },
  previewHeader: {
    flexDirection: 'row',
  },
  iconClose: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  textOrderPreview: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20,
  },
  rateButton: {
    backgroundColor: '#34D285',
    padding: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRateBtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  viewAll: {
    flex: 1,
  },
});
