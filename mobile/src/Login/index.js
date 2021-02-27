import React, {useState} from 'react';

import {
  KeyboardAvoidingView,
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
  ForgotPasswordText,
  LoginButton,
  LoginButtonText,
  RegisterSection,
  RegisterText,
  RegisterTextLink,
} from './styles';
import logoImg from '../assets/images/logo.png';
import loginVectorImg from '../assets/images/login_vector.png';

const Login = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  function handleEyeTap() {
    setSecureTextEntry(!secureTextEntry);
  }

  function handleLoginButton() {
    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView behavior="position">
      <LogoImgContainer>
        <LogoImg source={logoImg} />
      </LogoImgContainer>
      <ImgVectorContainer>
        <ImgVector source={loginVectorImg} />
      </ImgVectorContainer>
      <LoginText>Entrar</LoginText>
      <InputsContainer>
        <InputIcon name="envelope" size={24} color="#2eae99" />
        <InputField placeholder="Seu e-mail" />
        <InputIcon name="check-circle" size={24} color="#2eae99" />
      </InputsContainer>
      <Line />
      <InputsContainerPassword>
        <InputIcon name="unlock-alt" size={24} color="#2eae99" />
        <InputField secureTextEntry={secureTextEntry} placeholder="Sua senha" />
        <InputIcon
          name={secureTextEntry ? 'eye-slash' : 'eye'}
          size={24}
          color="#2eae99"
          onPress={handleEyeTap}
        />
      </InputsContainerPassword>
      <Line />
      <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>

      <LoginButton>
        <LoginButtonText onPress={handleLoginButton}>ENTRAR</LoginButtonText>
      </LoginButton>

      <RegisterSection>
        <RegisterText>Não é registrado?</RegisterText>
        <RegisterTextLink to="/Register">Inscrever-se</RegisterTextLink>
      </RegisterSection>
    </KeyboardAvoidingView>
  );
};

export default Login;
