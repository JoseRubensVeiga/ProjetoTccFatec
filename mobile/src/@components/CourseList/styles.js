import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  max-height: 200px;
  min-height: 200px;

  margin-top: 30px;
`;

export const VideoImage = styled.Image`
  width: 300px;
  height: 160px;
`;

export const VideoContainerButton = styled.TouchableWithoutFeedback`
  margin-left: 15px;
  margin-right: 15px;
`;

export const VideoContainer = styled.View`
  margin-left: 15px;
  margin-right: 15px;
`;

export const VideoTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
