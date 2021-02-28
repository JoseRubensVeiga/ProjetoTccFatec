import React, {useState} from 'react';

import {SafeAreaView, ScrollView, View, Dimensions, Text} from 'react-native';

import {
  Container,
  TitleIntroText,
  ContentIntroText,
  SkipTextContainer,
  SkipText,
  DotStepsContainer,
  DotStep,
  LoginButton,
} from './styles';
import intro_bg from '../assets/images/intro_bg.jpg';

const Intro = ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  const [sliderState, setSliderState] = useState({currentPage: 0});

  const setSliderPage = (event) => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor((x + 1) / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
    console.log({width, x, indexOfNextScreen, currentPage});
  };

  const {currentPage: pageIndex} = sliderState;

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Container source={intro_bg}>
          <ScrollView
            style={{flex: 1}}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => {
              setSliderPage(e);
            }}>
            <View style={{width, height}}>
              <TitleIntroText>BEM VINDO À DCODE</TitleIntroText>
              <ContentIntroText>
                Somos uma plataforma de cursos on-line voltada para a área de
                programação. Navegue pelos cursos e conheça novas técnicas e
                linguagens. Aprenda e compartilhe seu conhecimento!
              </ContentIntroText>
            </View>
            <View style={{width, height}}>
              <TitleIntroText>APRENDA ONDE QUISER</TitleIntroText>
              <ContentIntroText>
                Com nossas funcionalidades, você como aluno, pode enviar trechos
                do seu código para ser avaliado, provas on-line com toda
                comodidade do Dcode, e muito mais!
              </ContentIntroText>
            </View>
            <View style={{width}}>
              <TitleIntroText>ENSINE COM QUALIDADE</TitleIntroText>
              <ContentIntroText>
                Para você que é (ou deseja ser) professor, nossa plataforma
                consegue englobar toda as nossas ferramentas que o ajudarão a
                trazer a melhor experiência para seus alunos!
              </ContentIntroText>
            </View>
          </ScrollView>
          <DotStepsContainer>
            {Array.from(Array(3).keys()).map((key, index) => (
              <DotStep key={index} active={pageIndex === index} />
            ))}
          </DotStepsContainer>
          <SkipTextContainer>
            {pageIndex !== 2 ? (
              <SkipText onPress={() => navigation.navigate('Login')}>
                Pular
              </SkipText>
            ) : (
              <LoginButton onPress={() => navigation.navigate('Login')}>
                <Text style={{color: 'white'}}>Entrar</Text>
              </LoginButton>
            )}
          </SkipTextContainer>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default Intro;
