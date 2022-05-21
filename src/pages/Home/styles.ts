import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  height: 100%;
  flex: auto;
  resize: cover;
`;

export const TopView = styled.View`
  display: flex;
  position: absolute;
  top: 5%;

  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 99;
`;

export const TouchableText = styled.Text`
  padding: 10px;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

export const Divisor = styled.Text`
  padding: 5px;
  color: 'rgba(255, 255, 255, 0.2);';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

export const ActionButtons = styled.View`
  display: flex;
  background: transparent !important;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  max-width: 100px;
  right: 10px;
  max-height: 100%;
  height: 100%;
  border: 1px solid red;
`;

export const ActionButton = styled.TouchableOpacity`
  background: transparent !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Counters = styled.Text`
  margin-top: 10px;
  text-align: center;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
`;

export const PlayerView = styled.View`
  height: 100px;
  color: blue;
  position: absolute;
  max-width: 80%;
  display: flex;
  bottom: 0;
  margin-bottom: 20px;
  right: 0;
  left: 0;
  margin-left: 10px;
  /* border: 1px solid green; */
`;

export const IconImage = styled.Image`
  border-radius: 50px;
`;

export const ArtistName = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;
