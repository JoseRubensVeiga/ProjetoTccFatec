import React from 'react';
import {ScrollView} from 'react-native';
import {ChipsContainer, Chip} from './styles';

import Header from '../../@components/Header';
import Callout from '../../@components/Callout';
import CourseList from '../../@components/CourseList';

const Home = ({navigation}) => {
  function goToCourse() {
    navigation.navigate('Course');
  }
  return (
    <ScrollView>
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
      <CourseList goToCourse={goToCourse} />
      <Callout />
      <CourseList goToCourse={goToCourse} />
      <CourseList goToCourse={goToCourse} />
    </ScrollView>
  );
};

export default Home;
