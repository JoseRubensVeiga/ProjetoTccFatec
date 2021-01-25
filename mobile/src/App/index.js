/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Intro from '../Intro';
import Login from '../Login';

const {Screen, Navigator} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen name="Intro" component={Intro} options={{headerShown: false}} />
        <Screen name="Login" component={Login} options={{headerShown: false}} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
