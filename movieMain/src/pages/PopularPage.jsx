import React, { useState, useEffect } from 'react';
import { moviesApi } from "../TMDB_api";
import Layout from '../components/Layout';
import LoadingSpinner from '../components/isLoading';

const PopularPage = () => {
  const [Movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await moviesApi.popular();
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies: ', error);
      } finally{
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {isLoading ? ( <LoadingSpinner/> ) : ( <Layout Movies={Movies}/> )}
    </>
  );
};

export default PopularPage;