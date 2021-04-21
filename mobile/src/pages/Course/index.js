import React from 'react';
import {ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

import {
  VideoContainer,
  CourseTitleText,
  CategoryContainer,
  CategoryItemContainer,
  CategoryIcon,
  CategoryText,
  BackIcon,
} from './styles';

const Course = ({navigation}) => {
  function handleBackPress() {
    navigation.navigate('Home');
  }

  return (
    <>
      <BackIcon
        name="arrow-left"
        size={24}
        color="#000"
        onPress={handleBackPress}
      />
      <VideoContainer>
        <WebView
          source={{
            html: `
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/cqyziA30whE"
            frameborder="0"
            allow="autoplay;encrypted-media"
            allowfullscreen
          ></iframe>
        `,
          }}
          style={{marginTop: 20}}
        />
      </VideoContainer>
      <ScrollView>
        <CourseTitleText>JavaScript Moderno</CourseTitleText>
        <CategoryContainer>
          <CategoryItemContainer>
            <CategoryIcon name="apple" size={24} color="#000" />
            <CategoryText>Aula 01 - Introdução</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="archive" size={24} color="#000" />
            <CategoryText>Aula 02 - Conceitos básicos</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="beer" size={24} color="#000" />
            <CategoryText>Aula 03 - Variáveis e constantes</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="apple" size={24} color="#000" />
            <CategoryText>Aula 04 - Operações Aritméticas</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="archive" size={24} color="#000" />
            <CategoryText>Aula 05 - Manipulando o DOM</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="beer" size={24} color="#000" />
            <CategoryText>Aula 06 - Criando funções</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="apple" size={24} color="#000" />
            <CategoryText>Aula 07 - Calculando Média dos alunos</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="archive" size={24} color="#000" />
            <CategoryText>Aula 08 - Calculo IMC</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="beer" size={24} color="#000" />
            <CategoryText>Aula 09 - Atividades 01</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="apple" size={24} color="#000" />
            <CategoryText>Aula 10 - Prova 01</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="archive" size={24} color="#000" />
            <CategoryText>Aula 11 - Fixação de conceito</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="beer" size={24} color="#000" />
            <CategoryText>Aula 12 - Atividades 02</CategoryText>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <CategoryIcon name="apple" size={24} color="#000" />
            <CategoryText>Aula 13 - Prova 02</CategoryText>
          </CategoryItemContainer>
        </CategoryContainer>
      </ScrollView>
    </>
  );
};

export default Course;
