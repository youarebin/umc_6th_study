import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../TMDB_api";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
background-color: #1f2141; 
color: white;

div.creditsInfo{
  padding: 30px;
  display: grid;
  grid-template-columns:  repeat(10, 1fr);
  place-items: center stretch;

  @media (max-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
}
`;

const MovieDescription = styled.div`
  padding: 200px;
  display: flex;

  div.description{
    width: 500px;
    padding: 30px;
    flex-direction: column;
    padding: 100px 0 0 100px;
  }

  @media (min-width: 300px) and (max-width: 900px) {
    display: block;
  }
`;

const Credits = styled.div`
img{
  width: 80px;
  height: 80px;
  border-radius: 70%;
}
`;

const MovieDetailPage = () => {
  const {id} = useParams();//id값 담겨있음
  const [movies, setMovies] = useState([]);
  const [credits, setCredits] = useState({ cast: [] });

  useEffect(() => {//영화 디테일 정보 불러오기
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: { language: 'ko-KR' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGYyNzg0NTBhNzE2NTk4YmZhYzMxM2QyZWZlYjBiZSIsInN1YiI6IjY2MzBlNTMxOTY2MWZjMDEyZDY1NmYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OiUp_MvuhUaJQ0UPTFrFCzk_IFnlUIo03QryWkRooMI'
          }
        });
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  useEffect(()=>{//출연진 정보 불러오기
    const fetchCredit = async () =>{
      try{
        const creditResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
          params: { language: 'ko-KR' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGYyNzg0NTBhNzE2NTk4YmZhYzMxM2QyZWZlYjBiZSIsInN1YiI6IjY2MzBlNTMxOTY2MWZjMDEyZDY1NmYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OiUp_MvuhUaJQ0UPTFrFCzk_IFnlUIo03QryWkRooMI'
          }
        });
        setCredits(creditResponse.data);
      }catch(error){
        console.log(error);
      }
    };

    fetchCredit();
  }, [id]);

  const summary = movies.overview ? movies.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.";
  const star = movies.vote_average && "⭐️".repeat(Math.floor(movies.vote_average));
 
  return (
    <Wrapper>
      <div className="backgroundImage">

      <MovieDescription>
        <div>
            <img src={getImageUrl(movies.poster_path)} alt={movies.original_title} />
        </div>
        <div className="description">
            <h1>{movies.original_title}</h1>
            <h3>평점 {star}</h3>
            <h3>개봉일 {movies.release_date}</h3>
            <h3>줄거리</h3>
            <p>{summary}</p>
        </div>  
      </MovieDescription>  

      <h3 style={{ textAlign: 'center' }}>출연진 및 제작진</h3>
      <div className="creditsInfo">
         {credits && credits.cast.map((credit) => (
            <Credits key={credit.id}>
             <img src= {credit.profile_path ? 
                      `http://image.tmdb.org/t/p/w500/${credit.profile_path}`: 
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"} />
             <p>{credit.original_name}</p>
             <p>{credit.known_for_department}</p>
            </Credits>
         ))}
      </div>  

      </div>
    </Wrapper>
  );
};

export default MovieDetailPage;