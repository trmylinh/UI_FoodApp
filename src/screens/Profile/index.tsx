/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { profileTabs } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.infoUser}>
        <Text style={styles.textName}>Tran My Linh</Text>
        <Text style={styles.textPhone}>+234 809 809 809</Text>
      </View>

      <View>
        <FlatList
          data={profileTabs}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.iconView}>
              <Ionicons
                name={item.icon}
                size={30}
                color="#000"
              />
              <Text style={styles.textIcon}>{item.name}</Text>
            </TouchableOpacity>
          )}
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
  infoUser: {
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  textName: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
  textPhone: {
    fontSize: 15,
  },
  iconView: {
    marginLeft: 20,
    marginVertical: 20,
    flexDirection: 'row',
  },
  textIcon: {
    fontSize: 20,
    color: '#000',
    marginLeft: 20,
  },
});
