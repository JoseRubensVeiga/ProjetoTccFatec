import React, {useState} from 'react';

import {SafeAreaView, ScrollView, View, Dimensions} from 'react-native';

import {
  Container,
  TitleIntroText,
  ContentIntroText,
  SkipTextContainer,
  SkipText,
  DotStepsContainer,
  DotStep,
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
              <TitleIntroText>BEM VINDO AO DECODE</TitleIntroText>
              <ContentIntroText>
                Somos uma plataforma de cursos on-line voltada para a área de
                programação. Navegue pelos cursos e conheça novas técnicas e
                linguagens. Aprenda e compartilhe seu conhecimento!
              </ContentIntroText>
            </View>
            <View style={{width, height}}>
              <TitleIntroText>BEM VINDO AO DECODE</TitleIntroText>
              <ContentIntroText>
                Somos uma plataforma de cursos on-line voltada para a área de
                programação. Navegue pelos cursos e conheça novas técnicas e
                linguagens. Aprenda e compartilhe seu conhecimento!
              </ContentIntroText>
            </View>
            <View style={{width}}>
              <TitleIntroText>BEM VINDO AO DECODE</TitleIntroText>
              <ContentIntroText>
                Somos uma plataforma de cursos on-line voltada para a área de
                programação. Navegue pelos cursos e conheça novas técnicas e
                linguagens. Aprenda e compartilhe seu conhecimento!
              </ContentIntroText>
            </View>
          </ScrollView>
          <DotStepsContainer>
            {Array.from(Array(3).keys()).map((key, index) => (
              <DotStep key={index} active={pageIndex === index} />
            ))}
          </DotStepsContainer>
          <SkipTextContainer>
            <SkipText onPress={() => navigation.navigate('Details')}>
              Pular
            </SkipText>
          </SkipTextContainer>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default Intro;
