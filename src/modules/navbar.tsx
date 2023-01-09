import React, {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import ProductModal from "../modals/productModal";

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
  
    @media screen and (max-width: 560px) {
        margin: 20px;
    }
`

const LogoLayer = styled.div`
    display: flex;
    align-items: center;  
  
    h1 {
        margin: 0 15px;
    }
  
    img {
        width: 50px;
    }
  
    @media screen and (max-width: 560px) {
        h1 {
            font-size: 30px;
        }
        
        img {
            width: 40px;
        }
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
  
    @media screen and (max-width: 560px) {
        div {
            width: 32px;
            height: 4px;
            margin: 5px 0;
        }
    }
`

const MenuLayer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
`

const MenuOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 10001;
    top: 0;
    left: 0;
`

const MenuContentLayer = styled.div`
    width: 280px;
    height: 100%;
    background-color: white;
    position: fixed;
    z-index: 10001;
    right: 0;
    top: 0;
    box-shadow: 10px 0 20px #00000070;
    padding-top: 30px;
`

const MenuItemLayer = styled.div`
    color: black;
    margin: 30px;
    
    a {
        font-size: 30px;
    }
`

interface MenuProps {
    showMenu :boolean,
    setShowMenu :(active :boolean) => void,
    setShowProductModal :(active :boolean) => void
}

function Menu({showMenu, setShowMenu, setShowProductModal} :MenuProps) {
    const navigate = useNavigate()

    if (showMenu) {
        return (
            <MenuLayer>
                <MenuOverlay onClick={() => setShowMenu(false)}/>
                <MenuContentLayer>
                    <MenuItemLayer>
                        <a onClick={() => {navigate("/"); setShowMenu(false)}}>Home</a>
                    </MenuItemLayer>
                    <MenuItemLayer>
                        <a>Contact us</a>
                    </MenuItemLayer>
                    <MenuItemLayer>
                        <a onClick={() => {setShowProductModal(true); setShowMenu(false)}}>Products</a>
                    </MenuItemLayer>
                </MenuContentLayer>
            </MenuLayer>
        )
    } else {
        return null
    }
}

function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [showProductModal, setShowProductModal] = useState<boolean>(false)
    const navigate = useNavigate()

    return (
        <NavbarLayer>
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} setShowProductModal={setShowProductModal}/>
            <ProductModal showProductModal={showProductModal} setShowProductModal={setShowProductModal}/>
            <LogoLayer>
                <img src={TunipLogo} alt="tunip logo"/>
                <h1>tunip</h1>
            </LogoLayer>
            <NavItemLayer>
                <NavItem onClick={() => navigate("/")}>Home</NavItem>
                <NavItem>Contact us</NavItem>
                <NavItem>Products</NavItem>
                <Hamburger onClick={() => setShowMenu(true)}>
                    <div/>
                    <div/>
                    <div/>
                </Hamburger>
            </NavItemLayer>
        </NavbarLayer>
    )
}

export default Navbar