import {
    createBrowserRouter,
} from "react-router-dom";
import MainLaout from "../Layout/MainLaout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
        path:'/sugnUp',
        element:<SignUp></SignUp>
    },
    {
        path:'/login',
        element:<Login></Login>
    }
]);