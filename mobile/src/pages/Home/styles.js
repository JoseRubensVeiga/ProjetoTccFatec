import styled from 'styled-components/native';
import {Chip as PaperChip} from 'react-native-paper';

export const Container = styled.View`
  width: 100%;
`;

export const ChipsContainer = styled.View`
  padding-top: 5px;
`;

export const Chip = styled(PaperChip)`
  background-color: #d4ffd0;
  margin: 4px 6px;
  padding: 1px 5px;
`;
