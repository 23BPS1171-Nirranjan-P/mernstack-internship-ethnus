import React, { useState } from 'react';
import MovieCard from './MovieCard';

const dummyMovies = [
  { title: 'The Latest in Vampires', year: 1916, type: 'movie' },
  { title: 'The Latest in Pants', year: 1920, type: 'movie' },
  { title: 'Latest Line of Fall', year: 2016, type: 'series' }
];

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = dummyMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movies">
      <h2>Movie List</h2>
      <input
        type="text"
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="movie-grid">
        {filtered.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
