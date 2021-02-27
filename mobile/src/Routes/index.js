import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import Intro from './Intro';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgotPassword from './auth/ForgotPassword';
import RecoveryPassword from './auth/RecoveryPassword';
import Home from './Home';

const Stack = createBottomTabNavigator();
const StackRoutes = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Intro" component={Intro} options={screenOpts} />
    <Stack.Screen name="Login" component={Login} options={screenOpts} />
    <Stack.Screen name="Register" component={Register} options={screenOpts} />
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

const Tab = createBottomTabNavigator();

const TabRoutes = () => (
  <Tab.Navigator
    initialRouteName="Login"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, _, size}) => {
        let iconName;
        let color = focused ? '#2EAE99' : '#4B5C6B';

        if (route.name === 'Início') {
          iconName = 'home';
        } else if (route.name === 'Pesquisar') {
          iconName = 'search';
        } else if (route.name === 'Cursos') {
          iconName = 'play-circle';
        } else if (route.name === 'Lista') {
          iconName = 'heart';
        } else {
          iconName = 'user';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size + 5} color={color} />;
      },
      tabBarLabel: ({focused, _, position}) => {
        let color = focused ? '#2EAE99' : '#4B5C6B';

        return (
          <Text
            style={{
              paddingBottom: 5,
              fontSize: 12,
              color,
              borderBottomColor: focused ? '#2EAE99' : 'transparent',
              borderBottomWidth: 2,
              marginBottom: 4,
            }}>
            {route.name}
          </Text>
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {height: 70},
    }}>
    <Tab.Screen name="Stack" component={StackRoutes} />
    <Tab.Screen name="Início" component={Home} options={screenOpts} />
    <Tab.Screen name="Pesquisar" component={Home} options={screenOpts} />
    <Tab.Screen name="Cursos" component={Home} options={screenOpts} />
    <Tab.Screen name="Lista" component={Home} options={screenOpts} />
    <Tab.Screen name="Conta" component={Home} options={screenOpts} />
  </Tab.Navigator>
);

const Routes = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
};

const screenOpts = {headerShown: false};

export default Routes;
