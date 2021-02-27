import React from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../Home';

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

        return <Icon name={iconName} size={size + 5} color={color} />;
      },
      tabBarLabel: ({focused}) => {
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
      style: {height: 70},
    }}>
    <Tab.Screen name="Início" component={Home} />
    <Tab.Screen name="Pesquisar" component={Home} />
    <Tab.Screen name="Cursos" component={Home} />
    <Tab.Screen name="Lista" component={Home} />
    <Tab.Screen name="Conta" component={Home} />
  </Tab.Navigator>
);

export default TabRoutes;
