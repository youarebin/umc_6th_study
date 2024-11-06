import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import axios from "axios";
import Debounce from "../components/Debounce";
import {LuSearch} from 'react-icons/lu'

const MainPage = () => {
    const[searchItem, setSearchItem] = useState('');/*검색어 상태*/
    const [isToken, setIstoken] = useState(false)
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const debounceText = Debounce(searchItem);
    
    const handleSearch = () =>{
      setIsLoading(true)
      
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {query: debounceText, include_adult: 'false', language: 'ko-KR', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGYyNzg0NTBhNzE2NTk4YmZhYzMxM2QyZWZlYjBiZSIsInN1YiI6IjY2MzBlNTMxOTY2MWZjMDEyZDY1NmYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OiUp_MvuhUaJQ0UPTFrFCzk_IFnlUIo03QryWkRooMI'
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
          setIsLoading(false)
          setMovies(response.data.results);// API 응답에서 영화 정보를 추출하여 상태에 저장
        })
        .catch(function (error) {
          setIsLoading(false)
          console.error(error);
        });

    };

    const onChangeSearch = (e) =>{
      const keyword = e.target.value
      setSearchItem(keyword)
    }

    useEffect(()=>{
      handleSearch();
    }, [debounceText]);
   
    useEffect(() => {
      const token = localStorage.getItem("token")
      if(token){
          setIstoken(true)
      }
    }, [])

    return (
      <Wrapper>
        <WelcomeBox>
          {isToken? (
            <h2>{localStorage.getItem("username")}님 환영합니다!</h2>
          ) : (
            <h2>환영합니다!</h2>
          )}
        </WelcomeBox>
        <SearchContainer>
          <h2> 📽️ Find your movies ! </h2>
          <SearchBox>
            <SearchInput 
              type="text"
              value={searchItem}
              onChange={onChangeSearch}//검색어 입력시 상태 업데이트
            />
            <StyledLuSearch size="30"/>
          </SearchBox>
          
          {movies.length > 0 && (
            <ScrollBox>
              {isLoading ? <p>데이터를 받아오고 있습니다.</p>: <Layout Movies={movies}/>}
            </ScrollBox>
          )}
        </SearchContainer>
      </Wrapper>
    );
  };

export default MainPage;

const Wrapper = styled.div`
      text-align: center;
      font-weight: bold;
      color: white;
    `;
  
    const WelcomeBox = styled.div`
      padding: 150px 0;
      background-color: black;
      font-size: 24px;
    `;
  
    const SearchContainer = styled.div`
      padding: 50px 0 250px 0;
      font-size: 34px;
      background-color: #21224a;
    `;

    const SearchBox = styled.div`
      display: flex;
      justify-content: center;
      padding-left: 20px;
      margin: 35px 0px;
      svg {
        height: 30px;
        margin: 3px 0 0 0;
      }
    `;

    const StyledLuSearch = styled(LuSearch)`
      width: 40px;
      height: 30px;
      padding: 5px 0px;
      border-radius: 50%;
      background-color: #ffc411;
      color: black;
    `;
  
    const SearchInput = styled.input`
      width: 40%;
      height: 30px;
      padding: 7px 15px;
      border-radius: 50px;
      margin-right: 15px;
    `;

    const ScrollBox = styled.div`
      width: 70%;
      height: 600px;
      overflow: auto;
      margin: 0 auto;
      border-radius: 10px;
      &::-webkit-scrollbar{
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background: #383a69;
        border-radius: 10px;
        background-color: #ffc411;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `;