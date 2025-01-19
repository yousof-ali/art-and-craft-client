import * as react from "react"
import { RouterProvider } from "react-router-dom"
import {
    createBrowserRouter
} from "react-router-dom"
import * as ReactDOM from 'react-dom/client'
import Root from "../Layout/Root"
import Home from "../Pages/Home/Home"
import Errorpage from "../Pages/Errorpage/Errorpage"
import AllCraft from "../Pages/Allcraft/AllCraft"
import MyCraft from "../Pages/Mycraft/MyCraft"
import AddCraft from "../Pages/Addcraft/AddCraft"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Blog from "../Pages/Blog/Blog"
import PrivateRoute from "./PrivateRoute"
import Details from "../Pages/Details/Details"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/all',
                element:<AllCraft></AllCraft>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'/add',
                element:<PrivateRoute><MyCraft></MyCraft></PrivateRoute>
            },
            {
                path:'/my-craft',
                element:<PrivateRoute><MyCraft></MyCraft></PrivateRoute>
            },
            {
                path:'/details',
                element:<PrivateRoute><Details></Details></PrivateRoute>
            }
        ]
    },
]);

export default router;