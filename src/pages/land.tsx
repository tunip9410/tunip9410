import React from "react";
import styled from "styled-components";

const BackgroundImage = require("../images/desert.png")

const LandPage = styled.div`
    background-image: url(${BackgroundImage});
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Land() {
    return (
        <LandPage>

        </LandPage>
    )
}

export default Land