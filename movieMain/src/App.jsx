import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import SignUpPage from './pages/SignUpPage'
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import PopularPage from './pages/PopularPage';
import NowPlayingPage from './pages/NowPlayingPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComing from './pages/UpComing';
import MovieDetailPage from './pages/MovieDetailPage'; 
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #1f2141; 
`;

const Body = styled.div`
flex-grow: 1; /* Body가 남은 공간을 모두 차지하도록 함 */
padding-top:  55px;/*Navbar height이상의 padding값 주기*/
padding-bottom: 70px;
`;


// React Query Client 설정
const queryClient = new QueryClient();

const App = () =>{
  return(

      <BrowserRouter>
      <Container>
        <Navbar />
        <Body>
           <QueryClientProvider client={queryClient}>
          <Routes>
            <Route exact path="/" element={<MainPage />}  />
            <Route exact path="/MainPage" element={<MainPage />}  />
            <Route exact path="/SignUpPage" element={<SignUpPage />}  />
            <Route exact path="/Login" element={<Login />}/>
            <Route exact path="/PopularPage" element={<PopularPage />} />
            <Route exact path="/NowPlayingPage" element={<NowPlayingPage />}/>
            <Route exact path="/TopRatedPage" element={<TopRatedPage />}/>
            <Route exact path="/UpComing" element={<UpComing />}/> 
            <Route exact path="/MovieDetailPage" element={<MovieDetailPage />}/>
            <Route path="/MovieDetailPage/:id" element={<MovieDetailPage />} />
            <Route path='/*' element={<NotFoundPage />}/>
          </Routes>    
           </QueryClientProvider>
        </Body>  
        <Footer />
        </Container>
      </BrowserRouter>

  );
}

export default App;