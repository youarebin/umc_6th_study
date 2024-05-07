import React from "react";
import { useLocation } from "react-router-dom";
import { getImageUrl } from "../TMDB_api";
import styled from "styled-components";

const MovieDetailPage = () => {
  const { original_title, backdrop_path, poster_path, rate, release_date, overview } = useLocation().state;

  const summary = overview ? overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.";


  return (
    <div>
        <div>
            <img src={getImageUrl({poster_path})} alt={original_title} />
        </div>
        <div>
            <h1>{original_title}</h1>
            <p>평점{rate}</p>
            <p>개봉일{release_date}</p>
            <p>줄거리</p>
            <p>{summary}</p>
        </div>    
    </div>
  );
};

export default MovieDetailPage;