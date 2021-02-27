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
  InputsContainerPassword,
  InputField,
  InputIcon,
  LoginButton,
  LoginButtonText,
  RegisterSection,
  RegisterText,
  RegisterTextLink,
} from './styles';
import logoImg from '../assets/images/logo.png';
import registerVectorImg from '../assets/images/register_vector.png';

const Register = () => {
  return (
    <Container>
      <LogoImgContainer>
        <LogoImg source={logoImg} />
      </LogoImgContainer>
      <ImgVectorContainer>
        <ImgVector source={registerVectorImg} />
      </ImgVectorContainer>
      <LoginText>Registrar</LoginText>
      <InputsContainer>
        <InputIcon name="envelope" size={24} color="#2eae99" />
        <InputField placeholder="Seu e-mail" />
        <InputIcon name="check-circle" size={24} color="#BBBBBB" />
      </InputsContainer>
      <Line />
      <InputsContainerPassword>
        <InputIcon name="unlock-alt" size={24} color="#2eae99" />
        <InputField secureTextEntry={true} placeholder="Sua senha" />
        <InputIcon name="eye-slash" size={24} color="#BBBBBB" />
      </InputsContainerPassword>
      <Line />
      <InputsContainerPassword>
        <InputIcon name="unlock-alt" size={24} color="#2eae99" />
        <InputField secureTextEntry={true} placeholder="Confirme a senha" />
        <InputIcon name="check" size={24} color="#BBBBBB" />
      </InputsContainerPassword>
      <Line />

      <LoginButton>
        <LoginButtonText>REGISTRAR</LoginButtonText>
      </LoginButton>

      <RegisterSection>
        <RegisterText>Já é registrado?</RegisterText>
        <RegisterTextLink to="/Login">Entrar</RegisterTextLink>
      </RegisterSection>
    </Container>
  );
};

export default Register;
