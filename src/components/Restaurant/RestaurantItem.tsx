/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function RestaurantItem({ data, navigation }: any) {
  const { name, price, rating, discount, image, menu }: any = data;
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <TouchableOpacity>
          <Image
            source={image}
            style={styles.imgPreview}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

  },
  imageView: {

  },
  imgPreview:{},
});
