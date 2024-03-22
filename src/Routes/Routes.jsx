import {
    createBrowserRouter,
} from "react-router-dom";
import MainLaout from "../Layout/MainLaout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AddProperty from "../Pages/Dashboard/AddProperty/AddProperty";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import Profile from "../Pages/Dashboard/Profile/Profile";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Order from "../Pages/Dashboard/Order/Order";
import AdminHostRoute from "./AdminHostRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout></MainLaout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            
            {
                path:"/product/:id",
                element:<ProductDetails></ProductDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            }
        ]
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
            path:'add-product',
            element:<AdminHostRoute><AddProduct></AddProduct></AdminHostRoute>
        },
        {
            path:'add-property',
            element:<AdminHostRoute><AddProperty></AddProperty></AdminHostRoute>
        },
        {
            path:'manage-users',
            element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
            path:'profile',
            element:<Profile></Profile>
        },
        {
            path:'my-cart',
            element:<MyCart></MyCart>
        },
        {
            path:'order',
            element:<AdminHostRoute><Order></Order></AdminHostRoute>
        }
    ]
    }
]);