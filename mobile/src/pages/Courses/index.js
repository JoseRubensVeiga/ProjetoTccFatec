import React from 'react';
import {Text} from 'react-native';

import {Container} from './styles';
import Header from '../../@components/Header';

const Courses = () => {
  return (
    <Container>
      <Header
        title="Meus Cursos"
        text="Termine seus cursos e obtenha seu diploma."
      />
      <Text>Courses</Text>
    </Container>
  );
};

export default Courses;
