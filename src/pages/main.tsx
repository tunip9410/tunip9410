import React from "react";
import Product from "../modules/product";
import styled from "styled-components";

const MainBackgroundImage = require("../images/sunset.png")
const TunipLogo = require("../images/tunip-logo.png")

const MainPage = styled.div`
    background-image: url(${MainBackgroundImage});
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainLogoLayer = styled.div`
    display: flex;
    align-items: center;
    
    h1 {
        font-size: 100px;
        margin: 0 40px;
        color: white;
    }
`

function Main() {
    return (
        <MainPage>
            <MainLogoLayer>
                <img src={TunipLogo} alt="tunip logo" width={"140px"}/>
                <h1>tunip</h1>
            </MainLogoLayer>
            <Product/>
        </MainPage>
    )
}

export default Main