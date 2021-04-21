import React from 'react';

import image1 from '../../assets/images/videos/video_01.jpg';
import image2 from '../../assets/images/videos/video_02.png';
import image3 from '../../assets/images/videos/video_03.jpg';

import {
  Container,
  VideoImage,
  VideoContainerButton,
  VideoContainer,
  VideoTitle,
} from './styles';

const CourseList = ({goToCourse}) => {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <VideoContainerButton onPress={goToCourse}>
        <VideoContainer>
          <VideoImage source={image1} />
          <VideoTitle>Iniciando JavaScript</VideoTitle>
        </VideoContainer>
      </VideoContainerButton>
      <VideoContainerButton onPress={goToCourse}>
        <VideoContainer>
          <VideoImage source={image2} />
          <VideoTitle>Matemática na programação</VideoTitle>
        </VideoContainer>
      </VideoContainerButton>
      <VideoContainerButton onPress={goToCourse}>
        <VideoContainer>
          <VideoImage source={image3} />
          <VideoTitle>Dicas de PHP</VideoTitle>
        </VideoContainer>
      </VideoContainerButton>
      <VideoContainerButton onPress={goToCourse}>
        <VideoContainer>
          <VideoImage source={image1} />
          <VideoTitle>Iniciando JavaScript</VideoTitle>
        </VideoContainer>
      </VideoContainerButton>
      <VideoContainerButton onPress={goToCourse}>
        <VideoContainer>
          <VideoImage source={image2} />
          <VideoTitle>Matemática na programação</VideoTitle>
        </VideoContainer>
      </VideoContainerButton>
      <VideoContainerButton onPress={goToCourse}>
        <VideoContainer>
          <VideoImage source={image3} />
          <VideoTitle>Dicas de PHP</VideoTitle>
        </VideoContainer>
      </VideoContainerButton>
    </Container>
  );
};

export default CourseList;
