// Movie.style.js
import styled from 'styled-components';

export const MovieContainer = styled.div`
  background-color: rgb(89, 59, 161);
  width: 10vw;
  position: relative;
  box-sizing: border-box;
`;

export const PosterImage = styled.img`
  width: 10vw;
`;

export const HideBanner = styled.section`
  color: white;
  background-color: ${props => (props.ishovered ? 'rgba(0, 0, 0, 0.5)' : 'none')};
  opacity: ${props => (props.ishovered ? '1' : '0')};
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  font-size: 0.5vw;
  padding: 1vh;
  box-sizing: border-box;
  overflow: hidden;
`;

export const BannerSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1vh;
`;

export const Text = styled.p`
  color: white;
`;
