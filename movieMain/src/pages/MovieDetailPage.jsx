import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../TMDB_api";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
background-color: #1f2141; 
color: white;
//display: flex;
padding: 200px;
// div.description{
//   padding: 60px;
// }
div.creditsInfo{
  padding: 30px;
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
        <div>
            <img src={getImageUrl(movies.poster_path)} alt={movies.original_title} />
        {/* </div>
        <div className="description"> */}
            <h1>{movies.original_title}</h1>
            <p>평점 {star}</p>
            <p>개봉일 {movies.release_date}</p>
            <p>줄거리</p>
            <p>{summary}</p>
        </div>  
        <div className="creditsInfo">
          <p>출연진 및 제작진</p>
          {credits && credits.cast.map((credit) => (
             <div key={credit.id}>
              <img src= {"http://image.tmdb.org/t/p/w500/" + credit.profile_path} />
              <p>{credit.original_name}</p>
              <p>{credit.known_for_department}</p>
             </div>
          ))}
        </div>  
    </Wrapper>
  );
};

export default MovieDetailPage;