import React from 'react';
import FAQ from './components/FAQ';
import MovieList from './components/MovieList';
import './index.css';

function App() {
  return (
    <div className="app">
      <h1 className="title">FlickFinder</h1>
      <MovieList />
      <FAQ />
      <footer>
        <p>&copy; FlickFinder 2025 | Developed by You</p>
      </footer>
    </div>
  );
}

export default App;
