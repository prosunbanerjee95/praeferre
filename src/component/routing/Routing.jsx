import React, { Suspense } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import Login from '../login/Login';
import DashboardChart from '../dashboard/DashboardChart';


function Routing() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to="/login" replace />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/dashboardChart',
            element: <DashboardChart />,
        },
    ]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default Routing;