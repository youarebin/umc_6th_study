import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { getImageUrl } from '../TMDB_api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoadingSpinner from '../components/isLoading';

const Wrapper = styled.div`
background-color: #1f2141; 
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 40px;
  padding-bottom: 30px;

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

  const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  h3{
    cursor: pointer;
    margin: 0px 50px;
    color: white;
  }
  `;

  const fetchData = async (currentPage) => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: { language: 'ko-KR', page: currentPage },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGYyNzg0NTBhNzE2NTk4YmZhYzMxM2QyZWZlYjBiZSIsInN1YiI6IjY2MzBlNTMxOTY2MWZjMDEyZDY1NmYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OiUp_MvuhUaJQ0UPTFrFCzk_IFnlUIo03QryWkRooMI'
      }
    };

    const response = await axios.request(options);
    return response.data.results;
  };

const PopularPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const{
    isLoading,
    data,
  } = useQuery({
    queryKey: ['movies', currentPage],
    queryFn: () => fetchData(currentPage),
    keepPreviousData: true
  });

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if(currentPage > 1){
          setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <>
      {/*{isLoading ? ( <LoadingSpinner/> ) : ( <Layout Movies={Movies}/> )}*/}
      {isLoading ? (<LoadingSpinner/>) : (
        <Wrapper>
          <ContentWrapper className='container'>
          {data?.map(movie =>(
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
        </ContentWrapper>

        <Page>
          <h3 onClick={handlePrevPage}>{"<"}</h3>
          <h3>{currentPage}</h3>
          <h3 onClick={handleNextPage}>{">"}</h3>
        </Page>
    </Wrapper>
      )}
    </>
  );
};

export default PopularPage;