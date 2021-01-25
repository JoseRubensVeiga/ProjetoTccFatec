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

const {Screen, Navigator} = createStackNavigator();

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Intro">
        <Screen name="Intro" component={Intro} options={{headerShown: false}} />
        <Screen name="Details" component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
