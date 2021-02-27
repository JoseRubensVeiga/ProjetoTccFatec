import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Intro from './Intro';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgotPassword from './auth/ForgotPassword';
import RecoveryPassword from './auth/RecoveryPassword';
import Home from './Home';

const {Screen, Navigator} = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen name="Intro" component={Intro} options={screenOpts} />
        <Screen name="Login" component={Login} options={screenOpts} />
        <Screen name="Home" component={Home} options={screenOpts} />
        <Screen name="Register" component={Register} options={screenOpts} />
        <Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={screenOpts}
        />
        <Screen
          name="RecoveryPassword"
          component={RecoveryPassword}
          options={screenOpts}
        />
      </Navigator>
    </NavigationContainer>
  );
};

const screenOpts = {headerShown: false};

export default Routes;
