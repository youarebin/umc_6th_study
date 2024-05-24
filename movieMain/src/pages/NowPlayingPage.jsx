import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { moviesApi } from "../TMDB_api";
import Layout from '../components/Layout';
import LoadingSpinner from '../components/isLoading';
import InfiniteScroll from 'react-infinite-scroller';

const NowPlayingPage = () => {
  const [Movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing',
        params: { language: 'en-US', page: currentPage },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGYyNzg0NTBhNzE2NTk4YmZhYzMxM2QyZWZlYjBiZSIsInN1YiI6IjY2MzBlNTMxOTY2MWZjMDEyZDY1NmYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OiUp_MvuhUaJQ0UPTFrFCzk_IFnlUIo03QryWkRooMI'
        }
      };
  
      try {
        const response = await axios.request(options);
        setMovies(prevMovies => [...prevMovies, ...response.data.results]);
        setIsLoading(false); // 데이터 수신 후 isLoading 상태 업데이트
      } catch (error) {
        console.error('Error fetching popular movies: ', error);
        setIsLoading(false); // 에러 발생 시도 isLoading 상태 업데이트
      }
    };

    fetchData();
  }, [currentPage]);

  const handleScorll = () =>{
    if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight || isLoading){
      setCurrentPage(prevapge => prevapge + 1);
    }
    
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScorll);
    return () => window.removeEventListener('scroll', handleScorll);
  },[isLoading]);
  
    return (
      <>
      {isLoading && currentPage === 1 ? (
        <LoadingSpinner />
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={() => setCurrentPage(prevPage => prevPage + 1)}
          hasMore={!isLoading}
          loader={<LoadingSpinner key={0} />}
        >
          <Layout Movies={Movies} />
        </InfiniteScroll>
      )}
      </>
    );
  };

export default NowPlayingPage;