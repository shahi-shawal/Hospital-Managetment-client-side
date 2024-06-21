import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Alltest from "../Pages/AllTest/Alltest";
import Testdetails from "../Pages/AllTest/Testdetails";
import Dashboard from "../layout/Dashboard";
import Adminhome from "../Pages/Dashboard/Adminhome/Adminhome";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import AddTests from "../Pages/Dashboard/AllTests/AddTests";
import Allservice from "../Pages/Dashboard/AllTests/Allservice";
import EditTest from "../Pages/Dashboard/AllTests/EditTest";
import AllBanner from "../Pages/Dashboard/Banner/AllBanner";
import AddBanner from "../Pages/Dashboard/Banner/AddBanner";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
import Profile from "../Pages/Dashboard/Userhome/Profile";
import Appointment from "../Pages/Dashboard/Userhome/Appointment";
import Reservation from "../Pages/Dashboard/Resrvation/Reservation";
import Testresults from "../Pages/Dashboard/Userhome/Testresults";
import Payment from "../Pages/Dashboard/Userhome/Payment";
import Pay from "../Pages/Dashboard/Userhome/Payment/Pay";
import About from "../Pages/About/About";

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
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"details/:id",
            element:<PrivateRoute><Testdetails></Testdetails></PrivateRoute>,
            loader:({params})=>fetch(`https://assignment-12-server-five-jade.vercel.app/tests/${params.id}`)
        },
       
    ]
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[{
            path:"userhome",
            element:<Profile></Profile>
        },
        {
            path:"appointments",
            element:<Appointment></Appointment>
        },
        {
            path:"testresult",
            element:<Testresults></Testresults>
        },
        {
            path:"payment",
            element:<Payment></Payment>
        },
        {
            path:"payment/pay",
            element:<Pay></Pay>
        },
        {
            path:"adminhome",
            element:<AdminRoutes><Adminhome></Adminhome></AdminRoutes>
        },
        {
            path:"allusers",
            element:<AdminRoutes><Allusers></Allusers></AdminRoutes>
        },
        {
            path:"addtests",
            element:<AdminRoutes><AddTests></AddTests></AdminRoutes>,
        },
        {
            path:"allservice",
            element:<AdminRoutes><Allservice></Allservice></AdminRoutes>,
        },
        {
            path:"updateTest/:id",
            element:<AdminRoutes><EditTest></EditTest></AdminRoutes>,
            loader:({params})=>fetch(`https://assignment-12-server-five-jade.vercel.app/tests/${params.id}`)
        },
        {
            path:"allbanner",
            element:<AdminRoutes><AllBanner></AllBanner></AdminRoutes>
        },
        {
           path:"addbanner",
           element:<AdminRoutes><AddBanner></AddBanner></AdminRoutes>
        },{
            path:"reservation",
            element:<Reservation></Reservation>
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