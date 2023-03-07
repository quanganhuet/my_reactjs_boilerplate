import React from 'react'
import { createHashRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/layouts/Home'
import About from '../pages/layouts/About'
import Tiktactoe from '../pages/Tiktactoe'

export const AppHashrouter = createHashRouter([
    {
        path: '/',
        element: <Home/>,
    }])
export const AppRoute = () => (
    <HashRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/tiktactoe" element={<Tiktactoe/>}/>
        </Routes>
    </HashRouter>
)

export const AboutRoute = () => (
    <HashRouter>
        <Routes>
            <Route path="/about/tiktactoe" element={<Tiktactoe/>}/>
        </Routes>
    </HashRouter>
)

