import React from "react";
import styled from "styled-components";

const LandIcon = require("../images/land-logo-white.png")
const ChatIcon = require("../images/chat-logo-white.png")
const PadIcon = require("../images/pad-logo-white.png")

const ProductLayer = styled.div`
    display: flex;
    position: absolute;
    bottom: 150px;
`

const ProductIcon = styled.a`
    display: flex;
    align-items: center;
    margin: 0 130px;
    
    h1 {
        color: white;
        margin: 0 10px;
    }
`

function Product() {
    return (
        <ProductLayer>
            <ProductIcon>
                <img src={LandIcon} alt="land icon" width={"50px"}/>
                <h1>Land</h1>
            </ProductIcon>
            <ProductIcon>
                <img src={ChatIcon} alt="land icon" width={"50px"}/>
                <h1>Chat</h1>
            </ProductIcon>
            <ProductIcon>
                <img src={PadIcon} alt="land icon" width={"50px"}/>
                <h1>Pad</h1>
            </ProductIcon>
        </ProductLayer>
    )
}

export default Product