import React from 'react';
import LottieView from 'lottie-react-native';

import backgroundImage from '../../assets/girl.jpg';
import {
  Container,
  TopView,
  TouchableText,
  Divisor,
  ActionButtons,
  ActionButton,
  IconImage,
  Counters,
  PlayerView,
  ArtistName,
} from './styles';
import {Text} from 'react-native';
interface HomeProps {
  children?: any;
}

export function Home({children}: HomeProps) {
  return (
    <>
      <Container source={backgroundImage} resizeMode="cover" />
      <TopView>
        <TouchableText>For You</TouchableText>
        <Divisor>|</Divisor>
        <TouchableText>Following</TouchableText>
      </TopView>
      <ActionButtons>
        <ActionButton>
          <IconImage source={require('../../assets/comments.jpg')} />
          <Counters>12k</Counters>
        </ActionButton>

        <ActionButton>
          <IconImage source={require('../../assets/like.jpg')} />
        </ActionButton>
        <ActionButton>
          <IconImage source={require('../../assets/share.jpg')} />
        </ActionButton>
      </ActionButtons>
      <PlayerView>
        <LottieView
          source={require('../../assets/lotties/equalizer.json')}
          autoPlay
          loop
        />
        <ArtistName>Cardi B - I'm On It (feat. Drake)</ArtistName>
      </PlayerView>
    </>
  );
}
