/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import BottomTabBar from './src/navigations/BottomTabBar';
import RootNavigation from './src/navigations';

function App(): JSX.Element {
  return (
      <RootNavigation />
  );
}

export default App;
