import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components'
import Navbar from './Components/Navbar';
import SignUpPage from './pages/SignUpPage'
import MainPage from './pages/MainPage';
import PopularPage from './pages/PopularPage';
import NowPlayingPage from './pages/NowPlayingPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComing from './pages/UpComing';
import MovieDetailPage from './pages/MovieDetailPage'; 
import NotFoundPage from './pages/NotFoundPage';
import Footer from './Components/Footer'

const Body = styled.div`
padding-top: 55px;/*Navbar height이상의 padding값 주기*/
padding-bottom: 50px;
right: 0;
left: 0;
`;

const App = () =>{
  return(

      <Router>
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
      </Router>

  );
}

export default App;