import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="poster-placeholder">🎬</div>
      <h3>{movie.title}</h3>
      <p>Type: {movie.type}</p>
      <p>Release Year: {movie.year}</p>
    </div>
  );
};

export default MovieCard;
