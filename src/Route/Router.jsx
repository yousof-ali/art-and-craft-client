import * as react from "react"
import { RouterProvider } from "react-router-dom"
import {
    createBrowserRouter
} from "react-router-dom"
import * as ReactDOM from 'react-dom/client'
import Root from "../Layout/Root"
import Home from "../Pages/Home/Home"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
]);

export default router;