import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import ApartmentPage from "../pages/ApartmentPage"
import ErrorPage from "../pages/ErrorPage"

function Routes() {
    const router = createBrowserRouter([
        { path:"/", element:<Home />, errorElement:<ErrorPage /> },
        { path: "/about", element: <About />, errorElement:<ErrorPage /> },
        { path: "/locations/:locationId", element: <ApartmentPage />, errorElement:<ErrorPage /> },
        { path: "*", element: <ErrorPage /> }  
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default Routes