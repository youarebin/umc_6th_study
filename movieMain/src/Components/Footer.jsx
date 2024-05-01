import React from 'react';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
    background-color: #171a32;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    & >div > div: last-child{
        display: flex;
        flex-direction: row;/*수평 배치*/
        justify-content: flex-end;
    }
`;

const Footer = () =>{
    return(
        <Wrapper>
            <div>
                <div>
                    <p>http://localhost:5173{useLocation().pathname}</p>
                </div>
                <div>
                    <p>http</p>
                </div>
            </div>
        </Wrapper>
    );
}

export default Footer