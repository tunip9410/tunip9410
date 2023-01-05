import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./modules/navbar";
import Main from "./pages/main";
import Land from "./pages/land";
import Chat from "./pages/chat";
import Pad from "./pages/pad";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={
                        <Main/>
                    }/>
                    <Route path={"/land"} element={
                        <Land/>
                    }/>
                    <Route path={"/chat"} element={
                        <Chat/>
                    }/>
                    <Route path={"/pad"} element={
                        <Pad/>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
