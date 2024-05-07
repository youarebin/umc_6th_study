import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopularPage from './PopularPage';
import App from "../App";
import styled from "styled-components";
import IconSearch from "../assets/IconSearch";


const MainPage = () => {
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
      border-radius: 16px;
      margin-right: 15px;
    `;
  
    return (
      <Wrapper>
        <WelcomeBox>
          <h1>환영합니다</h1>
        </WelcomeBox>
        <SearchContainer>
          <h1> 📽️ Find your movies ! </h1>
          <SearchBox>
            <SearchInput />
            <IconSearch />
          </SearchBox>
        </SearchContainer>
      </Wrapper>
    );
  };

export default MainPage;