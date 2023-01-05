import React from "react";
import styled from "styled-components";
import Product from "../modules/product";

const BackgroundImage = require("../images/chat.png")
const ChatLogo = require("../images/chat-logo.png")

const ChatPage = styled.div`
    background-image: url(${BackgroundImage});
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoLayer = styled.div`
    display: flex;
    align-items: center;
    
    h1 {
        font-size: 100px;
        margin: 0 40px;
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

function Chat() {
    return (
        <ChatPage>
            <LogoLayer>
                <img src={ChatLogo} alt="land logo"/>
                <h1>tunip chat</h1>
            </LogoLayer>
            <Message>
                <LoginButton href={"https://tunip.chat"}>Open chat</LoginButton>
            </Message>
            <Product dark={true}/>
        </ChatPage>
    )
}

export default Chat