import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/index";
import "./assets/css/App.scss";
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/latin-400.css"; // Specify weight and style

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default App;