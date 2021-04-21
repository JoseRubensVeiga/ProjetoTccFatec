import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const VideoContainer = styled.View`
  height: 200px;
`;

export const CourseTitleText = styled.Text`
  padding: 10px 30px 30px;
  font-size: 20px;
  font-weight: bold;
`;

export const CategoryContainer = styled.View`
  padding: 0 30px;
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

export const BackIcon = styled(Icon)`
  width: 27px;
  height: 27px;

  margin-top: 30px;
  margin-left: 20px;

  z-index: 9999;
`;

export const CategoryText = styled.Text``;
