//회원가입
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopularPage from './PopularPage';
import App from "../App";

const MainPage = () =>{
    return(
        <div>
            <div>
                <p>환영합니다</p>
            </div>
            <div>
                <h3>Find your movies!</h3>
                <input type="text"></input>
            </div>
        </div>
    );
}

export default MainPage;