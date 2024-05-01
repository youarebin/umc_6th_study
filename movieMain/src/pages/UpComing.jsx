import React, { useState, useEffect } from 'react';
import { moviesApi, getImageUrl } from "../TMDB_api"; // api.js 파일의 moviesApi와 getImageUrl 함수를 import

const UpComing = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await moviesApi.upcoming();
        setUpcomingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching upcoming movies: ', error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <div className='container'>
      {upcomingMovies.map(movie => (
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

export default UpComing;