import React from 'react';

import {
  Container,
  LogoImgContainer,
  LogoImg,
  ImgVectorContainer,
  ImgVector,
  LoginText,
  Line,
  InputsContainer,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoImg from '../assets/images/logo.png';
import loginVectorImg from '../assets/images/login_vector.png';

const Login = () => {
  return (
    <Container>
      <LogoImgContainer>
        <LogoImg source={logoImg} />
      </LogoImgContainer>
      <ImgVectorContainer>
        <ImgVector source={loginVectorImg} />
      </ImgVectorContainer>
      <LoginText>Entrar</LoginText>
      <InputsContainer>
        <Icon name="home" size={18} color="#999" />
        <Line />
      </InputsContainer>
    </Container>
  );
};

export default Login;
