/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
export default function RestaurantItem({ data, onPress}: any) {
  const { name, price, rating, discount, image, menu}: any = data;
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={image}
            style={styles.imgPreview}
          />
        </TouchableOpacity>
        {discount && (
          <View style={styles.discountView}>
            <Text style={styles.textDiscount}>-{discount}</Text>
          </View>
        )}
        <View style={styles.timeView}>
          <Text style={styles.timeText}>70-75 min</Text>
        </View>
      </View>
      <View>
        <View style={styles.viewNameRes}>
          <Text style={styles.textNameRes}>
            {name.length > 25
              ? name.substring(0, 25 - 3) + '...'
              : name}
          </Text>
          <View style={styles.ratingView}>
            <Icon
              name="md-star"
              size={20}
              color="#000"
            />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
        {/* gia tien */}
        <View>
          <Text style={styles.textPrice}>$ {price}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginRight: 20,
  },
  imgPreview: {
    width: 320,
    height: 200,
    borderRadius: 20,
  },
  discountView: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  textDiscount: {
    color: '#FF0000',
    fontWeight: 'bold',
  },
  timeText: {
    color: '#000',
    fontWeight: 'bold',
  },
  timeView: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  ratingView: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    marginTop: 2,
  },
  ratingText: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  textNameRes: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewNameRes: {
    marginTop: 10,
  },
  textPrice: {
    color: '#000',
    fontSize: 17,
  },
});
