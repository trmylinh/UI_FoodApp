/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { discounts } from '../../constants';
import DiscountItem from './DiscountItem';
import Icon from 'react-native-vector-icons/Ionicons';
export default function DiscountList({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.viewText}>
                <Text style={styles.textAll}>🎁 Discount on the entire menu!</Text>
                <TouchableOpacity>
                    <Icon
                        name="md-arrow-forward"
                        size={30}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={discounts}
                    renderItem={({item, index}) => (<DiscountItem data={item} key={index}/>)}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        margin: 20,
    },
    textAll:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    textSeeAll:{
        fontSize: 15,
        color: '#30B43E',
        fontWeight: 'bold',
    },
    viewSeeAll:{
        backgroundColor: '#E6FCE7',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 15,
    },
    viewText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
