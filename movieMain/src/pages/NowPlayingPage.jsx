import React, { useState, useEffect } from 'react';
import { moviesApi,getImageUrl } from "../TMDB_api";

const NowPlayingPage = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  
    useEffect(() => {
      const fetchNowPlayingMovies = async () => {
        try {
          // moviesApi의 nowPlaying 메서드를 호출하여 현재 상영 중인 영화 목록을 가져옵니다.
          const response = await moviesApi.nowPlaying();
          // 가져온 영화 목록을 상태에 저장합니다.
          setNowPlayingMovies(response.data.results);
        } catch (error) {
          console.error('Error fetching now playing movies: ', error);
        }
      };
  
      fetchNowPlayingMovies();
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행되도록 빈 배열을 useEffect의 두 번째 인수로 전달합니다.
  
    return (
        <div className='container'>
        {nowPlayingMovies.map(movie =>(
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

export default NowPlayingPage;