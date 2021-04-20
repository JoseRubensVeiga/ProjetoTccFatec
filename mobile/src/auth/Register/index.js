import React, {useState} from 'react';

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
import logoImg from '../../assets/images/logo.png';
import registerVectorImg from '../../assets/images/register_vector.png';
import {ViewContainer} from '../../@utils/ViewContainer';

import {Alert} from 'react-native';

import authService from '../../services/auth.service';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  async function handleRegisterButton() {
    const body = {name, email, password};

    await authService.createUser(body);
    Alert.alert('Sucesso!', 'Usuário foi criado.');
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
      <LoginText>Registrar</LoginText>
      <InputsContainer>
        <InputIcon name="envelope" size={24} color="#2eae99" />
        <InputField placeholder="Seu Nome" onChangeText={(e) => setName(e)} />
        <InputIcon name="check-circle" size={24} color="#BBBBBB" />
      </InputsContainer>
      <Line />
      <InputsContainer>
        <InputIcon name="envelope" size={24} color="#2eae99" />
        <InputField
          placeholder="Seu e-mail"
          onChangeText={(e) => setEmail(e)}
        />
        <InputIcon name="check-circle" size={24} color="#BBBBBB" />
      </InputsContainer>
      <Line />
      <InputsContainerPassword>
        <InputIcon name="unlock-alt" size={24} color="#2eae99" />
        <InputField
          secureTextEntry={true}
          placeholder="Sua senha"
          onChangeText={(e) => setPassword(e)}
        />
        <InputIcon name="eye-slash" size={24} color="#BBBBBB" />
      </InputsContainerPassword>
      <Line />
      <InputsContainerPassword>
        <InputIcon name="unlock-alt" size={24} color="#2eae99" />
        <InputField
          secureTextEntry={true}
          placeholder="Confirme a senha"
          onChangeText={(e) => setPasswordConfirmation(e)}
        />
        <InputIcon name="check" size={24} color="#BBBBBB" />
      </InputsContainerPassword>
      <Line />

      <LoginButton
        onPress={handleRegisterButton}
        disabled={!password || password !== passwordConfirmation}>
        <LoginButtonText>REGISTRAR</LoginButtonText>
      </LoginButton>

      <RegisterSection>
        <RegisterText>Já é registrado?</RegisterText>
        <RegisterTextLink to="/Login">Entrar</RegisterTextLink>
      </RegisterSection>
    </ViewContainer>
  );
};

export default Register;
