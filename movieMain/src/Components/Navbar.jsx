import React, { useState  } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Wrapper = styled.div`
  background-color: #171a32;
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding: 25px 20px;
  color: white;
  /*상단에 고정하기*/
  position: fixed;/*nav가 body로 부터 독립되면서 body에 있던 nav공간 사라짐 -> 겹침*/
  top: 0;
  /* width: 100% */
  left: 0;
  right: 0;
  a {/*Link는 styled-components요소 아님 <a>태그로 랜더링 됨*/
    color: white;
    text-decoration: none;
    margin: 0px 5px;
    line-height: 20px;
    padding: 5px 5px;
  }
  a: hover{
    transform: scale(1,2);
    font-weight: bold;
  }
`;

const Right = styled.div`
   
`;

const Navbar = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태

    // 로그인 함수
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // 로그아웃 함수
    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    
    return(
        <Wrapper>
            <Link to="/MainPage">UMC Movie</Link>
            <Right>
                {/*{isLoggedIn ? (
                    <Link to="/" onClick={handleLogout}>로그아웃</Link>
                ) : (
                    <Link to="/" onClick={handleLogin}>로그인</Link>
                )}*/}
                <Link to="/SignUpPage">회원가입</Link>
                <Link to="/PopularPage">Popular</Link>
                <Link to="/NowPlayingPage">NowPlaying</Link>
                <Link to="/TopRatedPage">TopRatedpage</Link>
                <Link to="/UpComing">UpComing</Link>
            </Right>
        </Wrapper>
    );
}

export default Navbar;