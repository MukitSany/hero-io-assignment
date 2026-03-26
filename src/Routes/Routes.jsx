import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage';
import Home from '../Pages/HOme/Home';
import Apps from '../Pages/About/AppsData';
import AppDetails from '../Pages/AppDetails/AppDetails';
import Installation from '../Pages/Installation/Installation';



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
        },
        {
            path:"/apps",
            loader:()=>fetch('appDataTotal.json'),
            Component: Apps
        },
        {
            path: '/appdetails/:id',
            loader:()=>fetch('appDataTotal.json'),
            Component: AppDetails
        },
        {
            path: '/installation',
            loader:()=>fetch('appDataTotal.json'),
            Component: Installation
        },
        {
            path: '*',
            element: <Errorpage></Errorpage>,
        }
    ]
  },
  
]);