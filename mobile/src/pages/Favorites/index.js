import React from 'react';
import {ScrollView} from 'react-native';

import {
  Container,
  ChipsContainer,
  Chip,
  VideoContainer,
  VideoImage,
  VideoTitle,
  HeartIcon,
} from './styles';
import Header from '../../@components/Header';

import image1 from '../../assets/images/videos/video_01.jpg';

const Favorites = () => {
  return (
    <ScrollView>
      <Header />
      <ChipsContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Chip>JavaScript</Chip>
          <Chip>PHP</Chip>
          <Chip>ReactJS</Chip>
          <Chip>JAVA</Chip>
          <Chip>Web development</Chip>
          <Chip>.NET</Chip>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Chip>Desktop development</Chip>
          <Chip>Angular</Chip>
          <Chip>Vue</Chip>
          <Chip>React Native</Chip>
          <Chip>ASP</Chip>
          <Chip>C#</Chip>
          <Chip>NodeJS</Chip>
          <Chip>Express</Chip>
        </ScrollView>
      </ChipsContainer>
      <VideoContainer>
        <VideoImage source={image1} />
        <VideoTitle>Back-end com .NET Core</VideoTitle>
        <HeartIcon name="heart" />
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image1} />
        <VideoTitle>Back-end com .NET Core</VideoTitle>
        <HeartIcon name="heart" />
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image1} />
        <VideoTitle>Back-end com .NET Core</VideoTitle>
        <HeartIcon name="heart" />
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image1} />
        <VideoTitle>Back-end com .NET Core</VideoTitle>
        <HeartIcon name="heart" />
      </VideoContainer>
      <VideoContainer>
        <VideoImage source={image1} />
        <VideoTitle>Back-end com .NET Core</VideoTitle>
        <HeartIcon name="heart" />
      </VideoContainer>
    </ScrollView>
  );
};

export default Favorites;
