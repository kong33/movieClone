
// Movie.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MovieContainer,
  PosterImage,
  HideBanner,
  BannerSection,
  Text,
} from './Movie.style';

export const Movie = ({ data }) => {
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
      <PosterImage src={PosterUrl} alt={data.title} />

      <HideBanner ishovered={isHovered} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}>
        <Text>{data.title}</Text>
        <Text>{data.overview}</Text>
      </HideBanner>

      <BannerSection>
        <Text>{data.title}</Text>
        <Text>{data.vote_average}</Text>
      </BannerSection>
    </MovieContainer>
  );
}


Movie.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
