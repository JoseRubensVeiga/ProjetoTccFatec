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

export const ResultTextContainer = styled.View`
  margin: 10px 30px 30px;
`;

export const ResultText = styled.Text`
  font-size: 22px;
  color: #686868;
`;

export const TitleText = styled.Text`
  padding: 30px 30px 0;
  font-size: 25px;
  font-weight: bold;
  color: #686868;
`;
