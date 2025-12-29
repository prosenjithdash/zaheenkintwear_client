import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element:<Home/>
            }
        ]
    },
    // Look like use for Common use also do not need Navbar and Footer.
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register />
    }
]);