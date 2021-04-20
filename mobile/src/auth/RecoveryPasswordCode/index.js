import React, {useState} from 'react';

import {
  LogoImgContainer,
  LogoImg,
  ImgVectorContainer,
  ImgVector,
  LoginText,
  LoginButton,
  LoginButtonText,
  InstructionsText,
  RegisterSection,
  RegisterText,
  RegisterTextLink,
  CodeContainer,
  CodeInput,
} from './styles';
import registerVectorImg from '../../assets/images/register_vector.png';
import logoImg from '../../assets/images/logo.png';

import {ViewContainer} from '../../@utils/ViewContainer';

const RecoveryPasswordCode = ({navigation}) => {
  const [activatedIndex, setActivatedIndex] = useState(0);

  function handleVerify() {
    navigation.navigate('RecoveryPassword');
  }

  return (
    <ViewContainer>
      <LogoImgContainer>
        <LogoImg source={logoImg} />
      </LogoImgContainer>
      <ImgVectorContainer>
        <ImgVector source={registerVectorImg} />
      </ImgVectorContainer>
      <LoginText>Código de verificação</LoginText>

      <CodeContainer>
        <CodeInput
          editable={activatedIndex >= 0}
          maxLength={1}
          onChange={() => setActivatedIndex(1)}
        />
        <CodeInput
          editable={activatedIndex >= 1}
          maxLength={1}
          onChangeText={() => setActivatedIndex(2)}
        />
        <CodeInput
          editable={activatedIndex >= 2}
          maxLength={1}
          onChangeText={() => setActivatedIndex(3)}
        />
        <CodeInput
          editable={activatedIndex >= 3}
          onChangeText={() => setActivatedIndex(4)}
          maxLength={1}
        />
        <CodeInput
          editable={activatedIndex >= 4}
          onChangeText={() => setActivatedIndex(4)}
          maxLength={1}
        />
      </CodeContainer>

      <LoginButton onPress={handleVerify}>
        <LoginButtonText>Verificar</LoginButtonText>
      </LoginButton>

      <InstructionsText>
        Se o código estiver válido, você poderá inserir a nova senha.
      </InstructionsText>

      <RegisterSection>
        <RegisterText>Já é registrado?</RegisterText>
        <RegisterTextLink to="/Login">Entrar</RegisterTextLink>
      </RegisterSection>
    </ViewContainer>
  );
};

export default RecoveryPasswordCode;
