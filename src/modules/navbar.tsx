import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const TunipLogo = require("../images/tunip-logo.png")

const NavbarLayer = styled.div`
    margin: 30px 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    color: white;
  
    @media screen and (max-width: 1600px) {
        margin: 30px 150px;
    }
  
    @media screen and (max-width: 1210px) {
        margin: 30px 120px;
    }
  
    @media screen and (max-width: 1000px) {
        margin: 30px 100px
    }
  
    @media screen and (max-width: 780px) {
        margin: 30px 65px;
    }
  
    @media screen and (max-width: 630px) {
        margin: 30px 50px;
    }
`

const LogoLayer = styled.div`
    display: flex;
    align-items: center;  
  
    h1 {
        margin: 0 15px;
    }
`

const NavItemLayer = styled.div`
    display: flex;
    align-items: center;
`

const NavItem = styled.a`
    margin: 0 30px;
    
    @media screen and (max-width: 1000px) {
        display: none;
    }
`

const Hamburger = styled.a`
    div {
        width: 37px;
        height: 5px;
        background-color: white;
        border-radius: 90px;
        margin: 6px 0;
    }
  
    @media screen and (min-width: 1000px) {
        display: none;
    }
`

function Navbar() {
    const navigate = useNavigate()

    return (
        <NavbarLayer>
            <LogoLayer>
                <img src={TunipLogo} alt="tunip logo" width={"50px"}/>
                <h1>tunip</h1>
            </LogoLayer>
            <NavItemLayer>
                <NavItem onClick={() => navigate("/")}>Home</NavItem>
                <NavItem>Contact us</NavItem>
                <NavItem>Products</NavItem>
                <Hamburger>
                    <div/>
                    <div/>
                    <div/>
                </Hamburger>
            </NavItemLayer>
        </NavbarLayer>
    )
}

export default Navbar