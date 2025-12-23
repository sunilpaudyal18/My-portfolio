import React from 'react';

import { createBrowserRouter } from "react-router";
import Home from '../components/Home';
import ErrorPage from '../components/ErrorPage';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/home',
                element: <Home></Home>
            },
        ]
    },
  
]);

export default Router;