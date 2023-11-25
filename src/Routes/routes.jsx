import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Alltest from "../Pages/AllTest/Alltest";

const routes = createBrowserRouter([
    {
    path:"/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/alltest",
            element:<Alltest></Alltest>
        }
    ]
    },
    {
        path:"login",
        element:<Login></Login>
    },
    {
        path:"signup",
        element:<Register></Register>
    },


])

export default routes;