import React, { useState, useEffect } from 'react';
import { movies } from './API';
import './App.css';
	
function App() {
  return (
    <div className="container">
      {movies.results.map(movie => (
        <div key={movie.id} className="movieContainer" >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="overview">
            <p id='overViewTitle'>{movie.title}</p>
            <p id='overViewExplain'>{movie.overview}</p>
          </div>
          <div className="explain">
            <span className="title">{movie.title}</span>
            <span className="rating">{movie.vote_average}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
