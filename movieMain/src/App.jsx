import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import PopularPage from './pages/PopularPage';
import NowPlayingPage from './pages/NowPlayingPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComing from './pages/UpComing';
import Footer from './Components/Footer'

const Body = styled.div`
  padding-top: 15px;
`;

const App = () =>{
  return(

      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/MainPage" element={<MainPage />}  />
            <Route path="/PopularPage" element={<PopularPage />} />
            <Route path="/NowPlayingPage" element={<NowPlayingPage />}/>
            <Route path="/TopRatedPage" element={<TopRatedPage />}/>
            <Route path="/UpComing" element={<UpComing />}/> 
          </Routes>  
        </Body>
        <Footer />
      </Router>

  );
}

export default App;