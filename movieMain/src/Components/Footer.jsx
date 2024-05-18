import React from 'react';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
    /*width: 100% */
    background-color: #171a32;
    color: white;
    text-align: right;
    height: 30px;
    padding: 25px 20px;
    /*하단에 고정하기*/
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Footer = () => {
    const location = useLocation();

    return (
        <Wrapper>
            <div>
                <p>http://localhost:5173{location.pathname}</p>
            </div>
        </Wrapper>
    );
}

export default Footer