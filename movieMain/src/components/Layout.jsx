import React from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../TMDB_api";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #171a32; 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const MovieContent = styled.div`
  background-color: #383a69;
  color: white;
  border-radius: 10px 10px;
  img {
    width: 100%; 
    border-radius: 10px 10px 0 0;
  }
`;

const Explain = styled.div`
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    padding: 20px;
  `;

const Layout = ({Movies}) =>{
    const navigate = useNavigate();

    return(
        <Wrapper className='container'>
        {Movies.map(movie =>(
          <MovieContent 
            key={movie.id} 
            className='movieContainer'
            onClick={()=>/*click시 state정보 넘겨줌*/
              navigate(`/MovieDetailPage/${movie.id}`,{
                state:{
                  original_title: movie.original_title,
                  backdrop_path: movie.backdrop_path,
                  poster_path: movie.poster_path,
                  vote_average: movie.vote_average,
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
}

export default Layout;