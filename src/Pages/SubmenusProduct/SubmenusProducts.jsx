import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

import { Helmet } from "react-helmet-async";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loader from "../../Components/Loader/Loader";


const SubmenusProducts = () => {
    const filterProduct = useParams();
    const filterItem = filterProduct.menu;
    const [loading, setLoading]= useState(false)
    const [allProducts, isLoading] = useProducts();
    const [displayproduct, setDisplayProduct] = useState([])
    
    

    useEffect(()=>{
        
        if(filterItem && allProducts){
            setLoading(true)

            const filterProducts = allProducts.filter(item => 
                item.type.toLowerCase() === (filterItem.toLowerCase())
            );
            setLoading(false)
            setDisplayProduct(filterProducts)

        }

    },[allProducts, filterItem])
    console.log(displayproduct)

    if (isLoading || loading) {
        return <Loader></Loader>
    }
    return (
        <div className="pt-28 pb-10">
            <Helmet><title>DeluxMart | {filterItem}</title></Helmet>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center font-catamaran text-base font-semibold px-4 md:px-0  md:pt-10 mx-auto">
                {displayproduct?.map(products => <ProductCard key={products._id} products={products}></ProductCard>)}
            </div>
            
        </div>
    );
};

export default SubmenusProducts;