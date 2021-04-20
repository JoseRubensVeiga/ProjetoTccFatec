import React, {useState} from 'react';

import {
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

import authService from '../../services/auth.service';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  async function handleSendEmail() {
    navigation.navigate('RecoveryPasswordCode');
  }

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
        <InputField
          placeholder="Digite o e-mail usado"
          onChangeText={(e) => setEmail(e)}
        />
      </InputsContainer>
      <Line />

      <LoginButton>
        <LoginButtonText onPress={handleSendEmail}>
          ENVIAR E-MAIL
        </LoginButtonText>
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
