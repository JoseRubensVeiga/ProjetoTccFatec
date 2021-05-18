import React, {useState, useEffect} from 'react';

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
import {Alert} from '../../@components/Alert';

import {validateEmail} from '../../@utils/validators';
import authService from '../../services/auth.service';

const Login = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('jose.rubens.veiga@gmail.com');
  const [password, setPassword] = useState('123456');
  const [isEmailValid, setIsEmailValid] = useState(false);

  function handleEyeTap() {
    setSecureTextEntry(!secureTextEntry);
  }

  async function handleLoginButton() {
    try {
      const response = await authService.attempt({email, password});
      console.log(response);
      navigation.navigate('Home');
    } catch (e) {}
  }

  function handleEmailChange(emailText) {
    setIsEmailValid(validateEmail(emailText));
    setEmail(emailText);
  }

  function handlePasswordChange(passwordText) {
    setPassword(passwordText);
  }

  return (
    <ViewContainer>
      <Alert />
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
          value={email}
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
          value={password}
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
