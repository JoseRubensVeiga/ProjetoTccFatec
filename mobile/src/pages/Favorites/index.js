import React from 'react';
import {Text} from 'react-native';

import {Container} from './styles';
import Header from '../../@components/Header';

const Favorites = () => {
  return (
    <Container>
      <Header />
      <Text>Favorites</Text>
    </Container>
  );
};

export default Favorites;
