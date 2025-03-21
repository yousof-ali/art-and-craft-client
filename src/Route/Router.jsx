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
import PrivateRoute from "./PrivateRoute"
import Details from "../Pages/Details/Details"
import MyAccount from "../Pages/MyAccount/MyAccount"
import UPdateProfile from "../Pages/UpdateProfile/UPdateProfile"
import Edit from "../Pages/Edit/Edit"
import Category from "../Pages/Category/Category"

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
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'/add',
                element:<PrivateRoute><AddCraft></AddCraft></PrivateRoute>
            },
            {
                path:'/my-craft',
                element:<PrivateRoute><MyCraft></MyCraft></PrivateRoute>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path:'/account',
                element:<PrivateRoute><MyAccount></MyAccount></PrivateRoute>
            },
            {
                path:'/update-profile',
                element:<PrivateRoute><UPdateProfile></UPdateProfile></PrivateRoute>
            },
            {
                path:'/edit/:id',
                element:<PrivateRoute><Edit></Edit></PrivateRoute>
            },
            {
                path:'category/:id',
                element:<Category></Category>
            }
        ]
    },
]);

export default router;