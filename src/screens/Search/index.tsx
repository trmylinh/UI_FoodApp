/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { popularFoods } from '../../constants';

export default function SearchScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Search</Text>
      </View>
      <View style={styles.viewInput}>
        <Ionicons
          name="search"
          size={20}
          color="#000"
          style={styles.iconSearch}
        />
        <TextInput
          style={styles.inputSearch}
          placeholder="Restaurants and Cuisines"
        />
      </View>
      {/* popular results */}
      <View style={styles.resultView}>
        <Text style={styles.textResult}>Popular Categories</Text>
        <FlatList
          data={popularFoods}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.viewResultItem}>
              <Text style={styles.textResultItem}>{item}</Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textHeader: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
  viewHeader: {
    marginTop: 20,
    marginLeft: 20,
  },
  viewInput: {
    backgroundColor: '#E4E7EB',
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  inputSearch: {
    marginLeft: 10,
    marginRight: 60,
  },
  iconSearch: {
    marginLeft: 20,
    marginVertical: 20,
  },
  resultView: {
    marginLeft: 20,
    marginTop: 30,
    flex: 1,
  },
  textResult:{
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textResultItem:{
    color: '#3A4353',
    fontSize: 15,
  },
  viewResultItem:{
    marginTop: 30,
  },
});
