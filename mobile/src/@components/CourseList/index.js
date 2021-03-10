import React from 'react';

import image from '../../assets/images/videos/video_01.jpg';

import {Container, VideoImage, VideoContainer, VideoTitle} from './styles';

const CourseList = () => {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <VideoContainer>
        <VideoImage source={image} />
        <VideoTitle>Iniciando JavaScript</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image} />
        <VideoTitle>Iniciando JavaScript</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image} />
        <VideoTitle>Iniciando JavaScript</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image} />
        <VideoTitle>Iniciando JavaScript</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image} />
        <VideoTitle>Iniciando JavaScript</VideoTitle>
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image} />
        <VideoTitle>Iniciando JavaScript</VideoTitle>
      </VideoContainer>
    </Container>
  );
};

export default CourseList;
