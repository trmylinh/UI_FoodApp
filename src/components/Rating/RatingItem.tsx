/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function RatingItem({ name, svg, isSelected, onPress}: any) {
    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.iconItemView,
                    // eslint-disable-next-line react-native/no-inline-styles
                    { backgroundColor: isSelected ? '#35D187' : '#F4F4F7' },
                ]}
                onPress={onPress}
            >
                {svg}
            </TouchableOpacity>
            <Text style={styles.textName}>{name}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    iconItemView:{
        borderRadius: 100,
        padding: 8,
        marginRight: 10,
    },
    textName:{
        textAlign: 'center',
        marginRight: 10,
        marginTop: 5,
    },
});

