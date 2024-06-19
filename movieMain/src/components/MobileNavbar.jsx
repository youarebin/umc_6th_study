import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #171a32;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 25px 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Sidebar = styled.div`
  position: fixed;
  width: 250px;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #171a32;
  padding-top: 60px;

  .link{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
  }

  a {
    margin: 10px 0;
    color: white;
    text-decoration: none;
    font-size: 20px;
  }

  a:hover {
    transform: scale(1.2);
    font-weight: bold;
  }
`;

const MobileNavbar = (onClick) => {
  return (
    <>
      <Sidebar onClick={onClick.onClick}>
        <div className='link'>
          <Link to="/SignUpPage">회원가입</Link>
          <Link to="/Login">로그인</Link>
          <Link to="/PopularPage">Popular</Link>
          <Link to="/NowPlayingPage">NowPlaying</Link>
          <Link to="/TopRatedPage">TopRatedpage</Link>
          <Link to="/UpComing">UpComing</Link>
        </div>
      </Sidebar>
    </>
  );
};

export default MobileNavbar;