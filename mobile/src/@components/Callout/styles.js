import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #2eae99;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  height: 80px;
`;

export const CalloutText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const CalloutButton = styled.TouchableOpacity`
  background-color: #000;

  height: 30px;
  width: 80px;
  padding-top: 4px;

  align-items: center;
  border-radius: 55px;
`;

export const CalloutButtonText = styled.Text`
  color: white;
`;
