import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Intro from './Intro';
import Login from './Login';
import Register from './Register';
import Home from './Home';

const {Screen, Navigator} = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen name="Intro" component={Intro} options={{headerShown: false}} />
        <Screen name="Login" component={Login} options={{headerShown: false}} />
        <Screen name="Home" component={Home} options={{headerShown: false}} />
        <Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
