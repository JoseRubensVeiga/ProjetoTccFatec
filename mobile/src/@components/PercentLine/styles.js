import styled from 'styled-components/native';

export const Line = styled.View`
  width: ${(props) => props.width}%;
  border-top-width: 5px;
  border-top-color: green;
  margin-top: 5px;
`;

export const PercentText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
