import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const LandIcon = require("../images/land-logo-white.png")
const ChatIcon = require("../images/chat-logo-white.png")
const PadIcon = require("../images/pad-logo-white.png")

const DarkLandIcon = require("../images/land-logo.png")
const DarkChatIcon = require("../images/chat-logo.png")
const DarkPadIcon = require("../images/pad-logo.png")

const ProductLayer = styled.div`
    display: flex;
    position: absolute;
    bottom: 120px;
  
    @media screen and (max-width: 1600px) {
        bottom: 100px;
    }
  
    @media screen and (max-width: 1030px) {
        display: none;
    }
  
    @media screen and (max-height: 1000px) {
        bottom: 50px;
    }
`

const ProductIcon = styled.a`
    display: flex;
    align-items: center;
    margin: 0 130px;
    
    h1 {
        color: white;
        margin: 0 10px;
    }
  
    @media screen and (max-width: 1210px) {
        margin: 0 100px;
    }
`

const DarkProductIcon = styled(ProductIcon)`
    h1 {
        color: black;
    }
`

interface ProductProp {
    dark :boolean
}

function Product({dark} :ProductProp) {
    const navigate = useNavigate()

    if (dark) {
        return (
            <ProductLayer>
                <DarkProductIcon onClick={() => navigate("/land")}>
                    <img src={DarkLandIcon} alt="land icon" width={"50px"}/>
                    <h1>Land</h1>
                </DarkProductIcon>
                <DarkProductIcon onClick={() => navigate("/chat")}>
                    <img src={DarkChatIcon} alt="land icon" width={"50px"}/>
                    <h1>Chat</h1>
                </DarkProductIcon>
                <DarkProductIcon>
                    <img src={DarkPadIcon} alt="land icon" width={"50px"}/>
                    <h1>Pad</h1>
                </DarkProductIcon>
            </ProductLayer>
        )
    } else {
        return (
            <ProductLayer>
                <ProductIcon onClick={() => navigate("/land")}>
                    <img src={LandIcon} alt="land icon" width={"50px"}/>
                    <h1>Land</h1>
                </ProductIcon>
                <ProductIcon onClick={() => navigate("/chat")}>
                    <img src={ChatIcon} alt="land icon" width={"50px"}/>
                    <h1>Chat</h1>
                </ProductIcon>
                <ProductIcon onClick={() => navigate("/pad")}>
                    <img src={PadIcon} alt="land icon" width={"50px"}/>
                    <h1>Pad</h1>
                </ProductIcon>
            </ProductLayer>
        )
    }
}

export default Product