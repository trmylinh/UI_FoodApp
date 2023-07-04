/* eslint-disable prettier/prettier */
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RestaurantScreen({ navigation, route }: any) {
  const { banner, name, rating, price, menu, discount } = route.params;
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  return (
    <ScrollView>
      <View>
        <Image
          source={banner}
          style={{
            width: screenWidth * 1,
            height: screenHeight * 0.25,
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconView}>
        <Ionicons
          name="md-arrow-back"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconSearch}>
        <Ionicons
          name="search"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
      <View>
        <View style={styles.viewInfo}>
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.viewRating}>
            <Ionicons name="md-star" size={20} color="#000" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
        <Text style={styles.priceText}>Delivery $ {price}</Text>
        {discount && (
          <View>
            <View style={styles.saleOffView}>
              <Ionicons
                name="ios-pricetags"
                size={25}
                color="#EB4755"
              />
              <Text style={styles.discountText}>{discount} off on the entire menu</Text>
            </View>
            <View style={styles.spaceView} />
          </View>
        )}
        <View style={styles.saleOffView}>
          <Ionicons
            name="gift-sharp"
            size={25}
            color="#EB4755"
          />
          <Text style={styles.giftText}>Order 2 pokes and get our special desert as a gift</Text>
        </View>
        <View style={styles.spaceView} />
      </View>
      {menu.map((item: any, index: any) => (
        <View key={index} style={styles.menuView}>
          <Text style={styles.nameDesertText}>{item.name}</Text>
          {item.items.map((item: any, index: any) => (
            <View>
              <TouchableOpacity key={index} style={styles.menuItemView}>
                <View key={item.id} style={styles.leftMenu}>
                  {item.isPopular && (
                    <View style={styles.popularView}>
                      <Ionicons name="md-star" color="#fff" size={15} style={{ marginTop: 2 }} />
                      <Text style={styles.popularText}>Popular</Text>
                    </View>
                  )}
                  <Text style={styles.titleText}>{item.name}</Text>
                  {item.description && (
                    <Text style={styles.desText}>
                      {item.description.length > 25
                        ? item.description.substring(0, 40) + '...'
                        : item.description}
                    </Text>
                  )}
                  <View style={styles.menuDiscount}>
                    <Text style={styles.priceMenuText}>$ {item.price}</Text>
                    {item.discount && (
                      <View style={styles.discountView}>
                        <Text style={styles.discountMenuText}>$ {item.discount}</Text>
                      </View>
                    )}
                  </View>
                </View>
                {item.image && (
                  <View style={styles.rightMenu}>
                    <Image source={item.image} style={styles.menuImgView} />
                  </View>
                )}
              </TouchableOpacity>
              <View style={styles.space} />
            </View>
          ))}
        </View>
      ))}

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  iconView: {
    marginLeft: 20,
    position: 'absolute',
    top: 30,
  },
  textHeader: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginHorizontal: 100,
  },
  iconSearch: {
    position: 'absolute',
    right: 20,
    top: 30,
  },
  viewInfo: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  viewRating: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    top: 5,
  },
  priceText: {
    fontSize: 18,
    marginLeft: 20,
    color: '#000',
    marginTop: 5,
  },
  saleOffView: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  discountText: {
    fontSize: 17,
    marginLeft: 20,
    marginTop: 2,
    color: '#000',
  },
  spaceView: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: '#E8E8E8',
  },
  giftText: {
    fontSize: 17,
    color: '#000',
    marginLeft: 20,
    marginRight: 50,
  },
  popularView: {
    flexDirection: 'row',
    backgroundColor: '#EB4755',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginRight: 150,
  },
  nameDesertText: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  menuView: {
    marginTop: 20,
  },
  popularText: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  menuImgView: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  menuItemView: {
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 20,
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  leftMenu: {
    marginRight: 90,
  },
  rightMenu: {
    position: 'absolute',
    top: 10,
    right: 5,
  },
  desText: {
    fontSize: 18,
  },
  priceMenuText: {
    fontSize: 20,
    color: '#000',
  },
  menuDiscount: {
    flexDirection: 'row',
  },
  discountView: {
    backgroundColor: '#EB4755',
    marginLeft: 10,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  discountMenuText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  space: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    borderColor: '#E8E8E8',
    marginTop: 10,
  },
});
