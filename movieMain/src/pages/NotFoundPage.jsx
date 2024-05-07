import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
background-color: #1f2141; 
color: white;
text-align: center;
a{
    color: white;
    font-size: 20px;
}
`;


const NotFoundPage = () =>{
    return(
        <Wrapper>
            <h1>Oops!</h1>
            <p>예상치 못한 에러가 발생했습니다.</p>
            <p>Not Found</p>{/*italic 왜안됨..? */}
            <Link to="/MainPage">메인으로 이동하기</Link>
        </Wrapper>
    );
}

export default NotFoundPage;