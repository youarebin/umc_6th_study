import React from "react";
import { CartIcon } from "../icons";
import styled from 'styled-components'
import { useSelector } from "react-redux";

const NavWrapper = styled.div`
background-color : #5852fe;
display: flex;
justify-content: center;
align-items: center;
height: 100px;
position: fixed;
top: 0;
left: 0;
right: 0;
color: white;
h1{
    margin-right: auto;
    margin-left: 140px;
}
`

const IconWrapper = styled.div`
position: relative;
margin-right: 170px;
margin-left: auto;
.CarIcon{
position: relative;
}

p{
position: absolute;
top: 0px;
right: -5px;
width: 25px;
height: 25px;
border-radius: 50%;
background-color: #9792f7;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
}
`

const FooWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color : #5852fe;
height: 100px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
color: white;
h1{
text-align: center;
}
`

const Navbar = () =>{
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return(
        <NavWrapper>
            <h1>REAL DATA UMC PlayList</h1>
            <IconWrapper>
                <CartIcon/>
            <p>{totalAmount}</p>
            </IconWrapper>
        </NavWrapper>
    )
}

const Footer = () =>{
    return(
        <FooWrapper>
            <h1> University MakeUs Challenge</h1>
        </FooWrapper>
    )
}

export {Footer, Navbar}