import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import SignUpPage from './pages/SignUpPage'
import MainPage from './pages/MainPage';
import PopularPage from './pages/PopularPage';
import NowPlayingPage from './pages/NowPlayingPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComing from './pages/UpComing';
import MovieDetailPage from './pages/MovieDetailPage'; 
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer'

const Body = styled.div`
height: 100vh;
width: 100vw;
background-color: #1f2141; 
padding-top:  55px;/*Navbar height이상의 padding값 주기*/
padding-bottom: 55px;/**/
`;

const App = () =>{
  return(

      <BrowserRouter>
        <Navbar />
        <Body>
          <Routes>
            <Route exact path="/MainPage" element={<MainPage />}  />
            <Route exact path="/SignUpPage" element={<SignUpPage />}  />
            <Route exact path="/PopularPage" element={<PopularPage />} />
            <Route exact path="/NowPlayingPage" element={<NowPlayingPage />}/>
            <Route exact path="/TopRatedPage" element={<TopRatedPage />}/>
            <Route exact path="/UpComing" element={<UpComing />}/> 
            <Route exact path="/MovieDetailPage" element={<MovieDetailPage />}/>
            <Route path="/MovieDetailPage/:id" element={<MovieDetailPage />} />
            <Route path='/*' element={<NotFoundPage />}/>
          </Routes>     
        </Body>  
        <Footer />
      </BrowserRouter>

  );
}

export default App;