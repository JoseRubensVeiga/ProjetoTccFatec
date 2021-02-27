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
  InputField,
  InputIcon,
  LoginButton,
  LoginButtonText,
  RegisterSection,
  RegisterText,
  RegisterTextLink,
  InstructionsText,
} from './styles';
import logoImg from '../../assets/images/logo.png';
import registerVectorImg from '../../assets/images/register_vector.png';

import {ViewContainer} from '../../@utils/ViewContainer';

const Register = () => {
  return (
    <ViewContainer>
      <LogoImgContainer>
        <LogoImg source={logoImg} />
      </LogoImgContainer>
      <ImgVectorContainer>
        <ImgVector source={registerVectorImg} />
      </ImgVectorContainer>
      <LoginText>Esqueci minha senha</LoginText>
      <InputsContainer>
        <InputIcon name="envelope" size={24} color="#2eae99" />
        <InputField placeholder="Digite o e-mail usado" />
      </InputsContainer>
      <Line />

      <LoginButton>
        <LoginButtonText>ENVIAR E-MAIL</LoginButtonText>
      </LoginButton>

      <InstructionsText>
        Se o usuário estiver válido, será enviado um e-mail de recuperação para
        o e-mail cadastrado.
      </InstructionsText>

      <RegisterSection>
        <RegisterText>Já é registrado?</RegisterText>
        <RegisterTextLink to="/Login">Entrar</RegisterTextLink>
      </RegisterSection>
    </ViewContainer>
  );
};

export default Register;
