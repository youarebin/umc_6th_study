import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { moviesApi,getImageUrl } from "../TMDB_api";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #1f2141; 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 40px;
`;

const MovieContent = styled.div`
  background-color: #383a69;
  color: white;

  img {
    width: 100%; 
    border-radius: 10px 10px 0 0; /* 위쪽 테두리만 둥글게 */
  }
`;

const Explain = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-bottom: 60px;
  `;

const PopularPage = () => {
  const [Movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await moviesApi.popular();
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies: ', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Wrapper className='container'>
        {Movies.map(movie =>(
          <MovieContent 
            key={movie.id} 
            className='movieContainer'
            onClick={()=>/*click시 state정보 넘겨줌*/
              navigate(`/MovieDetailPage/${movie.title}`,{
                state:{
                  movieTitle: movie.title,
                  backdrop_path: movie.backdrop_path,
                  poster_path: movie.poster_path,
                  rate: movie.rate,
                  release_date: movie.release_date,
                  overview: movie.overview,
                },
              })
            }>    

            <img 
               src={getImageUrl(movie.poster_path)} 
              alt={movie.title}
            />
  
            <Explain>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
              <span>{movie.title}</span>
              <span>{movie.vote_average}</span>
            </Explain>
          </MovieContent>
        ))}
      </Wrapper>
  );
};

export default PopularPage;