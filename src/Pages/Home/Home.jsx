import Banner from "../../Components/Banner/Banner";


import { Helmet } from 'react-helmet-async';
import Trand from "../../Components/Trand/Trand";

import Category from "../../Components/Category/Category";
import Products from "./Products";





const Home = () => {
    
    return (
        <div>
            <Helmet><title>My Shop | Home</title></Helmet>
            {/* <Navbar></Navbar> */}
            <div className="hidden md:block">
                <Banner></Banner>
            </div>
            <Category></Category>
            <Products></Products>
            <Trand></Trand>
            {/* <Footer></Footer> */}




        </div>
    );
};

export default Home;