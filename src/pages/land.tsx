import React from "react";
import styled from "styled-components";
import Product from "../modules/product";

const BackgroundImage = require("../images/desert.png")
const MobileBackgroundImage = require("../images/desert-mobile.png")
const LandLogo = require("../images/land-logo-white.png")

const LandPage = styled.div`
    background-image: url(${BackgroundImage});
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

const LogoLayer = styled.div`
    display: flex;
    align-items: center;
    
    h1 {
        font-size: 100px;
        margin: 0 40px;
        color: white;
    }
  
    img {
        width: 170px;
    }
  
    @media screen and (max-width: 850px) {
        h1 {
            font-size: 80px;
        }
    }
  
    @media screen and (max-width: 770px) {
        h1 {
            margin: 0 20px;
        }
      
        img {
            width: 150px;
        }
    }
  
    @media screen and (max-width: 700px) {
        h1 {
            font-size: 60px;
            margin: 0 25px;
        }
    }
  
    @media screen and (max-width: 610px) {
        img {
            width: 130px;
        }
      
        h1 {
            font-size: 50px;
            margin: 0 20px;
        }
    }
  
    @media screen and (max-width: 500px) {
        h1 {
            font-size: 45px;
            margin: 0 10px;
        }
      
        img {
            width: 100px;
        }
    }
`

const Message = styled.div`
    position: absolute;
    transform: translate(0, 120px);
    text-align: center;
    margin-top: 30px;
    
    p {
        color: white;
        font-size: 20px;
    }
  
    @media screen and (max-width: 700px) {
        margin: 0;
    }
`

const LoginButton = styled.a `
    padding: 15px 70px;
    color: #9af317;
    text-transform: uppercase;
    letter-spacing: 7px;
    text-decoration: none;
    font-size: 24px;
    border: 3px solid #9af317;
    margin-top: 30px;
  
    @media screen and (max-width: 700px) {
        padding: 10px 35px;
        font-size: 17px;
        letter-spacing: 5px;
    }
`

function Land() {
    return (
        <LandPage>
            <LogoLayer>
                <img src={LandLogo} alt="land logo"/>
                <h1>tunip land</h1>
            </LogoLayer>
            <Message>
                {/*<p>Faster, Simpler, Better, tunip land</p>*/}
                <LoginButton href={"https://tunip.land"}>Open land</LoginButton>
            </Message>
            <Product dark={false}/>
        </LandPage>
    )
}

export default Land