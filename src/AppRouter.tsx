import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Company from "./components/company/Company";
import Home from './components/home/Home';
import Navigation from "./components/navigation/Navigation";
import Videos from "./components/videos/Videos";

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Videos' element={<Videos />} />
                    <Route path='/Company' element={<Company />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;