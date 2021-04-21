import React from 'react';
import {ScrollView} from 'react-native';

import {Container, ChipsContainer, Chip} from './styles';
import Header from '../../@components/Header';

const Favorites = () => {
  return (
    <Container>
      <Header />
      <ChipsContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Chip>JavaScript</Chip>
          <Chip>PHP</Chip>
          <Chip>ReactJS</Chip>
          <Chip>JAVA</Chip>
          <Chip>Web development</Chip>
          <Chip>.NET</Chip>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Chip>Desktop development</Chip>
          <Chip>Angular</Chip>
          <Chip>Vue</Chip>
          <Chip>React Native</Chip>
          <Chip>ASP</Chip>
          <Chip>C#</Chip>
          <Chip>NodeJS</Chip>
          <Chip>Express</Chip>
        </ScrollView>
      </ChipsContainer>
    </Container>
  );
};

export default Favorites;
