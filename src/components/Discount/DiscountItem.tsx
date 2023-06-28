/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
export default function DiscountItem({ data }: any) {
    const { name, price, rating, discount, image }: any = data;
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={image}
                    style={styles.imgPreview}
                />
                <View style={styles.discountView}>
                    <Text style={styles.textDiscount}>-{discount}</Text>
                </View>
            </View>
            <View>
                <View style={styles.viewNameRes}>
                    <Text style={styles.textNameRes}>
                        {name.length > 25
                            ? name.substring(0, 25 - 3) + '...'
                            : name}
                    </Text>
                </View>
                {/* gia tien */}
                <View style={styles.viewNumber}>
                    <View style={styles.ratingView}>
                        <Icon
                            name="md-star-outline"
                            size={20}
                            color="#000"
                        />
                        <Text style={styles.ratingText}>{rating}</Text>
                    </View>
                    <Text style={styles.textPrice}>$ {price}</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 20,
        marginRight: 20,
    },
    imgPreview: {
        width: 320,
        height: 200,
        borderRadius: 20,
    },
    ratingView: {
        flexDirection: 'row',
        marginRight: 20,
    },
    ratingText: {
        color: '#000',
        fontSize: 17,
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
    viewNumber: {
        flexDirection: 'row',
    },
    textDiscount: {
        color: '#000',
        fontWeight: 'bold',
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
});
