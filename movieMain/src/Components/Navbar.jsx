import React, { useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MobileNavbar from "./MobileNavbar";
import { FaBars, FaTimes } from 'react-icons/fa';
import axios from "axios";


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
    transform: scale(1.2);
    font-weight: bold;
  }
`;

const HamburgerIcon = styled(FaBars)`
  font-size: 25px;
  cursor: pointer;
`;

const Navbar = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    //유저 정보 받아오기
    useEffect(() => {
        const token = localStorage.getItem("token")
        const fetchUserData = () =>{
            if(token){
                axios.get('/auth/me',{
                    Headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    if(response.status === 200){
                        setIsLoggedIn(true)
                    } else {
                        console.log("유저 정보 가져오기 실패", response.status)
                        setIsLoggedIn(false)
                    }
                })
                .catch(error => {
                    setIsLoggedIn(false)
                    console.error('유저 정보 가져오기 오류:', error);
                })
            } else {
                setIsLoggedIn(false)
            }
        }
        fetchUserData()
    })

        const handleAuthClick = () => {
        if(isLoggedIn){
            //로그인 상태면 로그아웃 처리
            localStorage.removeItem("token")//토큰 삭제
        }
        fetchUserData();
        setIsLoggedIn(!isLoggedIn);
    }
    
    //사이드바
    useEffect(()=>{
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[]);

    const handleSidebarToggle = () => {
        console.log("click");
        setIsSidebarOpen(!isSidebarOpen);
        console.log(isSidebarOpen);
      };

    return(
        <Wrapper>
            <Link to="/MainPage">UMC Movie</Link>
            {width > 900 ? (
                <div>
                {isLoggedIn ? (
                    <Link to="/" onClick={handleAuthClick}>로그아웃</Link>
                ) : (
                    <>
                        <Link to="/Login" onClick={handleAuthClick}>로그인</Link>
                        <Link to="/SignUpPage">회원가입</Link>
                    </>
                )}
                <Link to="/PopularPage">Popular</Link>
                <Link to="/NowPlayingPage">NowPlaying</Link>
                <Link to="/TopRatedPage">TopRatedpage</Link>
                <Link to="/UpComing">UpComing</Link>
            </div>
            ) : (
                <HamburgerIcon onClick={handleSidebarToggle} />
            ) }
            {isSidebarOpen? <MobileNavbar onClick={handleSidebarToggle}/> : <></>}
        </Wrapper>
    );
}

export default Navbar;