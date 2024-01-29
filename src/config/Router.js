//Customer
import Home from "../pages/Customer/Home/Home"
import About from "../pages/Customer/About/About"
import Items from "../pages/Customer/Items/Items"
import Portofolio from "../pages/Customer/Portofolio/Portofolio"

//Admin
import Dashboard from "../pages/Admin/Dashboard/Dashboard"
import Order from "../pages/Admin/Order/Order" 
import Profile from "../pages/Admin/Profile/Profile" 

//Login
import Login from "../pages/Login/Login"
import SignUp from "../pages/Login/SignUp" 

//NotFound
import PageNotFound from "../pages/NotFound/PageNotFound"


export const Router =[
    {
        path: "/",
        element:<Home/>
    },
    {
        path: "/about",
        element:<About/>
    },
    {
        path: "/portofolio",
        element:<Portofolio/>
    },
    {
        path: "/Items",
        element:<Items/>
    },
    {
        path: "/admin/dashboard",
        element:<Dashboard/>
    },
    {
        path: "/admin/order",
        element:<Order/>
    },
    {
        path: "/admin/profile",
        element:<Profile/>
    },
    {
        path: "/login/Login",
        element:<Login/>
    },
    {
        path: "/login/SignUp",
        element:<SignUp/>
    },
    {
        path: "/login/SignUp",
        element:<SignUp/>
    },
    {
        path: "/*",
        element:<PageNotFound/>
    },

];