import React from 'react';
import {View} from 'react-native';
import {
  SearchInputContainer,
  SearchInput,
  InputIcon,
  CategoryContainer,
  CategoryItemContainer,
  CategoryIcon,
  CategoryText,
} from './styles';

const Search = ({navigation}) => {
  function handleSearch() {
    navigation.navigate('SucessoPesquisa');
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
        <CategoryItemContainer>
          <CategoryIcon name="apple" size={24} color="#000" />
          <CategoryText>Curso de Design Gráfico</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="archive" size={24} color="#000" />
          <CategoryText>FullStack</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="beer" size={24} color="#000" />
          <CategoryText>Desenvolvimento Front-end</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="black-tie" size={24} color="#000" />
          <CategoryText>Desenvolvimento Desktop</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="book" size={24} color="#000" />
          <CategoryText>Desenvolvimento Back-end</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="briefcase" size={24} color="#000" />
          <CategoryText>Desenvolvimento web</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="bus" size={24} color="#000" />
          <CategoryText>Infraestrutura</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="apple" size={24} color="#000" />
          <CategoryText>Curso de Design Gráfico</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="archive" size={24} color="#000" />
          <CategoryText>FullStack</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="beer" size={24} color="#000" />
          <CategoryText>Desenvolvimento Front-end</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="black-tie" size={24} color="#000" />
          <CategoryText>Desenvolvimento Desktop</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="book" size={24} color="#000" />
          <CategoryText>Desenvolvimento Back-end</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="briefcase" size={24} color="#000" />
          <CategoryText>Desenvolvimento web</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="bus" size={24} color="#000" />
          <CategoryText>Infraestrutura</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="apple" size={24} color="#000" />
          <CategoryText>Curso de Design Gráfico</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="archive" size={24} color="#000" />
          <CategoryText>FullStack</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="beer" size={24} color="#000" />
          <CategoryText>Desenvolvimento Front-end</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="black-tie" size={24} color="#000" />
          <CategoryText>Desenvolvimento Desktop</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="book" size={24} color="#000" />
          <CategoryText>Desenvolvimento Back-end</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="briefcase" size={24} color="#000" />
          <CategoryText>Desenvolvimento web</CategoryText>
        </CategoryItemContainer>
        <CategoryItemContainer>
          <CategoryIcon name="bus" size={24} color="#000" />
          <CategoryText>Infraestrutura</CategoryText>
        </CategoryItemContainer>
      </CategoryContainer>
    </View>
  );
};

export default Search;
