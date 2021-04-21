import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SearchInputContainer = styled.View`
  border: 1px solid #c0c0c0;
  border-radius: 8px;

  margin: 30px;
  flex-direction: row;
  justify-content: center;
`;

export const SearchInput = styled.TextInput`
  width: 280px;
`;

export const InputIcon = styled(Icon)`
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  width: 27px;
`;

export const CategoryContainer = styled.ScrollView`
  padding: 0 30px;
`;
export const CategoryItemContainerButton = styled.TouchableWithoutFeedback`
  flex-direction: row;
  align-items: center;
`;
export const CategoryItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const CategoryIcon = styled(Icon)`
  font-size: 20px;
  width: 27px;
`;
export const CategoryText = styled.Text``;
