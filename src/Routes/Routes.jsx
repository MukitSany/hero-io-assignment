import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage';
import Home from '../Pages/HOme/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
        {
            index: true,
            loader:()=>fetch('appsData.json'),
            path:"/",
            Component: Home
        }
    ]
  },
  
]);