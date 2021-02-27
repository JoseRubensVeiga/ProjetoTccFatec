import React from 'react';

import {
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
import logoImg from '../../assets/images/logo.png';
import registerVectorImg from '../../assets/images/register_vector.png';

import {ViewContainer} from '../../@utils/ViewContainer';

const Register = ({navigation}) => {
  function handleSendEmail() {
    navigation.navigate('Login');
  }

  return (
    <ViewContainer>
      <LogoImgContainer>
        <LogoImg source={logoImg} />
      </LogoImgContainer>
      <ImgVectorContainer>
        <ImgVector source={registerVectorImg} />
      </ImgVectorContainer>
      <LoginText>Nova senha</LoginText>
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
        <LoginButtonText onPress={handleSendEmail}>
          SALVAR NOVA SENHA
        </LoginButtonText>
      </LoginButton>

      <RegisterSection>
        <RegisterText>Já é registrado?</RegisterText>
        <RegisterTextLink to="/Login">Entrar</RegisterTextLink>
      </RegisterSection>
    </ViewContainer>
  );
};

export default Register;
