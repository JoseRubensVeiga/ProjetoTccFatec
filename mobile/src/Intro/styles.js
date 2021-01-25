import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  padding-top: 140px;
`;

export const TitleIntroText = styled.Text`
  font-size: 40px;
  text-align: center;
  color: white;
  font-family: 'Lato-Bold';
`;

export const ContentIntroText = styled.Text`
  font-size: 17px;
  padding: 0 47px;
  margin-top: 30px;
  color: white;
  font-family: 'Lato-Regular';
`;

export const SkipTextContainer = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
`;

export const SkipText = styled.Text`
  color: white;
  font-size: 18px;
`;

export const DotStepsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const DotStep = styled.View`
  height: 10px;
  width: 10px;
  border-radius: ${10 / 2}px;
  background-color: #0898a0;
  margin-left: 10px;
  background-color: ${(p) => (p.active === true ? '#2E8173' : '#FFF')};
`;

export const LoginButton = styled.TouchableOpacity`
  width: 70px;
  height: 35px;

  justify-content: center;
  align-items: center;
  border-radius: 8px;

  background-color: darkgreen;
`;
