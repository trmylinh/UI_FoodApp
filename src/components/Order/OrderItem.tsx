/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function OrderItem({ data }: any) {
    const { name, price, rating, discount, image, date, status } = data;
    return (
        <View style={styles.container}>
            <View style={styles.orderView}>
                <View style={styles.infoRes}>
                    <TouchableOpacity>
                        <Image
                            source={image}
                            style={styles.imgView}
                        />
                    </TouchableOpacity>
                    <View style={styles.textView}>
                        <Text style={styles.textDate}>{date}</Text>
                        <Text style={styles.textName}>
                            {name.length > 30
                                ? name.substring(0, 30 - 3) + '...'
                                : name}
                        </Text>
                    </View>
                </View>
                <View style={styles.statusOrder}>
                    <Text style={styles.textDate}>{status}</Text>
                    <Text style={styles.textName}>$ {price}</Text>
                </View>
            </View>
            <View style={styles.space} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 20,
        marginLeft: 20,
    },
    imgView: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    orderView: {
        flexDirection: 'row',
    },
    infoRes:{
        flexDirection: 'row',
    },
    textView:{
        marginLeft: 15,
        justifyContent: 'center',
    },
    textDate:{
        fontSize: 15,
        color: '#808080',
    },
    textName:{
        fontSize: 15,
        color: '#000',
    },
    statusOrder:{
        position: 'absolute',
        right: 20,
        top: 20,
    },
    space:{
        borderBottomWidth: 1,
        marginRight: 20,
        marginTop: 20,
        borderColor: '#E8E8E8',
    },
});
