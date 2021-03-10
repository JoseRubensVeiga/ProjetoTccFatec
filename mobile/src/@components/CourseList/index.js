import React from 'react';

import image1 from '../../assets/images/videos/video_01.jpg';
import image2 from '../../assets/images/videos/video_02.png';
import image3 from '../../assets/images/videos/video_03.jpg';

import {Container, VideoImage, VideoContainer, VideoTitle} from './styles';

const CourseList = () => {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <VideoContainer>
        <VideoImage source={image1} />
        <VideoTitle>Iniciando JavaScript</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image2} />
        <VideoTitle>Matemática na programação</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image3} />
        <VideoTitle>Dicas de PHP</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image1} />
        <VideoTitle>Iniciando JavaScript</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image2} />
        <VideoTitle>Matemática na programação</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image3} />
        <VideoTitle>Dicas de PHP</VideoTitle>
      </VideoContainer>
    </Container>
  );
};

export default CourseList;
