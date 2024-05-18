import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import axios from "axios";
import Debounce from "../components/Debounce";

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
      margin-top: 35px;
  
      svg {
        height: 30px;
        margin: 3px 0 0 0;
      }
    `;
  
    const SearchInput = styled.input`
      width: 23%;
      padding: 7px 15px;
      border-radius: 50px;
      margin-right: 15px;
    `;

    const ScrollBox = styled.div`
      width: 70%;
      height: 600px;
      background-color: #171a32;
      overflow: auto;
      &::-webkit-scrollbar{
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background: #383a69;
        border-radius: 10px;
      }
    
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `;

const MainPage = () => {

    const[searchItem, setSearchItem] = useState('');/*검색어 상태*/
    const [movies, setMovies] = useState([]);
    const debounceText = Debounce(searchItem);
    
    const handleSearch = () =>{
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
          setMovies(response.data.results);// API 응답에서 영화 정보를 추출하여 상태에 저장
        })
        .catch(function (error) {
          console.error(error);
        });

    };

    const onChangeSearch = (e) =>{
      setSearchItem(e.target.value)
      //debounceFunc(e.target.value, 2000)
    }

    useEffect(()=>{
      handleSearch();
    }, [debounceText]);
   
    return (
      <Wrapper>
        <WelcomeBox>
          <h1>환영합니다</h1>
        </WelcomeBox>
        <SearchContainer>
          <h2> 📽️ Find your movies ! </h2>
          <SearchBox>
            <SearchInput 
              type="text"
              value={searchItem}
              onChange={onChangeSearch}//검색어 입력시 상태 업데이트
            />
          </SearchBox>
          <ScrollBox>
            <Layout Movies={movies}/>
          </ScrollBox>
        </SearchContainer>
      </Wrapper>
    );
  };

export default MainPage;
//<button onClick={handleSearch}>검색</button>