import React, { useState, useEffect } from 'react';
import { moviesApi, getImageUrl } from "../TMDB_api"; 

const TopRatedPage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await moviesApi.topRated();
        setTopRatedMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching top rated movies: ', error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div className='container'>
      {topRatedMovies.map(movie => (
        <div key={movie.id} className='movieContainer'>                       
          <img 
            src={getImageUrl(movie.backdrop_path)} 
            alt={movie.title}
          />
          <div className='overview'>
            <p id='overViewTitle'>{movie.title}</p>
            <p id='overViewExplain'>{movie.overview}</p>
          </div>

          <div className='explain'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <span>{movie.title}</span>
            <span>{movie.vote_average}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRatedPage;