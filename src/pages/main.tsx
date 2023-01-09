import React from "react";
import Product from "../modules/product";
import styled from "styled-components";

const MainBackgroundImage = require("../images/sunset.png")
const MobileBackgroundImage = require("../images/sunset-mobile.png")
const TunipLogo = require("../images/tunip-logo.png")

const MainPage = styled.div`
    background-image: url(${MainBackgroundImage});
    background-size: cover;
    background-position: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  
    @media screen and (max-width: 590px) {
        background-image: url(${MobileBackgroundImage});
    }
`

const MainLogoLayer = styled.div`
    display: flex;
    align-items: center;
    
    h1 {
        font-size: 100px;
        margin: 0 40px;
        color: white;
    }
  
    img {
        width: 140px;
    }
  
    @media screen and (max-width: 560px) {
        h1 {
            font-size: 70px;
            margin: 0 20px;
        }
      
        img {
            width: 100px;
        }
    }
`

function Main() {
    return (
        <MainPage>
            <MainLogoLayer>
                <img src={TunipLogo} alt="tunip logo"/>
                <h1>tunip</h1>
            </MainLogoLayer>
            <Product dark={false}/>
        </MainPage>
    )
}

export default Main