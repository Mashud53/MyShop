import Banner from "../../Components/Banner/Banner";


import { Helmet } from 'react-helmet-async';
import Trand from "../../Components/Trand/Trand";

import Category from "../../Components/Category/Category";
import Products from "./Products";
import Shorting from "../../Components/Shorting/Shorting";
import { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";





const Home = () => {
    const [allProducts, loading, setLoading] = useProducts()
    const [displayProducts, setDisplayProduct] = useState([])
    const [showfixedSidebar, setShofisecSidebar]= useState(false);
    useEffect(()=>{
        const handleScroll =()=>{
            const bannerSection= document.querySelector('.banner-section');
            const bannerSectionBotton = bannerSection.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;

            if(bannerSectionBotton <0){
                setShofisecSidebar(true);
            }
            else{
                setShofisecSidebar(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    return (
        <div className="min-h-[100vh]">
            <Helmet><title>My Shop | Home</title></Helmet>
            {/* <Navbar></Navbar> */}
            <div className="banner-section hidden md:block">
                <Banner></Banner>
            </div>
            <div className="flex">
                <div>
                {/* <div className={`hidden md:block side-bar w-40 mt-20 ${showfixedSidebar ?'md:fixed md:top-5 lg:top-20':'pt-20'} `}>
                    <Shorting allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Shorting>
                    
                </div> */}
                <div className={`hidden md:block side-bar w-40 ${showfixedSidebar ?'pt-20':'pt-20'} `}>
                    <Shorting allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Shorting>
                    
                </div>
                <div className={`md:hidden w-20 mt-20 fixed top-0`}>
                    <Shorting allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Shorting>
                    
                </div>
                </div>
                <div>
                {/* <div className={`hidden md:block ${showfixedSidebar ? ' md:ml-[192px]':'md:ml-8 ml-[5px]'}`}>
                    <Category></Category>
                    <Products allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Products>
                    <Trand></Trand>
                </div> */}
                <div className={`hidden md:block ${showfixedSidebar ? 'md:ml-8 ml-[5px]':'md:ml-8 ml-[5px]'}`}>
                    <Category></Category>
                    <Products allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Products>
                    <Trand></Trand>
                </div>
                <div className={`md:hidden ml-[85px]`}>
                    <Category></Category>
                    <Products allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Products>
                    <Trand></Trand>
                </div>
                </div>
            </div> 
        </div>
    );
};

export default Home;