import React from 'react';
import {ScrollView} from 'react-native';

import CourseList from '../../@components/CourseList';

import {
  SearchInputContainer,
  SearchInput,
  InputIcon,
  TitleText,
} from './styles';

const SearchSuccess = ({navigation}) => {
  function goToCourse() {
    navigation.navigate('Course');
  }
  function handleSearch() {}
  return (
    <ScrollView>
      <SearchInputContainer>
        <SearchInput placeholder="Digite o nome do curso..." />
        <InputIcon
          name="search"
          size={24}
          color="#000"
          onPress={handleSearch}
        />
      </SearchInputContainer>

      <TitleText>Resultados</TitleText>
      <CourseList goToCourse={goToCourse} />

      <TitleText>Talvez você goste desses cursos...</TitleText>
      <CourseList goToCourse={goToCourse} />

      <TitleText>Cursos rápidos</TitleText>
      <CourseList goToCourse={goToCourse} />
    </ScrollView>
  );
};

export default SearchSuccess;
