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
import Apple from "../Pages/Products/Apple";
import Samsung from "../Pages/Products/Samsung";
import GooglePixel from "../Pages/Products/GooglePixel";
import Xiaomi from "../Pages/Products/Xiaomi";
import OnePlus from "../Pages/Products/OnePlus";
import Oppo from "../Pages/Products/Oppo";
import Sony from "../Pages/Products/Sony";
import Huawei from "../Pages/Products/Huawei";
import Realme from "../Pages/Products/Realme";
import Hp from "../Pages/Products/Hp";
import Dell from "../Pages/Products/Dell";
import Vivo from "../Pages/Products/Vivo";
import ManageProduct from "../Pages/Dashboard/ManageProduct/ManageProduct";
import UpdateProduct from "../Pages/Dashboard/ManageProduct/UpdateProduct";

import MobileApple from "../Pages/MenuItem/Mobile/MobileApple";
import MobileGooglePixel from "../Pages/MenuItem/Mobile/MobileGooglePixel";
import MobileHuwei from "../Pages/MenuItem/Mobile/MobileHuwei";
import MobileOnePlus from "../Pages/MenuItem/Mobile/MobileOnePlus";
import MobileOppo from "../Pages/MenuItem/Mobile/MobileOppo";
import MobileRealme from "../Pages/MenuItem/Mobile/MobileRealme";
import MobileSamsung from "../Pages/MenuItem/Mobile/MobileSamsung";
import MobileSony from "../Pages/MenuItem/Mobile/MobileSony";
import MobileVivo from "../Pages/MenuItem/Mobile/MobileVivo";
import MobileXiaomi from "../Pages/MenuItem/Mobile/MobileXiaomi";
import Lenovo from "../Pages/Products/Lenovo";
import LaptopApple from "../Pages/MenuItem/Laptop/LaptopApple";
import LaptopDell from "../Pages/MenuItem/Laptop/LaptopDell";
import LaptopHp from "../Pages/MenuItem/Laptop/LaptopHp";
import LaptopLenovo from "../Pages/MenuItem/Laptop/LaptopLenovo";
import Watch from "../Pages/MenuItem/Watch/Watch";
import ClassicWatch from "../Pages/MenuItem/Watch/ClassicWatch";
import SmartWatch from "../Pages/MenuItem/Watch/SmartWatch";
import PowerAdapter from "../Pages/MenuItem/Accessories/PowerAdapter";
import PowerBank from "../Pages/MenuItem/Accessories/PowerBank";
import WirelessCharger from "../Pages/MenuItem/Accessories/WirelessCharger";
import Airpods from "../Pages/MenuItem/Accessories/Airpods";
import WirelessHeadphone from "../Pages/MenuItem/Accessories/WirelessHeadphone";
import Speaker from "../Pages/MenuItem/Accessories/Speaker";
import Headphone from "../Pages/MenuItem/Accessories/Headphone";
import Perfume from "../Pages/MenuItem/Perfume/Perfume";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import SearchResults from "../Pages/SearchResults/SearchResults";
import PopularPodcut from "../Pages/PopularProduct/PopularPodcut";
import JustForYou from "../Pages/JustForYou/JustForYou";
import ReturnPolicy from "../Pages/ReturnPolicy/ReturnPolicy";
import AboutUs from "../Pages/AboutUs/AboutUs";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Faq from "../Pages/Faq/Faq";
import ShippingAndDelivery from "../Pages/ShippingAndDelivery/ShippingAndDelivery";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout></MainLaout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/product/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://api.deluxmart.com/product/${params.id}`),
                
            },
            // brand product 
            {
                path: '/Apple',
                element: <Apple></Apple>

            },
            {
                path: '/Samsung',
                element: <Samsung></Samsung>

            },
            {
                path: '/GooglePixel',
                element: <GooglePixel></GooglePixel>

            },
            {
                path: '/Xiaomi',
                element: <Xiaomi></Xiaomi>

            },
            {
                path: '/OnePlus',
                element: <OnePlus></OnePlus>

            },
            {
                path: '/Oppo',
                element: <Oppo></Oppo>

            },
            {
                path: '/Sony',
                element: <Sony></Sony>

            },
            {
                path: '/Huawei',
                element: <Huawei></Huawei>

            },
            {
                path: '/Realme',
                element: <Realme></Realme>

            },
            {
                path: '/Vivo',
                element: <Vivo></Vivo>

            },
            {
                path: '/Honor',
                element: <Vivo></Vivo>

            },
            {
                path: '/Hp',
                element: <Hp></Hp>

            },
            {
                path: '/Dell',
                element: <Dell></Dell>

            },
            {
                path: '/Lenovo',
                element: <Lenovo></Lenovo>

            },

            // menu routs mobile
            {
                path:'mobile-apple',
                element:<MobileApple></MobileApple>
            },
            {
                path:'mobile-samsung',
                element:<MobileSamsung></MobileSamsung>
            },
            
            {
                path:'mobile-googlePixel',
                element:<MobileGooglePixel></MobileGooglePixel>
            },
            
            {
                path:'mobile-huawei',
                element:<MobileHuwei></MobileHuwei>
            },
            {
                path:'mobile-oneplus',
                element:<MobileOnePlus></MobileOnePlus>
            },
            {
                path:'mobile-oppo',
                element:<MobileOppo></MobileOppo>
            },
            {
                path:'mobile-realme',
                element:<MobileRealme></MobileRealme>
            },
            {
                path:'mobile-sony',
                element:<MobileSony></MobileSony>
            },
            {
                path:'mobile-vivo',
                element:<MobileVivo></MobileVivo>
            },
            {
                path:'mobile-xiaomi',
                element:<MobileXiaomi></MobileXiaomi>
            },
            // menu routs laptop 
            {
                path:'macbook',
                element:<LaptopApple></LaptopApple>
            },
            {
                path:'laptop-dell',
                element:<LaptopDell></LaptopDell>
            },
            {
                path:'laptop-hp',
                element:<LaptopHp></LaptopHp>
            },
            {
                path:'laptop-lenovo',
                element:<LaptopLenovo></LaptopLenovo>
            },
            {
                path:'watch',
                element:<Watch></Watch>
            },
            {
                path:'classic-watch',
                element:<ClassicWatch></ClassicWatch>
            },
            {
                path:'smart-watch',
                element:<SmartWatch></SmartWatch>
            },
            // Accessories routes 
            {
                path:'accessory-powerAdapter',
                element:<PowerAdapter></PowerAdapter>
            },
            {
                path:'accessory-powerbank',
                element:<PowerBank></PowerBank>
            },
            {
                path:'accessory-WirelessCharger',
                element:<WirelessCharger></WirelessCharger>
            },
            {
                path:'accessory-airpods',
                element:<Airpods></Airpods>
            },
            {
                path:'accessory-Wirelessheadphone',
                element:<WirelessHeadphone></WirelessHeadphone>
            },
            {
                path:'accessory-speaker',
                element:<Speaker></Speaker>
            },
            {
                path:'accessory-headphone',
                element:<Headphone></Headphone>
            },
            {
                path:'/perfume',
                element:<Perfume></Perfume>
            },
            {
                path:'/popularProducts',
                element:<PopularPodcut></PopularPodcut>
            },
            {
                path:'/justForYou',
                element:<JustForYou></JustForYou>
            },
            // Search routs 
            {
                path:'/search',
                element:<SearchResults></SearchResults>
            },
            {
                path:'/returnPolicy',
                element:<ReturnPolicy></ReturnPolicy>
            },
            {
                path:'/termsConditons',
                element:<TermsConditions></TermsConditions>
            },
            {
                path:'/privecyPolicy',
                element:<PrivacyPolicy></PrivacyPolicy>
            },
            {
                path:'/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/shippingAndDelivery',
                element:<ShippingAndDelivery></ShippingAndDelivery>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
        ]
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'add-product',
                element: <AdminHostRoute><AddProduct></AddProduct></AdminHostRoute>
            },
            {
                path: 'manage-product',
                element: <AdminHostRoute><ManageProduct></ManageProduct></AdminHostRoute>
            },
            {
                path: 'updateProduct/:id',
                element: <AdminHostRoute><UpdateProduct></UpdateProduct></AdminHostRoute>,
                loader: ({ params }) => fetch(`https://api.deluxmart.com/product/${params.id}`),
                
            },
            {
                path: 'add-property',
                element: <AdminHostRoute><AddProperty></AddProperty></AdminHostRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'my-cart',
                element: <MyCart></MyCart>
            },
            {
                path: 'order',
                element: <AdminHostRoute><Order></Order></AdminHostRoute>
            },
            {
                path: 'my-order',
                element: <MyOrder></MyOrder>
            }
        ]
    }
]);