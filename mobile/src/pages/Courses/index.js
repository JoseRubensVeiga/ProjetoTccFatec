import React from 'react';
import {ScrollView} from 'react-native';
import {VideoImage, VideoContainer, VideoTitle} from './styles';
import Header from '../../@components/Header';
import PercentLine from '../../@components/PercentLine';

import image1 from '../../assets/images/videos/video_01.jpg';

const Courses = () => {
  return (
    <ScrollView>
      <Header
        title="Meus Cursos"
        text="Termine seus cursos e obtenha seu diploma."
      />
      <VideoContainer>
        <VideoImage source={image1} />
        <PercentLine percent={70} />
        <VideoTitle>Iniciando no JavaScript</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image1} />
        <PercentLine percent={100} />
        <VideoTitle>Back-end com .NET Core</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image1} />
        <PercentLine percent={20} />
        <VideoTitle>Front-end com Angular</VideoTitle>
      </VideoContainer>
    </ScrollView>
  );
};

export default Courses;
