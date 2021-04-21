import React from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../pages/Home';
import Search from '../pages/Search';
import SearchError from '../pages/SearchError';
import SearchSuccess from '../pages/SearchSuccess';
import Courses from '../pages/Courses';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const SearchTabRoutes = () => (
  <Tab.Navigator screenOptions={{tabBarVisible: false}}>
    <Tab.Screen name="Pesquisar" component={Search} />
    <Tab.Screen name="ErroPesquisa" component={SearchError} />
    <Tab.Screen name="SucessoPesquisa" component={SearchSuccess} />
  </Tab.Navigator>
);

const TabRoutes = () => (
  <Tab.Navigator
    initialRouteName="Login"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, _, size}) => {
        const icons = {
          Início: 'home',
          Pesquisar: 'search',
          Cursos: 'play-circle',
          Lista: 'heart',
          default: 'user',
        };

        const color = focused ? '#2EAE99' : '#4B5C6B';
        const iconName = icons[route.name] || icons.default;

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
    <Tab.Screen name="Pesquisar" component={SearchTabRoutes} />
    <Tab.Screen name="Cursos" component={Courses} />
    <Tab.Screen name="Lista" component={Favorites} />
    <Tab.Screen name="Conta" component={Profile} />
  </Tab.Navigator>
);

export default TabRoutes;
