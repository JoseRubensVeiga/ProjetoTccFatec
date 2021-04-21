import React from 'react';

import {Container, HeaderTitleText, HeaderText} from './styles';

const Header = ({title, text}) => {
  return (
    <Container>
      <HeaderTitleText>{title || 'Bem vindo, Roger'}</HeaderTitleText>
      <HeaderText>
        {text || 'Aprenda, divirta-se e melhore suas habilidades.'}
      </HeaderText>
    </Container>
  );
};

export default Header;
