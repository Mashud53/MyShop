import Banner from "../../Components/Banner/Banner";


import { Helmet } from 'react-helmet-async';
import Trand from "../../Components/Trand/Trand";
import Products from "./Products";
import { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import ShopByBrand from "../../Components/ShopByBrand/ShopByBrand";
import PopularProduct from "../../Components/PopularProduct/PopularProduct";
// import ReactWhatsapp from 'react-whatsapp';
// import { IoLogoWhatsapp } from "react-icons/io";
import Whatsapp from "../../Components/Shared/Whatsapp/Whatsapp";


const Home = () => {
    const [allProducts, loading, setLoading] = useProducts()
    const [displayProducts, setDisplayProduct] = useState([])
    // const [isBannerVisible, setIsBannerVisible] = useState(true);
    // const [isFooterVisible, setIsFooterVisible] = useState(false);
    // const [issidebarFixed, setIssidebarFixed] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const bannerSection = document.querySelector('.banner-section');
    //         const footerSection = document.querySelector('.footer-section');

    //         if (bannerSection) {
    //             const bannerReact = bannerSection.getBoundingClientRect();
    //             setIsBannerVisible(bannerReact.bottom > 0 && bannerReact.top < window.innerHeight);
    //         }

    //         if (footerSection) {
    //             const footerReact = footerSection.getBoundingClientRect();
    //             setIsFooterVisible(footerReact.top < window.innerHeight);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     };
    // }, [])


    // useEffect(() => {
    //     if (!isBannerVisible && !isFooterVisible) {
    //         setIssidebarFixed(true)

    //     } else {
    //         setIssidebarFixed(false)
    //     }

    // }, [isBannerVisible, isFooterVisible, issidebarFixed])

    return (
        <div className="min-h-[100vh] pt-10 max-w-screen-xl">
            <Helmet><title>My Shop | Home</title></Helmet>
            {/* <Navbar></Navbar> */}
            {/* <div className="mt-6 navbar navbar-center max-w-screen-xl bg-white fixed z-10 ">
                <Category></Category>
            </div> */}
            <div className="banner-section hidden md:block mt-20">
                <Banner></Banner>
            </div>
            <ShopByBrand></ShopByBrand>
            <PopularProduct></PopularProduct>
            <Products allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Products>
            <Trand></Trand>
            {/* <div className="flex pt-6">
                <div className="">
                   
                    <div className={`hidden md:block w-40 ${issidebarFixed ? 'fixed top-5 md:top-20 z-10' : ''}  `}>
                        <Shorting allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Shorting>

                    </div>
                    <div className={`md:hidden w-20 mt-20 ${issidebarFixed ? "fixed top-0" : ""}`}>
                        <Shorting allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Shorting>

                    </div>
                    
                </div>
                <div className=" w-full">
                    
                    <div className={` hidden md:block ${issidebarFixed ? 'ml-[192px]' : 'md:ml-8 ml-[5px]'} `}>

                        
                        <Products allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Products>
                        <Trand></Trand>
                    </div>
                    <div className={`md:hidden flex flex-col items-center justify-center ${issidebarFixed ? "ml-[85px]" : "ml-[5px]"}`}>

                        

                        <Products allProducts={allProducts} loading={loading} setLoading={setLoading} displayProducts={displayProducts} setDisplayProduct={setDisplayProduct}></Products>
                        <Trand></Trand>
                    </div>
                </div>
            </div> */}
            <Whatsapp></Whatsapp>
        </div>
    );
};

export default Home;