// Movie.js
import React, { useState } from 'react';
import {
  MovieContainer,
  PosterImage,
  HideBanner,
  BannerSection,
  Text,
} from './Movie.style'

const Movie = ({ data }) => {
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
};

export default Movie;
