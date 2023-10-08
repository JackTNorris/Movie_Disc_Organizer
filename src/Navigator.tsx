/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {View, Text} from 'react-native';
import MovieCarouselScreen from './screens/MovieCarouselScreen';

const Drawer = createDrawerNavigator();
const Navigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Library'>
      <Drawer.Screen name="Library" component={MovieCarouselScreen}/>
      <Text>Test</Text>
    </Drawer.Navigator>
  );
};

export default Navigator;
