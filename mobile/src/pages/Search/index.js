import React from 'react';
import {View} from 'react-native';
import {
  SearchInputContainer,
  SearchInput,
  InputIcon,
  CategoryContainer,
  CategoryItemContainerButton,
  CategoryItemContainer,
  CategoryIcon,
  CategoryText,
} from './styles';

const Search = ({navigation}) => {
  function handleSearch() {
    navigation.navigate('ErroPesquisa');
  }

  function goToCourse() {
    navigation.navigate('Course');
  }

  return (
    <View>
      <SearchInputContainer>
        <SearchInput placeholder="Digite o nome do curso..." />
        <InputIcon
          name="search"
          size={24}
          color="#000"
          onPress={handleSearch}
        />
      </SearchInputContainer>

      <CategoryContainer>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="apple" size={24} color="#000" />
            <CategoryText>Curso de Design Gráfico</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="archive" size={24} color="#000" />
            <CategoryText>FullStack</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="beer" size={24} color="#000" />
            <CategoryText>Desenvolvimento Front-end</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="black-tie" size={24} color="#000" />
            <CategoryText>Desenvolvimento Desktop</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="book" size={24} color="#000" />
            <CategoryText>Desenvolvimento Back-end</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="briefcase" size={24} color="#000" />
            <CategoryText>Desenvolvimento web</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="bus" size={24} color="#000" />
            <CategoryText>Infraestrutura</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="apple" size={24} color="#000" />
            <CategoryText>Curso de Design Gráfico</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="archive" size={24} color="#000" />
            <CategoryText>FullStack</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="beer" size={24} color="#000" />
            <CategoryText>Desenvolvimento Front-end</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="black-tie" size={24} color="#000" />
            <CategoryText>Desenvolvimento Desktop</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="book" size={24} color="#000" />
            <CategoryText>Desenvolvimento Back-end</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="briefcase" size={24} color="#000" />
            <CategoryText>Desenvolvimento web</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="bus" size={24} color="#000" />
            <CategoryText>Infraestrutura</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="apple" size={24} color="#000" />
            <CategoryText>Curso de Design Gráfico</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="archive" size={24} color="#000" />
            <CategoryText>FullStack</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="beer" size={24} color="#000" />
            <CategoryText>Desenvolvimento Front-end</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="black-tie" size={24} color="#000" />
            <CategoryText>Desenvolvimento Desktop</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="book" size={24} color="#000" />
            <CategoryText>Desenvolvimento Back-end</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="briefcase" size={24} color="#000" />
            <CategoryText>Desenvolvimento web</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
        <CategoryItemContainerButton onPress={goToCourse}>
          <CategoryItemContainer>
            <CategoryIcon name="bus" size={24} color="#000" />
            <CategoryText>Infraestrutura</CategoryText>
          </CategoryItemContainer>
        </CategoryItemContainerButton>
      </CategoryContainer>
    </View>
  );
};

export default Search;
