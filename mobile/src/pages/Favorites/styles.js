import styled from 'styled-components/native';
import {Chip as PaperChip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ChipsContainer = styled.View`
  padding-top: 5px;
`;

export const Chip = styled(PaperChip)`
  background-color: #d4ffd0;
  margin: 4px 6px;
  padding: 1px 5px;
`;

export const VideoContainer = styled.View`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
`;

export const VideoImage = styled.Image`
  width: 300px;
  height: 160px;

  width: 100%;
`;

export const VideoTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const HeartIcon = styled(Icon)`
  color: red;
  position: absolute;
  right: 10px;
  bottom: 0;
  font-size: 30px;
  margin-bottom: 40px;
`;
