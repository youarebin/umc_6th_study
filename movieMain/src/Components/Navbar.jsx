import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'


const Wrapper = styled.div`

  background-color: #171a32;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999; /* Ensure the navbar appears above other content */
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 20px; /* Adjust margin as needed */
  &:hover{
    font-size: 1.1em;
  }
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const Navbar = () =>{
    return(
        <Wrapper>
            <div>
                <StyledLink to="/">
                    UMC Movie
                </StyledLink>
            </div>
            <Right>
                <div>
                    <StyledLink to="/MainPage">
                        회원가입
                    </StyledLink>
                </div>
                <div>
                    <StyledLink to="/PopularPage">
                        Popular
                    </StyledLink>
                </div>
                <div>
                    <StyledLink to="/NowPlayingPage">
                        NowPlaying
                    </StyledLink>
                </div>
                <div>
                    <StyledLink to="/TopRatedPage">
                        TopRatedpage
                    </StyledLink>
                </div>
                <div>
                    <StyledLink to="/UpComing">   
                        UpComing
                    </StyledLink>
                </div>
            </Right>
        </Wrapper>
    );
}

export default Navbar;