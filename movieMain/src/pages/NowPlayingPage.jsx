import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getImageUrl } from "../TMDB_api";
import LoadingSpinner from '../components/isLoading';
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #1f2141; 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 40px;
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

const fetchData = async ({ pageParam = 1 }) => {//초기값 페이지 1로 설정
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: { language: 'ko-KR', page: pageParam },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGYyNzg0NTBhNzE2NTk4YmZhYzMxM2QyZWZlYjBiZSIsInN1YiI6IjY2MzBlNTMxOTY2MWZjMDEyZDY1NmYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OiUp_MvuhUaJQ0UPTFrFCzk_IFnlUIo03QryWkRooMI'
    }
  };
  const response = await axios.request(options);
  return {
    page: pageParam,
    nextPage: pageParam +1,//다음 페이지 값 반환
    results: response.data.results,
  };
};

const NowPlayingPage = () => {
  const navigate = useNavigate(); 
  //ref는 감지할 DOM 요소에 할당됩니다.
  //inView는 해당 요소가 화면에 보이는지 여부를 나타내는 Boolean 값입니다.
  const { ref, inView } = useInView();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchData,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  })

  useEffect(() => {
    // console.log('inView:',inView)
    // console.log('hasNextPage:',hasNextPage)
    if(inView & hasNextPage){
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);
  
    return status === "pending" ? (
      <LoadingSpinner/>
    ): status === "error" ? (
      <div>{error.message}</div>
    ): (
        <div>
        {data.pages.map((page, pageIndex) => {
          return (
            <Wrapper key={pageIndex} className='container'>
              {page.results && page.results.map((movie) => {//영화 데이터 불러오기
                return(
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
                );
              })}
            </Wrapper>
          );
        })}
          <div ref={ref}>
            {/*로딩 스피너 나타내기 */}
            {isFetchingNextPage && <LoadingSpinner />}
          </div>
        </div>
    )

  };

export default NowPlayingPage;