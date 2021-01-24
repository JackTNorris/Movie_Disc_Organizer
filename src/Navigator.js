import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';

const Tab = createBottomTabNavigator();
export default class Navigator extends React.Component {
  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  }
}
