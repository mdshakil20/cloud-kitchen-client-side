import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AllService from "../pages/Shared/AllService";
import ServiceDetails from "../pages/Shared/ServiceDetails";
import Signup from "../pages/Signup/Signup";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/singup',
                element: <Signup></Signup>
            },
            {
                path:'/services',
                element: <AllService></AllService>
            },
            {
                path:'/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])