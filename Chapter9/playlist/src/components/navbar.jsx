import React from "react";
import { CartIcon } from "../icons";
import styled from 'styled-components'
import { useSelector } from "react-redux";

const NavWrapper = styled.div`
background-color : #5852fe;
display: flex;
height: 100px;
position: fixed;
top: 0;
left: 0;
right: 0;
color: white;
h1{
margin-right: 300px;
}
`

const FooWrapper = styled.div`
background-color : #5852fe;
height: 100px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
color: white;
`

const Navbar = () =>{
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return(
        <NavWrapper>
            <h1>UMC PlayList</h1>
            <CartIcon/>
            <p>{totalAmount}</p>
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