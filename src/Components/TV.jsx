
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MovieContainer,
  PosterImage,
  HideBanner,
  BannerSection,
  Text,
} from './Movie.style';

export const TV = ({ data }) => {
  const PosterUrl = `https://image.tmdb.org/t/p/w1280/${data.poster_path}`;
  const [isHovered, setHovered] = useState(false);

  const handleMouseHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <MovieContainer>
      <PosterImage src={PosterUrl} alt={data.name} />

      <HideBanner ishovered={isHovered} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}>
        <Text>{data.name}</Text>
        <Text>{data.overview}</Text>
      </HideBanner>

      <BannerSection>
        <Text>{data.name}</Text>
        <Text>{data.vote_average}</Text>
      </BannerSection>
    </MovieContainer>
  );
}


TV.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
