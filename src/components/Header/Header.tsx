/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header({ text, onPress, icon }: any) {
    return (
        <View style={styles.iconView}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons
                    name={icon}
                    size={30}
                    color="#000"
                />
            </TouchableOpacity>
            <Text style={styles.textHeader}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    iconView: {
        marginTop: 30,
        marginLeft: 20,
        flexDirection: 'row',
    },
    textHeader: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginHorizontal: 100,
    },
});
