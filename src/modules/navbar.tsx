import React from "react";
import styled from "styled-components";

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
`

function Navbar() {
    return (
        <NavbarLayer>
            <LogoLayer>
                <img src={TunipLogo} alt="tunip logo" width={"50px"}/>
                <h1>tunip</h1>
            </LogoLayer>
            <NavItemLayer>
                <NavItem>Home</NavItem>
                <NavItem>Contact us</NavItem>
                <NavItem>Products</NavItem>
            </NavItemLayer>
        </NavbarLayer>
    )
}

export default Navbar