import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from '@react-navigation/native';

export const LogoImgContainer = styled.View`
  padding: 20px;
`;

export const LogoImg = styled.Image`
  height: 30px;
  width: 114px;
`;
export const ImgVectorContainer = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const ImgVector = styled.Image`
  width: 250px;
  height: 215px;
`;

export const LoginText = styled.Text`
  color: #36ab98;
  font-family: 'Lato Regular';
  font-size: 30px;
  text-align: center;
  margin-top: 15px;
`;

export const InputsContainer = styled.View`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 10px;
  flex-direction: row;
`;

export const InputsContainerPassword = styled.View`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 10px;
  flex-direction: row;
`;

export const Line = styled.View`
  height: 1px;
  background-color: #2eae99;
  margin-left: 60px;
  margin-right: 60px;
`;

export const InputIcon = styled(Icon)`
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  width: 27px;
`;

export const InputField = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  font-size: 15px;
  margin-top: 5px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #5bb6a7;
  width: 170px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 25px;
`;

export const LoginButtonText = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 15px;
`;

export const RegisterSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const RegisterText = styled.Text`
  color: #696969;
  font-size: 15px;
`;

export const RegisterTextLink = styled(Link)`
  margin-left: 10px;
  font-weight: bold;
  text-decoration: underline;
  color: #005c4d;
  font-size: 15px;
`;

export const InstructionsText = styled.Text`
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 30px;
  color: #393939;
`;

export const CodeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

export const CodeInput = styled.TextInput`
  margin: 0 5px;

  width: 50px;
  border-radius: 8px;
  border: 2px solid gray;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: black;

  ${(props) =>
    props.activated &&
    css`
      color: white;
      border: 0;
      background-color: blue;
    `}
`;
