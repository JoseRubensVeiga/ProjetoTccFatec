import React from 'react';

import {
  Container,
  CalloutText,
  CalloutButton,
  CalloutButtonText,
} from './styles';

const Callout = () => {
  return (
    <Container>
      <CalloutText>CURSO FULLSTACK</CalloutText>
      <CalloutButton>
        <CalloutButtonText>Acessar</CalloutButtonText>
      </CalloutButton>
    </Container>
  );
};

export default Callout;
