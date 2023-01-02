import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./modules/navbar";
import Main from "./pages/main";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={
                        <Main/>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
