import React from 'react';
import {ScrollView} from 'react-native';

import CourseList from '../../@components/CourseList';

import {
  SearchInputContainer,
  SearchInput,
  InputIcon,
  ResultTextContainer,
  ResultText,
  TitleText,
} from './styles';

const SearchError = ({navigation}) => {
  function handleSearch() {
    navigation.navigate('SucessoPesquisa');
  }

  function goToCourse() {
    navigation.navigate('Course');
  }

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
      <ResultTextContainer>
        <ResultText>Nenhum curso encontrado.</ResultText>
      </ResultTextContainer>

      <TitleText>Talvez você goste desses cursos...</TitleText>
      <CourseList goToCourse={goToCourse} />

      <TitleText>Cursos rápidos</TitleText>
      <CourseList goToCourse={goToCourse} />
    </ScrollView>
  );
};

export default SearchError;
