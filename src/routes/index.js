import React from 'react'
import { createHashRouter } from 'react-router-dom'
import Home from '../pages/layouts/Home'
import About from '../pages/layouts/About'
import Tiktactoe from '../pages/Tiktactoe'

export const TemplateAppRoute = createHashRouter([
    {
        path: '/',
        children: [
            {
                element: <Home/>,
                index: true,
            }, {
                path: 'about',
                element: <About/>,
                children: [
                    {
                        path: '/about/tiktactoe',
                        element: <Tiktactoe/>,
                    },
                ],
            },
        ],
    }])
