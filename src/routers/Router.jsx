import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import JobDetails from '../pages/JobDetails/JobDetails';
import PrivateRouter from '../routes/PrivateRouter';
import Applyjob from '../pages/ApplyJob/Applyjob';
import MyApplications from '../pages/MyApplications/MyApplications';

import AddJob from '../pages/AddJob/AddJob';
import MyPostedJobs from '../pages/MyPostedJobs/MyPostedJobs';


import ViewApplication from '../pages/MyPostedJobs/ViewApplication';


const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                
                    
            },
            {
                path: "/jobs/:id",
                Component: JobDetails,
                loader: ({ params }) => fetch(`https://career-code-server-chi.vercel.app/jobs/${params.id}`)

            },
            {
                path: '/jobApply/:id',
                element: <PrivateRouter><Applyjob></Applyjob></PrivateRouter>,


            },
            {
                path: '/myApplications',
                element: <PrivateRouter><MyApplications></MyApplications></PrivateRouter>,



            },

            {
                path: '/addJob',
                element: <PrivateRouter><AddJob></AddJob></PrivateRouter>
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRouter><MyPostedJobs></MyPostedJobs></PrivateRouter>
            },
            {
                path: '/application/:id',
                element: <PrivateRouter> <ViewApplication></ViewApplication></PrivateRouter>,
                loader: ({ params }) => fetch(`https://career-code-server-chi.vercel.app/application/job/${params.id}`)
            }
            ,
            {
                path: "/register",
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            }
        ]
    }
])



export default router;