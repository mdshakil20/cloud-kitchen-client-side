import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReview from "../pages/MyReview/MyReview";
import AllService from "../pages/Shared/AllService";
import Blogs from "../pages/Shared/Blogs";
import NotFound from "../pages/Shared/NotFound";
import ServiceDetails from "../pages/Shared/ServiceDetails";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRouter";

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
                path:'/blog',
                element: <Blogs></Blogs>
            },
            {
                path:'/services',
                element: <AllService></AllService>
            },
            {
                path:'/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/my-reviews/:email',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/my-reviews/${params.email}`)
            },
            {
                path:'/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])