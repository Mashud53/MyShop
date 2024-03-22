import Banner from "../../Components/Banner/Banner";


import { Helmet } from 'react-helmet-async';
import Trand from "../../Components/Trand/Trand";

import Category from "../../Components/Category/Category";
import Products from "./Products";
import Shorting from "../../Components/Shorting/Shorting";
import Footer from "../../Components/Shared/Footer/Footer"
import { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";


const Home = () => {
    const [allProducts, loading, setLoading] = useProducts()
    const [displayProducts, setDisplayProduct] = useState([])
    const [isBannerVisible, setIsBannerVisible] = useState(true);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [issidebarFixed, setIssidebarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const bannerSection = document.querySelector('.banner-section');
            const footerSection = document.querySelector('.footer-section');

            if (bannerSection) {
                const bannerReact = bannerSection.getBoundingClientRect();
                setIsBannerVisible(bannerReact.bottom > 0 && bannerReact.top < window.innerHeight);
            }

            if (footerSection) {
                const footerReact = footerSection.getBoundingClientRect();
                setIsFooterVisible(footerReact.top < window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [])


    useEffect(() => {
        if (!isBannerVisible && !isFooterVisible) {
            setIssidebarFixed(true)
            
        }else {
            setIssidebarFixed(false)
        }
        
    }, [isBannerVisible, isFooterVisible, issidebarFixed])

    return (
        <div className="min-h-[100vh] max-w-screen-xl pt-10 ">
            <Helmet><title>My Shop | Home</title></Helmet>
            {/* <Navbar></Navbar> */}
            <div className="banner-section hidden md:block">
                <Banner></Banner>
            </div>
            <div className="flex pt-6">
                <div>
                    {/* <div className={`hidden md:block side-bar w-40 mt-20 ${showfixedSidebar ? 'md:fixed md:top-5 lg:top-20' : 'pt-20'} `}>
                        <Shorting allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Shorting>

                    </div> */}
                    <div className={`hidden md:block w-40 ${issidebarFixed ? 'fixed top-5 md:top-20 z-10' : ''}  `}>
                        <Shorting allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Shorting>

                    </div>
                    <div className={`md:hidden w-20 mt-20 ${issidebarFixed ? "fixed top-0" : ""}`}>
                        <Shorting allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Shorting>

                    </div>
                    {/* <div className={`md:hidden w-20 mt-20 fixed top-0`}>
                        <Shorting allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Shorting>

                    </div> */}
                </div>
                <div>
                    {/* <div className={`hidden md:block ${showfixedSidebar ? ' md:ml-[192px]' : 'md:ml-8 ml-[5px]'}`}>
                        <div className={`${showfixedSidebar ? 'fixed md:top-40' : ' pt-16 md:pt-10'}`}>
                            <Category></Category>
                        </div>
                        <Products allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Products>
                        <Trand></Trand>
                    </div> */}
                    <div className={`hidden md:block ${issidebarFixed ? 'ml-[192px]' : 'md:ml-8 ml-[5px]'} `}>

                        <Category></Category>

                        {/* <Category></Category> */}
                        <Products allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Products>
                        <Trand></Trand>
                    </div>
                    <div className={`md:hidden ${issidebarFixed ? "ml-[85px]" : "ml-[5px]"}`}>

                        <Category></Category>

                        <Products allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Products>
                        <Trand></Trand>
                    </div>
                </div>
            </div>
            <div className="footer-section">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;