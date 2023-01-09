import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const DarkLandIcon = require("../images/land-logo.png")
const DarkChatIcon = require("../images/chat-logo.png")
const DarkPadIcon = require("../images/pad-logo.png")

const ModalOverBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    
`

const ModalOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    z-index: 10000;
    bottom: 0;
`

const ModalLayer = styled.div`
    position: fixed;
    background-color: white;
    box-shadow: 1px 4px 10px #00000028;
    z-index: 10000;
    overflow-y: auto;
    width: 100%;
    bottom: 0;
    max-height: 80%;
    border-radius: 30px 30px 0 0;
  
    h1 {
        text-align: center;
    }
`

const ProductItem = styled.a`
    display: flex;
    align-items: center;
    margin: 15px 30px;
    
    h2 {
        margin: 0 10px;
    }
`

interface ProductModalProps {
    showProductModal :boolean,
    setShowProductModal :(active :boolean) => void
}

function ProductModal({showProductModal, setShowProductModal} :ProductModalProps) {
    const navigate = useNavigate()

    if (showProductModal) {
        return (
            <ModalOverBox>
                <ModalOverlay onClick={() => setShowProductModal(false)}/>
                <ModalLayer>
                    <h1>Products</h1>
                    <ProductItem onClick={() => {navigate("/pad"); setShowProductModal(false)}}>
                        <img src={DarkLandIcon} alt="land icon" width={"50px"}/>
                        <h2>Land</h2>
                    </ProductItem>
                    <ProductItem onClick={() => {navigate("/chat"); setShowProductModal(false)}}>
                        <img src={DarkChatIcon} alt="chat icon" width={"50px"}/>
                        <h2>Chat</h2>
                    </ProductItem>
                    <ProductItem onClick={() => {navigate("/pad"); setShowProductModal(false)}}>
                        <img src={DarkPadIcon} alt="pad icon" width={"50px"}/>
                        <h2>Pad</h2>
                    </ProductItem>
                </ModalLayer>
            </ModalOverBox>
        )
    } else {
        return null
    }
}

export default ProductModal