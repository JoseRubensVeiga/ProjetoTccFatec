import React, {useState} from 'react';

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
  ForgotPasswordLink,
  ForgotPasswordText,
  LoginButton,
  LoginButtonText,
  RegisterSection,
  RegisterText,
  RegisterTextLink,
} from './styles';
import logoImg from '../../assets/images/logo.png';
import loginVectorImg from '../../assets/images/login_vector.png';

import {ViewContainer} from '../../@utils/ViewContainer';
import {validateEmail} from '../../@utils/validators';

const Login = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);

  function handleEyeTap() {
    setSecureTextEntry(!secureTextEntry);
  }

  function handleLoginButton() {
    navigation.navigate('Home');
  }

  function handleEmailChange(emailText) {
    setIsEmailValid(validateEmail(emailText));
  }

  function handlePasswordChange(passwordText) {}

  return (
    <ViewContainer>
      <LogoImgContainer>
        <LogoImg source={logoImg} />
      </LogoImgContainer>
      <ImgVectorContainer>
        <ImgVector source={loginVectorImg} />
      </ImgVectorContainer>
      <LoginText>Entrar</LoginText>
      <InputsContainer>
        <InputIcon name="envelope" size={24} color="#2eae99" />
        <InputField
          placeholder="Seu e-mail"
          onChangeText={(e) => handleEmailChange(e)}
        />
        <InputIcon
          name="check-circle"
          size={24}
          color={isEmailValid ? '#2eae99' : '#BBBBBB'}
        />
      </InputsContainer>
      <Line />
      <InputsContainerPassword>
        <InputIcon name="unlock-alt" size={24} color="#2eae99" />
        <InputField
          secureTextEntry={secureTextEntry}
          placeholder="Sua senha"
          onChangeText={(e) => handlePasswordChange(e)}
        />
        <InputIcon
          name={secureTextEntry ? 'eye-slash' : 'eye'}
          size={24}
          color="#2eae99"
          onPress={handleEyeTap}
        />
      </InputsContainerPassword>
      <Line />
      <ForgotPasswordLink to="/ForgotPassword">
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPasswordLink>

      <LoginButton>
        <LoginButtonText onPress={handleLoginButton}>ENTRAR</LoginButtonText>
      </LoginButton>

      <RegisterSection>
        <RegisterText>Não é registrado?</RegisterText>
        <RegisterTextLink to="/Register">Inscrever-se</RegisterTextLink>
      </RegisterSection>
    </ViewContainer>
  );
};

export default Login;
