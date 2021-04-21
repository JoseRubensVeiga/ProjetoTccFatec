import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Intro from '../Intro';
import Login from '../auth/Login';
import Register from '../auth/Register';
import ForgotPassword from '../auth/ForgotPassword';
import RecoveryPassword from '../auth/RecoveryPassword';
import RecoveryPasswordCode from '../auth/RecoveryPasswordCode';

import Course from '../pages/Course';

import TabRoutes from './tab.routes';

const Stack = createStackNavigator();
const screenOpts = {headerShown: false};

const StackRoutes = () => (
  <Stack.Navigator initialRouteName="Course">
    <Stack.Screen name="Home" component={TabRoutes} options={screenOpts} />
    <Stack.Screen name="Intro" component={Intro} options={screenOpts} />
    <Stack.Screen name="Login" component={Login} options={screenOpts} />
    <Stack.Screen name="Register" component={Register} options={screenOpts} />
    <Stack.Screen name="Course" component={Course} options={screenOpts} />
    <Stack.Screen
      name="RecoveryPasswordCode"
      component={RecoveryPasswordCode}
      options={screenOpts}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={screenOpts}
    />
    <Stack.Screen
      name="RecoveryPassword"
      component={RecoveryPassword}
      options={screenOpts}
    />
  </Stack.Navigator>
);

export default StackRoutes;
