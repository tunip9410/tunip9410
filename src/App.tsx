import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./modules/navbar";
import Main from "./pages/main";
import Land from "./pages/land";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={
                        <Main/>
                    }/>
                    <Route path={"/land"} element={
                        <Land/>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
