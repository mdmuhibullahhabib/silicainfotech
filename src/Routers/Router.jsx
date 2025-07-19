import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/home';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';
import Services from '../Pages/Services';
import About from '../Pages/About';

const Router = createBrowserRouter([
    {
         path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/contact',
                element: <Contact></Contact>,
            },
            {
                path:'/projects',
                element: <Projects></Projects>,
            },
            {
                path:'/services',
                element: <Services></Services>,
            },
            {
                path:'/about',
                element: <About></About>,
            },
        ]
    }
])

export default Router;